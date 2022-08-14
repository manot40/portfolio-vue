<script setup lang="ts">
const projects = ref([] as TProject[]);
const { public: env } = useRuntimeConfig();

onBeforeMount(async () => {
  const data = await fetch(env.apiGithubUrl).then((res) => res.json());
  if (data?.length) {
    projects.value = data
      .sort((a: any, b: any) => {
        return new Date(b.updated_at).valueOf() - new Date(a.updated_at).valueOf();
      })
      .map((repo: any) => ({
        name: repo.name,
        url: repo.html_url,
        language: repo.language,
        description: repo.description,
      })) as TProject[];
  }
});
</script>

<template>
  <section id="project">
    <Container class="py-16 text-center bg-white-700 dark:bg-darkTheme">
      <h1 class="text-3xl font-bold mb-2">Project</h1>
      <h2 class="mt-1 text-sm font-mono text-gray-600">It ain`t much, but it is honest work</h2>
    </Container>
    <Container class="md:px-8 py-12 lg:max-w-screen-lg" viewport="md">
      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :url="project.url"
          :name="project.name"
          :language="project.language"
          :description="project.description"
        />
      </div>
    </Container>
  </section>
</template>
