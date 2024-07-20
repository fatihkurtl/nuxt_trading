<script lang="ts" setup>
import Ticker from '~/components/Ticker.vue'
import LangDropdown from '~/components/LangDropdown.vue'
import useMobileDropdown from '~/composables/mobile_dropdown'

const { dropdown, dropdownElement, toggleDropdown } = useMobileDropdown()


</script>

<template>

  <nav class="border-gray-200 bg-gray-800 dark:bg-gray-800 dark:border-gray-700">
    <div ref="dropdownElement" class="flex flex-wrap items-center justify-between mx-auto p-4">
      <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/assets/trade.png" class="h-8" alt="Flowbite Logo" />
        <span
          class="self-center text-2xl font-extrabold whitespace-nowrap text-gray-200 dark:text-white">NuxyTrade</span>
      </NuxtLink>
      <button @click="toggleDropdown" data-collapse-toggle="navbar-solid-bg" type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-solid-bg" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <div :class="{ 'hidden': !dropdown }" class="w-full md:block md:w-auto" id="navbar-solid-bg">
        <ul
          class="flex flex-col font-extrabold mt-4 rounded-lg bg-gray-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
          <li>
            <NuxtLink to="/" active-class="text-white px-4 py-2 bg-gray-600 dark:bg-gray-600 dark:text-white"
              class="block px-4 py-2 font-sans text-base text-gray-200 dark:text-white rounded-lg cursor-pointer dark:hover:bg-gray-800 dark:hover:text-gray-200"
              aria-current="page">{{ $t('crypto') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/market" active-class="text-white px-4 py-2 bg-gray-600 dark:bg-gray-600 dark:text-white"
              class="block px-4 py-2 font-sans text-base text-gray-200 dark:text-white rounded-lg cursor-pointer dark:hover:bg-gray-800 dark:hover:text-gray-200">
              {{ $t('market') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/stock" active-class="text-white px-4 py-2 bg-gray-600 dark:bg-gray-600 dark:text-white"
              class="block px-4 py-2 font-sans text-base text-gray-200 dark:text-white rounded-lg cursor-pointer dark:hover:bg-gray-800 dark:hover:text-gray-200">
              {{ $t('stock') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/news" active-class="text-white px-4 py-2 bg-gray-600 dark:bg-gray-600 dark:text-white"
              class="block px-4 py-2 font-sans text-base text-gray-200 dark:text-white rounded-lg cursor-pointer dark:hover:bg-gray-800 dark:hover:text-gray-200">
              {{ $t('news') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" active-class="text-white px-4 py-2 bg-gray-600 dark:bg-gray-600 dark:text-white"
              class="block px-4 py-2 font-sans text-base text-gray-200 dark:text-white rounded-lg cursor-pointer dark:hover:bg-gray-800 dark:hover:text-gray-200">
              {{ $t('contact') }}</NuxtLink>
          </li>
          <li>
            <LangDropdown />
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <Ticker />

</template>

<style></style>