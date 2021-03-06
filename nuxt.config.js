export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'castos-music',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: '' }, { name: 'format-detection', content: 'telephone=no' }],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.15.4/css/all.css', crossOrigin: 'anonymous' },
    ],
    script: [{ type: 'module', src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js' }, { src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{src:'@assets/global.css'}],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl : "http://localhost:3001"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
