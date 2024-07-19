<script lang="ts" setup>
</script>

<template>
  <section class="bg-gray-800 dark:bg-gray-900 py-12">
    <div class="max-w-screen-xl mx-auto px-4">
      <h1 class="text-4xl font-extrabold text-center text-gray-200 dark:text-gray-100 mb-8">{{ $t('aboutUs') }}</h1>
      <div class="text-gray-300 dark:text-gray-400 space-y-6">
        <p>
          Welcome to [Your Website Name], your trusted source for comprehensive information on cryptocurrencies and the
          stock market. Our mission is to provide you with the latest data, insights, and analysis to help you make
          informed investment decisions.
        </p>
        <p>
          At [Your Website Name], we understand the complexities and dynamics of financial markets. Whether you are a
          seasoned investor or a beginner looking to delve into the world of crypto and stocks, we offer tools and
          resources tailored to meet your needs.
        </p>
        <p>
          Our platform features real-time market data, charts, and news updates, powered by TradingView. We cover a wide
          range of financial instruments, including cryptocurrencies, stocks, indices, and futures, ensuring you have
          access to the most relevant information.
        </p>
        <p>
          Founded in [year], [Your Website Name] has grown into a reliable platform for financial enthusiasts worldwide.
          Our team of experts is dedicated to delivering high-quality content and user-friendly tools to enhance your
          trading and investment experience.
        </p>
        <p>
          We believe in the power of informed investing and are committed to helping you navigate the ever-changing
          landscape of financial markets. If you have any questions, feedback, or suggestions, please do not hesitate to
          <NuxtLink to="/contact" class="text-blue-500 dark:text-blue-400 hover:underline">{{ $t('contactUs') }}</NuxtLink>.
        </p>
        <p>
          Sincerely,<br />
          [Your Website Team]
        </p>
      </div>
    </div>
  </section>
</template>

<style>
/* Ekstra stiller burada eklenebilir */
</style>
