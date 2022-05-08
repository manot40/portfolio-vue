<script setup lang="ts">
const { data } = useStore();
</script>

<template>
  <section id="about">
    <Container class="border-t border-neutral-300 dark:border-neutral-600 py-16 text-center bg-white-700 dark:bg-darkTheme">
      <h1 class="text-3xl font-bold mb-2">
        About Me
      </h1>
      <h2 class="mt-1 text-sm font-mono text-gray-600">Me in nutshell</h2>
    </Container>
    <Container class="md:px-8 py-12 lg:max-w-screen-lg" viewport="md">
      <div class="md:space-x-5 md:flex md:flex-row item-center md:-mx-4 flex flex-col-reverse justify-between text-left">
        <div class="text-black-900 font-display dark:text-white-700 max-w-xl mb-1">
          <h1 class="text-xl font-bold font-mono tracking-normal mt-8 md:text-2xl text-black-500 dark:text-white-500">
            “{{data?.quote.content}}”
          </h1>
          <p class="mt-1 text-sm text-gray-600 mb-2">- {{data?.quote.author}}</p>
          <p class="mb-8 font-light">
            The quote above is my favorite, it give me composure.
          </p>
          <p class="mb-8" v-html="data?.about" />
          <p class="mb-5 font-sans">My technical specialty including but not limited to</p>
          <div class="space-y-4 mb-8">
            <Progress
              v-for="skill in data.skills"
              :key="skill?.name"
              :name="skill?.name"
              :value="skill?.value"
            />
          </div>
        </div>
        <div class="flex-shrink-0 self-center lg:mt-12 lg:px-4 mb-10">
          <img
            :src="data.avatarUrl"
            alt="Profile"
            class="rounded-full object-cover mb-8 h-44 w-44 md:h-64 md:w-64 lg:h-72 lg:w-72"
          />
          <div class="flex justify-center mt-6">
            <div class="flex md:flex lg:flex space-x-4 font-medium text-gray-900 sm:block dark:text-white-700">
              <SociaLink />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script lang="ts">
export {};
</script>
