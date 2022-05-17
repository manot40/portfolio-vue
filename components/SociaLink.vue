<script setup lang="ts">
const { data } = useStore();
</script>

<template>
  <div className="text-gray-900 space-x-6 dark:text-white-700 flex justify-center">
    <MediaIcon :href="data?.social.github" target="_BLANK">
      <ion-icon name="logo-github" class="umami--click--githubIcon" style="font-size: 24px" />
    </MediaIcon>
    <MediaIcon :href="data?.social.whatsapp" target="_BLANK">
      <ion-icon name="logo-whatsapp" class="umami--click--whatsappIcon" style="font-size: 24px" />
    </MediaIcon>
    <MediaIcon :href="data?.social.linkedin" target="_BLANK">
      <ion-icon name="logo-linkedin" class="umami--click--linkedinIcon" style="font-size: 24px" />
    </MediaIcon>
    <MediaIcon :href="data?.social.twitter" target="_BLANK">
      <ion-icon name="logo-twitter" class="umami--click--twitterIcon" style="font-size: 24px" />
    </MediaIcon>
  </div>
</template>

<script lang="ts">
export {}
</script>
