

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  plugins: [
    // { src: '~/plugins/pwa-update.js', mode: 'client' },
    // { src: "~/plugins/sw-update.js", mode: "client" }
  ],
  modules: [
    '@vite-pwa/nuxt'
  ],
  // pwa: {
  //   manifest: {
  //     name: "PetoMan",
  //     short_name: "PetoMan PWA",
  //     description: "PetoMan Web App",
  //     icons: [
  //       // {
  //       //   src: "icons/icon_64x64.png",
  //       //   sizes: "64x64",
  //       //   type: "image/png",
  //       // },
  //       // {
  //       //   src: "icons/icon_144x144.png",
  //       //   sizes: "144x144",
  //       //   type: "image/png",
  //       // },
  //       {
  //         src: "/logo192.png",
  //         sizes: "192x192",
  //         type: "image/png",
  //       },
  //       {
  //         src: "/logo512.png",
  //         sizes: "512x512",
  //         type: "image/png",
  //       },
  //     ],
  //   },
  //   workbox: {
  //     navigateFallback: "/",
  //   },
  //   devOptions: {
  //     enabled: true,
  //     type: "module",
  //   },
  // },
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

