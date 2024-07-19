<template>
  <TickerTape :options="{
    colorTheme: 'dark',
    showSymbolLogo: true,
    isTransparent: false,
    displayMode: 'adaptive',
    locale: 'en',
    symbols: [
      {
        proName: 'BITSTAMP:BTCUSD',
        title: 'Bitcoin',
      },
      {
        proName: 'BITSTAMP:ETHUSD',
        title: 'Ethereum',
      },
      {
        proName: 'BINANCE:BNBUSDT',
        title: 'Binance Coin',
      },
      {
        proName: 'BITSTAMP:USDTUSD',
        title: 'Tether',
      },
      {
        proName: 'BINANCE:SOLUSD',
        title: 'Solana',
      },
    ],
  }" />
</template>
