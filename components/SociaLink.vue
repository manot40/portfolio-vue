<script setup lang="ts">
const { data } = useStore();
</script>

<template>
  <div className="text-gray-900 space-x-6 dark:text-white-700 flex justify-center">
    <MediaIcon :href="data?.social.github" target="_BLANK">
      <ion-icon name="logo-github" style="font-size: 24px" />
    </MediaIcon>
    <MediaIcon :href="data?.social.whatsapp" target="_BLANK">
      <ion-icon name="logo-whatsapp" style="font-size: 24px" />
    </MediaIcon>
    <MediaIcon :href="data?.social.linkedin" target="_BLANK">
      <ion-icon name="logo-linkedin" style="font-size: 24px" />
    </MediaIcon>
    <MediaIcon :href="data?.social.twitter" target="_BLANK">
      <ion-icon name="logo-twitter" style="font-size: 24px" />
    </MediaIcon>
  </div>
</template>

<script lang="ts">
export {}
</script>
