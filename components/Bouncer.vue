<script setup lang="ts">
const { visible, lastScrollPos } = useHeaderVisible();
</script>

<template>
  <a
    href="#"
    class="fixed bottom-8 right-8 py-3 px-4 backdrop-blur-md transition-transform duration-300"
    :class="visible && lastScrollPos > 350 ? 'translate-x-0' : 'translate-x-24'"
  >
    <div
      class="absolute -z-10 top-0 left-0 w-full h-full bg-neutral-300 dark:bg-black-800 dark:border border-neutral-700 opacity-80 transition-colors duration-300"
    />
    <ion-icon name="chevron-up-outline" style="font-size: 24px" />
  </a>
</template>

<script lang="ts">
export {};
</script>
