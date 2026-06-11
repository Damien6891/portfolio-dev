// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // compatibilityDate: '2025-07-15',
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/image', '@nuxtjs/i18n'],
  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit'],
    },
  },
  css: [
    // '~/assets/css/main.css',
    '~/assets/scss/main.scss',
  ],

  i18n: {
    locales: [
      {
        code: 'fr',
        language: 'fr-FR',
        name: 'Français',
        file: 'fr.json',
      },
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
        file: 'en.json',
      },
    ],
    defaultLocale: 'fr',
    strategy: 'prefix_except_default', // /en/services mais /services pour FR
    langDir: 'locales/',
    compilation: {
      strictMessage: false,
      escapeHtml: false,
    },
    // detectBrowserLanguage: {
    //   useCookie: true,
    //   cookieKey: 'i18n_redirected',
    //   redirectOn: 'root',
    // },
    // vueI18n: './i18n.config.ts',
    // compilation: {
    //   strictMessage: false,
    //   escapeHtml: false,
    // },
  },
});
