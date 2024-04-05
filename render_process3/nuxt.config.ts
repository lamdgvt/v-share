
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 3300,
  },
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
    "nuxt-headlessui"
  ],
  build: {
    
  },
})