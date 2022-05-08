<script setup lang="ts">
const store = useStore();
const { public: env } = useRuntimeConfig();
const { error } = await store.fetchData()

useHead({
  title: "Kevin Sandiho",
  titleTemplate: "%s | Portfolio Site",
});
</script>

<template>
  <ErrorPage v-if="error && env.enforceApi" />
  <div v-else>
    <Header />    
    <SectionHero />
    <SectionAbout />
    <SectionExperience />
    <SectionProject />
    <Footer />
    <Bouncer />
  </div>
</template>

<script lang="ts">
export {};
</script>
