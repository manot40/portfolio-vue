<script setup lang="ts">
const { data } = useStore();

function getExp(type: string) {
  const { experiences } = data;
  if (!experiences) return [];
  return (experiences as TExperience[]).filter((exp) => exp.type === type);
}

const jobs = getExp('job').reverse();
const edu = getExp('education').reverse();
</script>

<template>
  <section id="experience">
    <Container class="py-16 text-center bg-white-700 dark:bg-darkTheme">
      <h1 class="text-3xl font-bold mb-2">Experience</h1>
      <h2 class="mt-1 font-mono text-sm text-gray-600">How far I have joined society</h2>
    </Container>
    <Container class="py-24 px-2 md:px-8">
      <div class="grid gap-4 xl:grid-cols-3 lg:grid-cols-2">
        <div class="p-12 bg-white-700 dark:bg-darkTheme shadow-sm rounded-xl">
          <h2 class="text-2xl font-bold mb-10 underline underline-offset-8">Careers</h2>
          <Timeline>
            <TimelineContent
              v-for="exp in jobs"
              :date="exp?.date"
              :type="exp?.type"
              :key="exp?.title"
              :title="exp?.title"
              :description="exp?.description"
            />
          </Timeline>
        </div>
        <div class="p-12 bg-white-700 dark:bg-darkTheme shadow-sm rounded-xl">
          <h2 class="text-2xl font-bold mb-10 underline underline-offset-8">Education</h2>
          <Timeline>
            <TimelineContent
              v-for="exp in edu"
              :date="exp?.date"
              :type="exp?.type"
              :key="exp?.title"
              :title="exp?.title"
              :description="exp?.description"
            />
          </Timeline>
        </div>
        <div class="p-12 bg-white-700 dark:bg-darkTheme shadow-sm rounded-xl lg:col-span-2 xl:col-auto">
          <h2 class="text-2xl font-bold mb-10 underline underline-offset-8">Certification</h2>
          <div class="h-64 xl:h-full flex justify-center items-center">
            <p class="text-sm text-gray-400 dark:text-gray-600">I don`t have any certification yet.</p>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script lang="ts">
export {};
</script>
