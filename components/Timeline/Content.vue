<script setup lang="ts">
const { title, date, description } = defineProps({
  title: String,
  type: String,
  date: String || Date,
  description: { type: String, default: "job" },
});
</script>

<template>
<!-- <ol class="relative border-l border-gray-200 dark:border-gray-700"> -->
  <li class="mb-10 ml-6">
    <div class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
      <div class="text-blue-700 dark:text-blue-200">
        <ion-icon :name="type === 'education' ? 'book' : 'briefcase'" style="font-size: 12px" />
      </div>
    </div>
    <h3 class="mb-1 text-lg font-semibold text-[#13223f] dark:text-[#c5d9eb]">
      {{title}}
    </h3>
    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
      {{date}}
    </time>
    <p class="text-base font-normal text-gray-600 dark:text-gray-400">
      {{description}}
    </p>
  </li>
</template>

<script lang="ts">
export {}
</script>
