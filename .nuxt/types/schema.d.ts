import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["pwa"]?: typeof import("@vite-pwa/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["splide"]?: typeof import("nuxt-splide").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@vite-pwa/nuxt", Exclude<NuxtConfig["pwa"], boolean>] | ["nuxt-splide", Exclude<NuxtConfig["splide"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   splide: {
      theme: string,
   },
  }
  interface PublicRuntimeConfig {
   splide: {
      theme: string,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }