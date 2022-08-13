<script setup lang="ts">
const { data } = useStore();
const firstName = data.fullname.split(' ')[0].toUpperCase() || 'JOHN';
const lastName = data.fullname.split(' ')[1].toUpperCase() || 'DOE';
</script>

<template>
  <Container
    class="border-t border-neutral-300 dark:border-neutral-600 py-16 space-y-6 text-center bg-white-700 dark:bg-darkTheme"
  >
    <div class="inline-flex text-xl">
      <h1 class="tracking-wide font-extrabold select-none">{{ firstName }}</h1>
      &nbsp;
      <p class="tracking-wider select-none">{{ lastName }}</p>
    </div>
    <SociaLink />
    <h2 class="text-gray-600 text-sm">Totally not copyrighted © Kevin Sandiho 2022</h2>
  </Container>
</template>

<script lang="ts">
export {};
</script>
