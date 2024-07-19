<script lang="ts" setup>
import Navbar from '~/layouts/Navbar.vue'
import Footer from '~/layouts/Footer.vue'
</script>

<template>
  <div class="bg-gray-800">
    <NuxtLayout>
      <Navbar />
      <NuxtPage />
      <Footer />
    </NuxtLayout>
  </div>
</template>
