// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/mosahebe-fe/',
    buildAssetsDir: 'assets'
  },
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    ['@nuxtjs/google-fonts', {
      families: {
        Roboto: true,
        'Rubik Mono One': true,
      }
  }],
  ],
  colorMode: {
    preference: 'dark'
  }
})
