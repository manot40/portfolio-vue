<script setup lang="ts">
const { data } = useStore();
</script>

<template>
  <section id="hero" class="bg-white-900 dark:bg-black-800 relative">
    <div class="heroImage" />
    <Container class="md:px-12 relative pt-36 sm:pt-48 lg:pt-40 h-[40rem] lg:max-w-screen-lg" viewport="md">
      <div
        class="md:space-x-5 md:flex md:flex-row item-center md:-mx-4 flex flex-col-reverse justify-between text-left"
      >
        <div class="lg:mt-12 text-black-900 dark:text-white-700 max-w-xl">
          <h1 class="text-5xl md:text-6xl font-bold">I&apos;m</h1>
          <h1
            class="text-5xl md:text-6xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-l from-cyan-700 to-blue-700"
          >
            {{ data?.fullname }}
          </h1>
          <h2 class="mt-1 text-sm text-gray-600">({{ data?.nickname }} for short)</h2>
          <p class="text-xl font-bold tracking-normal mt-8 md:text-2xl text-black-500 dark:text-white-500">
            {{ data?.greeting }}
          </p>
        </div>
      </div>
    </Container>
  </section>
</template>
