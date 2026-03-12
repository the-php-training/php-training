// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/test-utils',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon'
  ],

  fonts: {
    families: [
      {
        name: 'Oswald',
        provider: 'google',
        weights: [400, 500, 600, 700]
      }
    ]
  },

  css: ['~/assets/css/main.css']
})