<script lang="ts" setup>
import useLangDropdown from '~/composables/lang_dropdown'
import LangIcon from '~/components/LangIcon.vue'

const { langDropdown, langDropdownElement, toggleDropdown } = useLangDropdown()

const { locale, setLocale } = useI18n()


</script>

<template>

  <div ref="langDropdownElement" class="relative" x-data="{ open: false }" @click.away="open = false">
    <button @click="toggleDropdown" id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
      class="text-white font-extrabold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
      type="button">
      <LangIcon /> <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
      </svg>
    </button>

    <div id="dropdown" :class="{ 'hidden': !langDropdown }"
      class="z-10 absolute bg-gray-900 divide-y divide-gray-100 rounded-lg shadow w-auto dark:bg-gray-700">
      <ul class="py-2 text-center font-extrabold text-sm text-gray-200 dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton">
        <li>
          <a href="#" @click="setLocale('en')"
            class="block px-4 py-2 mx-2 my-2 rounded-lg hover:bg-gray-600 dark:hover:bg-gray-600 dark:hover:text-white">EN</a>
        </li>
        <li>
          <a href="#" @click="setLocale('tr')"
            class="block px-4 py-2 mx-2 my-2 rounded-lg hover:bg-gray-600 dark:hover:bg-gray-600 dark:hover:text-white">TR</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>