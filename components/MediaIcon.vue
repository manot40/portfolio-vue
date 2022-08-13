<script setup lang="ts">
import { useMotion } from '@vueuse/motion';

const el = ref();

const { href, target } = defineProps({
  href: {
    type: String,
    default: '#',
  },
  target: {
    type: String,
    default: '_self',
  },
});

const { variant } = useMotion(el, {
  initial: {
    rotate: 0,
    scale: 1,
  },
  hovered: {
    rotate: 10,
    scale: 1.2,
    transition: {
      type: 'spring',
      bounce: 0.8,
      bounceDamping: 1,
      onComplete: () => (variant.value = 'initial'),
    },
  },
});

function clickAction() {}
</script>

<template>
  <a ref="el" :href="href" :target="target" rel="noopener noreferrer" class="cursor-pointer" @click="clickAction">
    <slot />
  </a>
</template>
