const https = require('https');
const fs = require('fs')
const path = require('path');
const args = require('minimist')(process.argv.slice(2))

const argsList = args._
const argsMap = {}
if (!argsList.length) {
  return console.error('缺少参数~')
}
argsList.forEach(item => {
  const [key, value] = item.split('=')
  argsMap[key] = value
})

const { url, module: interfaceModule } = argsMap

if (!url) {
  return console.error('请输入url~')
}

if (!interfaceModule) {
  return console.error('请指定模块~')
}

const typeMap = {
  string: 'string',
  boolean: 'boolean',
  integer: 'number',
  number: 'number'
}

let interfaceStrs = `import request from '@/config/axios'
`
let apisStr = ``
const interfaceMap = {}
https.get(url, res => {
  res.setEncoding('utf-8')
  let body = ''
  const { statusCode } = res
  if (statusCode !== 200) {
    console.error(`请求错误，错误码：${statusCode}`)

    return
  }
  res.on('data', data => {
    body += data
  })

  res.on('end', () => {
    body = JSON.parse(body)
    const { paths, definitions } = body
    if (!Object.keys(paths || {}).length) {
      return
    }

    // 生成interface对应的对象
    Object.entries(definitions).forEach(optionItem => {
      const [key, value] = optionItem
      const { properties, type, required } = value
      const itemOptions = {}
      if (type === 'object' && properties) {
        Object.keys(properties).forEach(propertyKey => {
          let isRequired = false
          if (required) {
            isRequired = required.includes(propertyKey)
          }
          const { type, description, items, $ref } = properties[propertyKey]
          if ($ref) {
            const $refsList = $ref.split('/')
            itemOptions[propertyKey] = { type, dep: $refsList[$refsList.length - 1], isRequired }
          } else {
            if (typeMap[type]) {
              itemOptions[propertyKey] = { type, dep: null, description, isRequired }
            } else {
              // 处理数组类型
              if (type === 'array') {
                const { type: itemType, $ref } = items
                if (!$ref) {
                  if (itemType !== 'object') {
                    itemOptions[propertyKey] = { type, itemType, isRequired }
                  }
                } else {
                  const $refsList = $ref.split('/')
                  itemOptions[propertyKey] = { type, dep: $refsList[$refsList.length - 1], isRequired }
                }
              }
            }
          }
        })
        interfaceMap[key] = { ...itemOptions }
      }
    })

    Object.entries(interfaceMap).forEach(item => {
      const [key, values] = item
      let itemInterface = ``
      const keys = key.split('.')
      const interfaceName = keys[keys.length - 1]
      Object.keys(values).forEach(itemKey => {
        if (!/\-/g.test(itemKey)) {
          const { type, itemType, dep, description, isRequired  } = values[itemKey]
          const finalType = typeMap[type]
          if (!dep) {
            // 基本类型
            if (type !== 'array') {
              itemInterface += `${itemKey}${isRequired ? '?' : ''}: ${finalType} ${description ? `// ${description}` : ''}
              `
            } else {
              // 基本类型数组
              itemInterface += `${itemKey}${isRequired ? '?' : ''}: ${typeMap[itemType]}[] ${description ? `// ${description}` : ''}
              `
            }
          }

          // 对象类型
          if (type === undefined && dep) {
            // console.log('====itemKey: ', itemKey, values[itemKey])
            // const deps = interfaceMap[dep]
            // let depStr = ``
            // Object.keys(deps).forEach(depKey => {

            // })
            //   itemInterface += `${itemKey}${isRequired ? '?' : ''}: ${interfaceMap[dep]} ${description ? `// ${description}` : ''}
            // `
          }
        }
      })

      interfaceStrs += `
        export interface ${interfaceName} {
          ${itemInterface}
        }
          `
    })

    fs.writeFile(`${path.resolve(__dirname)}/api.ts`, interfaceStrs, err => {
      Object.entries(paths).forEach(item => {
        const [path, value] = item
        if (path.includes(interfaceModule)) {
          Object.entries(value).forEach(item => {
            const [method, options] = item
            const { summary } = options
            const pathList = path.split('/')
            const apiName = pathList[pathList.length - 1]
            apisStr += `
              // ${summary}
              export const ${apiName} = params => {
                  return request({
                    url: '${path}',
                    method: '${method}',
                    params
                  })
                }
            `
          })
        }
      })

      fs.appendFile(`${path.resolve(__dirname)}/api.ts`, apisStr, err => {
        if (err) {
          return console.log('api内容生成失败: ', err)
        }
        console.log('api内容写入成功_^^_')
      })
    })
  })
})
