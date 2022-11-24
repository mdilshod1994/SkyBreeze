require('dotenv').config()
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Stress-free moving! Organization of relocation in California. Professional movers and 100% safety of property. We will urgently transport your furniture and belongings. The cost of your move online on a website!' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:site_name', content: "SkyBreeze" },
      { property: 'og:title', content: "SkyBreeze" },
      // { property: 'og:image', content: process.env.API_URL + '/avatar.png' },
      // { property: 'og:image:width', content: "250" },
      // { property: 'og:image:height', content: "250" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss',
    '@/assets/css/transition-page.css',
  ],
  router: {
    middleware: ["i18n"]
  },
  serverMiddleware: [
    '~/middleware/redirects.js'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/datepicker.js',
    '@/plugins/gl-components.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    'cookie-universal-nuxt',
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: [
      'es',
      'ru',
      'en',
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL,
  },
  loading: false,
  transition: {
    name: 'fade-layouts',
    mode: 'out-in'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null,
  }
}
