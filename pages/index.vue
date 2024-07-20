<script lang="ts" setup>
</script>

<template>
  <section class="mx-auto mt-2 px-4">
    <div class="flex justify-center mt-6 mb-6">
      <NuxtLink to="/cryptoHeatMap"
        class="flex items-center text-lg font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition duration-300 ease-in-out">
        <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M3 6h6M3 12h6m-6 6h6m8-6h6M10 6h6m-6 6h6m-6 6h6M14 6h6m-6 6h6m-6 6h6" />
        </svg>
        {{ $t('viewHmap') }}
      </NuxtLink>
    </div>

    <CryptoMarket :options="{
      width: '100%',
      height: 780,
      colorTheme: 'dark',
      defaultColumn: 'overview',
      screener_type: 'crypto_mkt',
      displayCurrency: 'USD',
      locale: 'en',
    }" />
  </section>
</template>

<style></style>
