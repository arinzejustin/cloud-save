<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const { $pwa } = useNuxtApp();
    const colorMode = useColorMode();

    const isDark = computed({
      get() {
        return colorMode.value === 'dark';
      },
      set(value: string) {
        colorMode.preference = value ? 'dark' : 'light';
      }
    });

    useHead({
      title: ``,
      titleTemplate: (title: any) => ``,
      meta: [
        {
          name: "viewport",
          content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover",
        },
        { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
        { name: "language", content: "English" },
        { name: "robot", content: "index, follow" },
        { name: "charset", content: "utf-8" },
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "msapplication-TileColor", content: "#ffffff" },
        { name: "msapplication-tap-highlight", content: "no" },
        { name: "theme-color", content: "#000000" },
        { name: "apple-mobile-web-app-title", content: "Cloud Save" },
        { name: "apple-mobile-web-app-status-bar-style", content: "default" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "application-name", content: "Axiolot Hub" },
        { property: "og:image:alt" },
        { property: "og:image", content: "https://static.axiolot.com.ng/.image/.app_image?auto=format&fit=max&w=1200&fm=auto" },
        { name: "twitter:image", content: "https://static.axiolot.com.ng/.image/.app_image?auto=format&fit=max&w=1200&fm=auto" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "School Information Management System" },
        { property: "og:title", content: "School Information Management System" },
        { property: "og:url", content: "https://app.axiolot.com.ng" },
        { name: "og:url", content: "https://app.axiolot.com.ng" },
        { property: "og:description", content: "" },
        { property: "og:type", content: "website" },
        { name: "twitter:creator", content: "@justin_axo" },
        { property: "og:site_name", content: "Axiolot Hub" },
        { name: "keywords", content: "school information management, school data analytics, report card generation, parent portal, exam results management, attendence tracking, grade management, academic data organization, result tracking system, course registration" }

      ],
      link: [
        {
          rel: "shortcut icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          rel: "dns-prefetch",
          href: "https://fonts.cdnfonts.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.cdnfonts.com/css/satoshi",
        },
        {
          rel: "manifest",
          href: "/manifest.json"
        },
        {
          rel: "manifest",
          href: "/manifest.webmanifest"
        },
      ]
    })

    return { $pwa, colorMode, isDark };
  }
})

</script>
<template>
  <NuxtLayout>
    <NuxtLoadingIndicator class="indicator" />
    <main>
      <NuxtPwaManifest />
      <NuxtPage />
      <UButton icon="i-heroicons-magnifying-glass" />
      <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" color="gray" variant="ghost"
        aria-label="Theme" @click="isDark = !isDark" />

      <div class="bg-gray dark:bg-red-500 text-secondary grid-cols-2 shadow-2xl">hello</div>

      hello {{ $pwa?.isPWAInstalled }} {{ $pwa?.offlineReady }} {{ colorMode }}
    </main>
  </NuxtLayout>
</template>
