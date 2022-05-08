<script setup lang="ts">
const { name, value } = defineProps({
  name: String,
  value: String,
});
</script>

<template>
  <div class="font-sans">
    <div class="flex justify-between mb-1">
      <span class="font-semibold text-sm">{{name}}</span>
      <span>{{value}}%</span>
    </div>
    <div class="w-full bg-gray-300 rounded-full h-0.5 dark:bg-gray-700">
      <div
        class="bg-darkTheme dark:bg-blue-600 h-0.5 rounded-full"
        :style="{width: value + '%'}"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
export {}
</script>
