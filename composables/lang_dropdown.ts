export default function useLangDropdown(): any  {
  const langDropdown = ref<boolean>(false);
  const langDropdownElement = ref<HTMLElement | null>(null);

  const toggleDropdown = (): void => {
    langDropdown.value = !langDropdown.value;
  }

  const handleClickOutside = (event: Event): void => {
    if (langDropdownElement.value && !langDropdownElement.value.contains(event.target as Node)) {
      langDropdown.value = false;
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
  });

  return {
    langDropdown,
    langDropdownElement,
    toggleDropdown,
  }
}