// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', "@nuxtjs/tailwindcss", '@vite-pwa/nuxt'],
  css: ['~/assets/css/global.css'],
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  ssr: true,
  pwa: {
    registerType: 'autoUpdate',
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico,jpeg,jpg}'],
      sourcemap: true,
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 10000,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    }
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    storageKey: 'colorMode'
  }
})