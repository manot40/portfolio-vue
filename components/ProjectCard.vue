<script setup lang="ts">
const { public: env } = useRuntimeConfig();
const { url, name, image, language, description } = defineProps({
  url: String,
  name: String,
  image: String,
  language: String,
  description: String,
});
</script>

<template>
  <div class="shadow-md rounded-lg dark:border border-neutral-800">
    <div class="relative">
      <a :href="url" target="_BLANK" ref="noreferrer noopener">
        <div class="absolute top-0 h-full w-full dark:bg-gradient-to-t dark:from-neutral-800" />
        <img class="rounded-t-lg" :src="image || `${env.apiGithubImg}/${name}`" :alt="name" />
      </a>
    </div>
    <div
      class="p-4 text-sm font-mono min-h-[8rem] rounded-b-lg bg-white-700 text-gray-600 dark:bg-darkTheme hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
    >
      <div class="flex items-center justify-between space-x-2 mb-4">
        <a
          :href="url"
          target="_BLANK"
          ref="noreferrer noopener"
          class="font-bold hover:underline whitespace-nowrap text-ellipsis overflow-hidden"
          >{{ name }}
        </a>
        <span class="cursor-default">{{ language }}</span>
      </div>
      <div class="cursor-default">
        {{ description || 'No description available :(' }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export {};
</script>
