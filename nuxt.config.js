import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    script: [
      {
        src: "/node_modules/bootstrap/dist/js/bootstrap.min.js",
      },
    ],
  },
  css: ["bootstrap/dist/css/bootstrap.min.css"],
});
