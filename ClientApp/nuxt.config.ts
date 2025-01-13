// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  devServer: { host: "localhost" },
  nitro: {
    devProxy: {
      "/_": {
        target: "https://localhost:5001/_",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  ssr: false,
});
