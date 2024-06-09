const https = require('https');
const fs = require('fs')
const path = require('path');

const typeMap = {
  string: 'string',
  boolean: 'boolean',
  integer: 'number',
  number: 'number'
}

let interfaceStrs = ''
let apisStr = `import request from '@/config/axios'
`
const interfaceMap = {}
https.get('https://dms.zongmutech.com/dcs/server/swagger/doc.json', res => {
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

    fs.writeFile(`${path.resolve(__dirname)}/interface.json`, JSON.stringify(interfaceMap), err => {
      Object.entries(paths).forEach(item => {
        const [path, value] = item
        if (path.includes('/collection')) {
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

      fs.writeFile(`${path.resolve(__dirname)}/api.ts`, apisStr, err => {
        if (err) {
          return console.log('api内容生成失败: ', err)
        }
        console.log('api内容写入成功_^^_')
      })
    })
  })
})
