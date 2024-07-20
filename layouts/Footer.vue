<script setup lang="ts">

</script>

<template>

  <footer
    class="bottom-0 left-0 z-20 w-full p-4 bg-gray-800 border-t border-gray-800 shadow-md md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span class="text-sm text-gray-200 sm:text-center dark:text-gray-400">© 2023 <a href="/"
        class="hover:underline">NuxyTrade™</a>. {{ $t('footerInfo') }}.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-200 dark:text-gray-400 sm:mt-0">
      <li>
        <NuxtLink to="/contact" class="hover:underline">{{ $t('contact') }}</NuxtLink>
      </li>
    </ul>
  </footer>

</template>

<style scoped></style>