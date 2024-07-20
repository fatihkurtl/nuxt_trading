<script lang="ts" setup>
import Navbar from '~/layouts/Navbar.vue'
import Footer from '~/layouts/Footer.vue'
</script>

<template>
  <section class="bg-gray-800">
    <NuxtLayout>
      <Navbar />
      <NuxtPage />
      <Footer />
    </NuxtLayout>
  </section>
</template>
