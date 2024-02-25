import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 导入组件、组合式函数、辅助函数和Vue API
  imports: {
    presets: []
  },
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@vexip-ui/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-icons',
  ],
  vite: {
    css: {
      postcss: {},
      preprocessorOptions: {
        less: {
          javascriptEnabled: true // 如果需要启用 Less 的 JavaScript 功能，设置为 true
        }
      }
    },
    plugins: [
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false,
          }),
        ],
      }),
    ]
  },
  // 构建时检查
  typescript: {
    typeCheck: true
  },
  routeRules: {
    // 主页在构建时预渲染
    '/': { prerender: true },
    // 产品页面按需生成，后台自动重新验证
    // '/products/**': { swr: 3600 },
    // 博客文章按需生成，直到下一次部署前持续有效
    // '/blog/**': { isr: true },
    // 管理仪表板仅在客户端渲染
    // '/admin/**': { ssr: false },
    // 在API路由上添加cors头
    // '/api/**': { cors: true },
    // 跳转旧的URL
    // '/old-page': { redirect: '/new-page' }
  },
})