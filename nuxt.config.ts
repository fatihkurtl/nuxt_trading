export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "nuxt-tradingview",
    "@primevue/nuxt-module",
    "@nuxtjs/i18n",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
  ],
  cookieControl: {
    // typed module options
  },
  plugins: ["~/plugins/cookies.ts"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Nuxt TradingView",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Explore the latest data, insights, and analysis on cryptocurrencies, stocks, and financial markets. Stay informed with our comprehensive resources and tools.",
        },
        {
          hid: "robots",
          name: "robots",
          content:
            "index, follow max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Comprehensive Crypto and Stock Market Insights",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Get the latest data and insights on cryptocurrencies, stocks, and financial markets. Our platform provides real-time analysis and tools to help you make informed investment decisions.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "/assets/trade.png",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://yourdomain.com",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Comprehensive Crypto and Stock Market Insights",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Access the latest data and insights on cryptocurrencies, stocks, and financial markets. Our platform offers real-time analysis and tools for smarter investment decisions.",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "/assets/trade.png",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://yourdomain.com" },
      ],
    },
  },
  robots: {
    rules: [
      {
        userAgent: "*",
        disallow: "",
      },
    ],
  },
  sitemap: {
    hostname: "https://yourdomain.com",
    gzip: true,
    exclude: ["/admin/**"],
    routes: async () => {
      const routes = ["/", "/crypto", "/stock", "/market", "/news", "/contact"];
      return routes;
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
