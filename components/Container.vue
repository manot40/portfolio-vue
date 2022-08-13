<script setup lang="ts">
import { computed } from 'vue';

const { viewport } = defineProps({ viewport: String });
</script>

<template>
  <div
    class="px-4 mx-auto"
    :class="{
      'max-w-screen-sm': viewport === 'sm',
      'max-w-screen-md': viewport === 'md',
      'max-w-screen-lg': viewport === 'lg',
      'max-w-screen-xl': viewport === 'xl',
      'max-w-full': !viewport,
    }"
  >
    <slot />
  </div>
</template>
