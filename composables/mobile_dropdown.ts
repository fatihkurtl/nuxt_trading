export default function useMobileDropdown(): any  {
  const dropdown = ref<boolean>(false);
  const dropdownElement = ref<HTMLElement | null>(null);

  const toggleDropdown = (): void => {
    dropdown.value = !dropdown.value;
  }

  const handleClickOutside = (event: Event): void => {
    if (dropdownElement.value && !dropdownElement.value.contains(event.target as Node)) {
      dropdown.value = false;
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
  });

  return {
    dropdown,
    dropdownElement,
    toggleDropdown,
  }
}