<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-col lg:flex-row mx-auto mt-2 space-y-4 lg:space-y-0 lg:space-x-4 p-4">
    <div class="flex-1">
      <StockMarket :options="{
        width: '100%',
        height: 780,
        colorTheme: 'dark',
        dateRange: '12M',
        exchange: 'US',
        showChart: true,
        locale: 'en',
        largeChartUrl: '',
        isTransparent: false,
        showSymbolLogo: false,
        showFloatingTooltip: false,
        plotLineColorGrowing: 'rgba(41, 98, 255, 1)',
        plotLineColorFalling: 'rgba(41, 98, 255, 1)',
        gridLineColor: 'rgba(42, 46, 57, 0)',
        scaleFontColor: 'rgba(134, 137, 147, 1)',
        belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)',
        belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)',
        belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
        belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
        symbolActiveColor: 'rgba(41, 98, 255, 0.12)',
      }" />
    </div>
    <div class="flex-1">
      <StockHeatMap :options="{
        width: '100%',
        height: 780,
        colorTheme: 'dark',
        exchanges: [],
        dataSource: 'SPX500',
        grouping: 'no_group',
        blockSize: 'market_cap_basic',
        blockColor: 'Perf.YTD',
        locale: 'en',
        symbolUrl: '',
        hasTopBar: false,
        isDataSetEnabled: false,
        isZoomEnabled: true,
        hasSymbolTooltip: true,
      }" />
    </div>
  </div>
</template>

<style></style>