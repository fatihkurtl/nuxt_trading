<script lang="ts" setup>

</script>

<template>
  <div class="mx-auto mt-2 px-4">
    <TopStories :options="{
      width: '100%',
      height: 780,
      colorTheme: 'dark',
      feedMode: 'all_symbols',
      isTransparent: false,
      displayMode: 'regular',
      locale: 'en',
    }" />
  </div>
</template>

<style></style>