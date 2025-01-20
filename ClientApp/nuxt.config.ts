// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  devServer: { host: "localhost" },
  nitro: {
    devProxy: {
      "/api": {
        target: "https://localhost:5001/api",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  ssr: false,
});
