const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'https://dev-api.buene.live/api/'
    : 'https://api.buene.live/api/';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'note-chat',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-svg-loader',
    '@nuxtjs/axios',
    '@nuxtjs/dayjs',

    'cookie-universal-nuxt',
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  storybook: {
    // Options
  },

  publicRuntimeConfig: {
    baseURL: BASE_URL,
  },

  axios: {
    baseURL: BASE_URL,
  },

  dayjs: {
    locales: ['en'],
    defaultLocale: 'en',
    plugins: ['relativeTime', 'updateLocale', 'calendar'],
  },
};
