

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  css: ['~/assets/css/app.css', '~/assets/css/icons.css'],
  modules: [
    '@vite-pwa/nuxt',
    'nuxt-splide'
  ],
  splide: {
    theme: 'default'
  },
  pwa: {

  },
  devtools: { enabled: false },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        dir: 'rtl'
      },
      title: 'Pet Strore App',
      meta: [
        { name: 'description', content: 'Pet Store Website' },
        { name: 'theme-color', content: '#ffdd67' },
        { name: 'title', content: 'Pet Store Website' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'mobile-web-app-title', content: 'Pet Store Website' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-title"', content: 'Pet Store Website' },
        { name: 'application-name"', content: 'Pet Store Website' },
      ],

      link: [
        { hid: 'icon', rel: 'icon', type: 'image/png', href: '/logo192.png' },
        { hid: 'apple-touch-icon', rel: 'apple-touch-icon', href: '/logo192.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ],

      bodyAttrs: {
        class: 'font-fa'
      },
    }
  },


})

