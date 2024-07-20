<script lang="ts" setup>

</script>

<template>
  <section class="mx-auto mt-2 p-4">
    <CryptoHeatMap :options="{
      dataSource: 'Crypto',
      width: '100%',
      height: 780,
      colorTheme: 'dark',
      blockSize: 'market_cap_calc',
      blockColor: 'change',
      locale: 'en',
      symbolUrl: '',
      hasTopBar: false,
      isDataSetEnabled: false,
      isZoomEnabled: true,
      hasSymbolTooltip: true,
    }" />
  </section>
</template>

<style></style>