// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-07-02',
  devtools: { enabled: true },
  tailwindcss: {
    config: {
      safelist: [
        'bg-orange-100',
        'bg-orange-300',
        'bg-orange-500',
        'bg-blue-500',
        'bg-blue-600',
        'bg-cyan-500',
        'bg-gray-600',
        'bg-gray-700',
        'bg-green-400',
        'bg-green-500',
        'bg-green-600',
        'bg-purple-500',
        'bg-red-400',
        'bg-teal-500',
        'from-blue-400',
        'from-blue-500',
        'from-cyan-500',
        'from-gray-900',
        'from-green-400',
        'from-orange-300',
        'from-orange-400',
        'from-orange-500',
        'from-purple-500',
        'from-yellow-500',
        'to-blue-600',
        'to-blue-700',
        'to-gray-600',
        'to-green-600',
        'to-orange-500',
        'to-orange-600',
        'to-pink-500',
        'to-pink-600',
        'to-red-600',
      ],
    },
  },

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
