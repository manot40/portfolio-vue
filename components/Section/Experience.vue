<script setup lang="ts">
const { data } = useStore();

const serveExp = (type: string) =>
  data.experiences.filter((exp) => exp.type === type);

const jobs = serveExp("job").reverse();
const edu = serveExp("education").reverse();
</script>

<template>
  <section id="experience">
    <Container class="py-16 text-center bg-white-700 dark:bg-darkTheme">
      <h1 class="text-3xl font-bold mb-2">Experience</h1>
      <h2 class="mt-1 font-mono text-sm text-gray-600">
        How far I have joined society
      </h2>
    </Container>
    <Container class="py-24 px-2 md:px-8">
      <div class="overflow-x-auto overflow-y-hidden">
        <div class="md:flex md:justify-center space-y-8 md:space-y-0 md:space-x-8 md:min-w-max">
          <div class="p-12 bg-white-700 dark:bg-darkTheme shadow-sm rounded-xl md:max-w-lg">
            <h2 class="text-2xl font-bold mb-10 underline underline-offset-8">Careers</h2>
            <Timeline>
              <TimelineContent
                v-for="exp in jobs"
                :key="exp?.title"
                :title="exp?.title"
                :date="exp?.date"
                :description="exp?.description"
                :type="exp?.type"
              />
            </Timeline>
          </div>
          <div class="p-12 bg-white-700 dark:bg-darkTheme shadow-sm rounded-xl md:max-w-lg min-w-lg">
            <h2 class="text-2xl font-bold mb-10 underline underline-offset-8">Education</h2>
            <Timeline>
              <TimelineContent
                v-for="exp in edu"
                :key="exp?.title"
                :title="exp?.title"
                :date="exp?.date"
                :description="exp?.description"
                :type="exp?.type"
              />
            </Timeline>
          </div>
          <div class="p-12 bg-white-700 dark:bg-darkTheme shadow-sm rounded-xl md:max-w-lg min-h-full w-full">
            <h2 class="text-2xl font-bold mb-10 underline underline-offset-8">Certification</h2>
            <div class="h-full flex justify-center items-center">
              <p class="text-sm text-gray-400 dark:text-gray-600">
                I don`t have any certification yet.
              </p>
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