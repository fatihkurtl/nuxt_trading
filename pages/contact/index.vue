<script lang="ts" setup>

interface IContactForm {
  email: string
  subject: string
  message: string
}

const contactForm = reactive<IContactForm>({
  email: '',
  subject: '',
  message: ''
})

const submitForm = (): void => {
  console.log(contactForm)
}

</script>

<template>
  <section class="bg-gray-800 dark:bg-gray-900">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-200 dark:text-white">{{ $t('contactUs').toLocaleUpperCase() }}</h2>
      <p class="mb-8 lg:mb-16 font-extrabold text-center text-gray-400 dark:text-gray-400 sm:text-xl">{{ $t('contactText') }}</p>
      <form @submit.prevent="submitForm" class="space-y-8">
        <div>
          <label for="email" class="block mb-2 text-sm font-extrabold text-gray-200 dark:text-gray-300">{{ $t('yourEmail') }}</label>
          <input v-model="contactForm.email" type="email" id="email" class="shadow-sm bg-gray-700 border border-gray-600 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@example.com" required>
        </div>
        <div>
          <label for="subject" class="block mb-2 text-sm font-extrabold text-gray-200 dark:text-gray-300">{{ $t('subject') }}</label>
          <input v-model="contactForm.subject" type="text" id="subject" class="block p-3 w-full text-sm text-gray-200 bg-gray-700 rounded-lg border border-gray-600 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" :placeholder="$t('subjectPlaceholder')" required>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block mb-2 text-sm font-extrabold text-gray-200 dark:text-gray-300">{{ $t('yourMessage') }}</label>
          <textarea v-model="contactForm.message" id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-200 bg-gray-700 rounded-lg shadow-sm border border-gray-600 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="$t('messagePlaceholder')"></textarea>
        </div>
        <button type="submit" class="py-3 px-5 text-sm font-extrabold text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{{ $t('sendMessage') }}</button>
      </form>
    </div>
  </section>
</template>

<style></style>