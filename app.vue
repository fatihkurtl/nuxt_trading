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

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>