import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
})