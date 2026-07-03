// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-07-02',
  devtools: { enabled: true },
  
  modules:[
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/content',
    'nuxt-component-meta',
    'nuxt-studio'
  ],
  studio: {
    repository: {
      provider: 'github', // 'github' or 'gitlab'
      owner: 'samson4',
      repo: 'portfolio',
      branch: 'main'
    }
  }
})