import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@primevue/nuxt-module', '@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  }
})