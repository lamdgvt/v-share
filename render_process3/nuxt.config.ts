// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@vexip-ui/nuxt',
    // '@nuxtjs/tailwindcss',
    '@nuxt/ui',
    'nuxt-icons',
    "nuxt-swiper",
  ],
  // 构建时检查
  typescript: {
    typeCheck: true
  },
})