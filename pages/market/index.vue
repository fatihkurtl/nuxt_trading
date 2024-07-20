<script lang="ts" setup>
</script>

<template>
  <section class="flex flex-col lg:flex-row mx-auto mt-2 space-y-4 lg:space-y-0 lg:space-x-4 p-4">
    <div class="flex-1">
      <MarketData :options="{
        width: '100%',
        height: 770,
        colorTheme: 'dark',
        showSymbolLogo: true,
        isTransparent: false,
        locale: 'en',
        backgroundColor: '#0C0C0D',
        symbolsGroups: [
          {
            name: 'Indices',
            originalName: 'Indices',
            symbols: [
              {
                name: 'FOREXCOM:SPXUSD',
                displayName: 'S&P 500 Index',
              },
              {
                name: 'FOREXCOM:NSXUSD',
                displayName: 'US 100 Cash CFD',
              },
              {
                name: 'FOREXCOM:DJI',
                displayName: 'Dow Jones Industrial Average Index',
              },
              {
                name: 'INDEX:NKY',
                displayName: 'Nikkei 225',
              },
              {
                name: 'INDEX:DEU40',
                displayName: 'DAX Index',
              },
              {
                name: 'FOREXCOM:UKXGBP',
                displayName: 'FTSE 100 Index',
              },
            ],
          },
          {
            name: 'Futures',
            originalName: 'Futures',
            symbols: [
              {
                name: 'CME_MINI:ES1!',
                displayName: 'S&P 500',
              },
              {
                name: 'CME:6E1!',
                displayName: 'Euro',
              },
              {
                name: 'COMEX:GC1!',
                displayName: 'Gold',
              },
              {
                name: 'NYMEX:CL1!',
                displayName: 'WTI Crude Oil',
              },
              {
                name: 'NYMEX:NG1!',
                displayName: 'Gas',
              },
              {
                name: 'CBOT:ZC1!',
                displayName: 'Corn',
              },
            ],
          },
        ],
      }" />
    </div>
    <div class="flex-1">
      <MarketOverview :options="{
        width: '100%',
        height: 770,
        colorTheme: 'dark',
        dateRange: '12M',
        showChart: true,
        locale: 'en',
        largeChartUrl: '',
        isTransparent: false,
        showSymbolLogo: true,
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
        tabs: [
          {
            title: 'Indices',
            symbols: [
              {
                s: 'FOREXCOM:SPXUSD',
                d: 'S&P 500 Index',
              },
              {
                s: 'FOREXCOM:NSXUSD',
                d: 'US 100 Cash CFD',
              },
              {
                s: 'FOREXCOM:DJI',
                d: 'Dow Jones Industrial Average Index',
              },
              {
                s: 'INDEX:NKY',
                d: 'Nikkei 225',
              },
              {
                s: 'INDEX:DEU40',
                d: 'DAX Index',
              },
              {
                s: 'FOREXCOM:UKXGBP',
                d: 'FTSE 100 Index',
              },
            ],
            originalTitle: 'Indices',
          },
          {
            title: 'Futures',
            symbols: [
              {
                s: 'CME_MINI:ES1!',
                d: 'S&P 500',
              },
              {
                s: 'CME:6E1!',
                d: 'Euro',
              },
              {
                s: 'COMEX:GC1!',
                d: 'Gold',
              },
              {
                s: 'NYMEX:CL1!',
                d: 'WTI Crude Oil',
              },
              {
                s: 'NYMEX:NG1!',
                d: 'Gas',
              },
              {
                s: 'CBOT:ZC1!',
                d: 'Corn',
              },
            ],
            originalTitle: 'Futures',
          },
          {
            title: 'Bonds',
            symbols: [
              {
                s: 'CBOT:ZB1!',
                d: 'T-Bond',
              },
              {
                s: 'CBOT:UB1!',
                d: 'Ultra T-Bond',
              },
              {
                s: 'EUREX:FGBL1!',
                d: 'Euro Bund',
              },
              {
                s: 'EUREX:FBTP1!',
                d: 'Euro BTP',
              },
              {
                s: 'EUREX:FGBM1!',
                d: 'Euro BOBL',
              },
            ],
            originalTitle: 'Bonds',
          },
          {
            title: 'Forex',
            symbols: [
              {
                s: 'FX:EURUSD',
                d: 'EUR to USD',
              },
              {
                s: 'FX:GBPUSD',
                d: 'GBP to USD',
              },
              {
                s: 'FX:USDJPY',
                d: 'USD to JPY',
              },
              {
                s: 'FX:USDCHF',
                d: 'USD to CHF',
              },
              {
                s: 'FX:AUDUSD',
                d: 'AUD to USD',
              },
              {
                s: 'FX:USDCAD',
                d: 'USD to CAD',
              },
            ],
            originalTitle: 'Forex',
          },
        ],
      }" />
    </div>
  </section>
</template>

<style></style>
