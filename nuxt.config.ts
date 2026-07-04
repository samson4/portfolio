// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-07-02',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            ink: {
              50: '#F3F4F1',
              100: '#E7E8E2',
              300: '#6A6C66',
              500: '#5C5E52',
              700: '#2B2D24',
              900: '#14150F',
              950: '#0C0D08',
            },
            paper: {
              DEFAULT: '#F6F2E9',
              50: '#FCFAF4',
              100: '#F6F2E9',
              200: '#EDE7D6',
            },
            copper: {
              50: '#FBEEE3',
              100: '#F4D8BC',
              300: '#DA9A57',
              500: '#B5622A',
              600: '#994F20',
              700: '#7A3F1A',
            },
            signal: {
              DEFAULT: '#1F6F63',
              100: '#D9EAE6',
              500: '#1F6F63',
              700: '#144D44',
            },
          },
          fontFamily: {
            display: ['Fraunces', 'serif'],
            body: ['Manrope', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          },
        },
      },
    },
  },

  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=JetBrains+Mono:wght@400;500;600&display=swap',
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
