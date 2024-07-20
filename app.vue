<script lang="ts" setup>
import Navbar from '~/layouts/Navbar.vue'
import Footer from '~/layouts/Footer.vue'

const {
  cookiesEnabled,
  cookiesEnabledIds,
  isConsentGiven,
  isModalActive,
  moduleOptions,
} = useCookieControl()

watch(
  () => cookiesEnabledIds.value,
  (current, previous) => {
    if (
      !previous?.includes('google-analytics') &&
      current?.includes('google-analytics')
    ) {
      // cookie with id `google-analytics` got added
      window.location.reload() // placeholder for your custom change handler
    }
  },
  { deep: true },
)
</script>

<template>
  <section class="bg-gray-800">
    <CookieControl locale="en" />
    <NuxtLayout>
      <Navbar />
      <NuxtPage />
      <Footer />
    </NuxtLayout>
  </section>
</template>
