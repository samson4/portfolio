// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-07-02',
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap',
        },
      ],
      style: [
        {
          children:
            'html, body, button, input, textarea, select, h1, h2, h3, h4, h5, h6 { font-family: "Manrope", sans-serif; }',
        },
      ],
    },
  },

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
