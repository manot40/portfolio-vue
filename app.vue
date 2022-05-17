<script setup lang="ts">
const store = useStore();
const { public: env } = useRuntimeConfig();
const { data, error } = await store.fetchData();

useHead({
  title: data?.fullname || "John Doe",
  titleTemplate: "%s | Portfolio Site",
  script:
    env.umamiUrl && env.umamiId
      ? [
          {
            async: "async",
            defer: "defer",
            src: env.umamiUrl,
            "data-website-id": env.umamiId,
          },
        ]
      : undefined,
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
