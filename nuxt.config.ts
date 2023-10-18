// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
