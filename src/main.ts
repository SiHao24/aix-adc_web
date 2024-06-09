import '@/plugins/unocss' // 引入unocss css
import '@/plugins/svgIcon' // 导入全局的svg图标
import { setupI18n } from '@/plugins/vueI18n' // 初始化多语言
import { setupStore } from '@/store' // 引入状态管理
import { setupGlobCom } from '@/components' // 全局组件
import { setupElementPlus } from '@/plugins/elementPlus' // 引入 element-plus
import { setupFormCreate } from '@/plugins/formCreate' // 引入 form-create
import '@/styles/index.scss' // 引入全局样式
import '@/plugins/animate.css' // 引入动画
import router, { setupRouter } from '@/router' // 路由
import { setupAuth } from '@/directives' // 权限
import { createApp } from 'vue'
import App from './App.vue'
import './permission'
import '@/plugins/tongji' // 百度统计
import Logger from '@/utils/Logger'
import VueDOMPurifyHTML from 'vue-dompurify-html' // 解决v-html 的安全隐患

// 创建实例
const setupAll = async () => {
  const app = createApp(App)
  await setupI18n(app)
  setupStore(app)
  setupGlobCom(app)
  setupElementPlus(app)
  setupFormCreate(app)
  setupRouter(app)
  setupAuth(app)
  await router.isReady()
  app.use(VueDOMPurifyHTML)
  app.mount('#app')
}

setupAll()
Logger.prettyPrimary(`欢迎使用`, import.meta.env.VITE_APP_TITLE)
