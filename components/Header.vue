<script setup lang="ts">
const useTheme = useColorMode();
const { visible, lastScrollPos } = useHeaderVisible();
const menu = ref(false);

function changeTheme() {
  if (useTheme.preference === "dark") {
    useTheme.preference = "system"
  } else if (useTheme.preference === "light") {
    useTheme.preference = "dark"
  } else {
    useTheme.preference = "light"
  }
}
</script>

<template>
  <header
    class="fixed z-20 w-full transition-top duration-300"
    :class="[visible ? 'top-0' : '-top-24', lastScrollPos < 100 ? 'backdrop-blur-none' : 'backdrop-blur-lg']"
  >
    <div
      class="absolute flex -z-10 w-screen h-full opacity-80 transition-colors duration-500"
      :class="lastScrollPos < 100 ? 'bg-transparent ' : 'bg-white-500 dark:bg-black-700'"
    />
    <Container
      class="flex items-center justify-between w-auto py-5 md:py-8 text-black-900 dark:text-white-900"
      viewport="lg"
    >
      <NuxtLink to="/">
        <div class="inline-flex text-xl">
          <h1 class="tracking-wide font-extrabold select-none">KEVIN</h1> &nbsp;
          <p class="tracking-wider select-none">SANDIHO</p>
        </div>
      </NuxtLink>

      <div class="flex items-center">
        <!-- Desktop Navigation -->
        <div class="font-medium font-display sm:block md:flex lg:flex space-x-8 hidden">
            <a href="#about" class="transition-colors hover:text-blue-500">About</a>
            <a href="#experience" class="transition-colors hover:text-blue-500">Experience</a>
            <a href="#project" class="transition-colors hover:text-blue-500">Project</a>
        </div>

        <!-- Theme Toggler -->
        <button
          type="button"
          @click="changeTheme"
          class="w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4"
        >
          <ion-icon
            :name="
              $colorMode.preference === 'light'
                ? 'sunny'
                : $colorMode.preference === 'dark'
                ? 'moon'
                : 'contrast'
            "
            style="font-size: 24px"
          />
        </button>

        <!-- Mobile Navigation -->
        <div class="sm:hidden flex item-center">
          <button
            @click="() => menu = !menu"
            class="w-8 h-8 ml-2 mr-1 rounded"
          >
            <ion-icon :name="menu ? 'close' : 'menu'" style="font-size: 32px;" />
          </button>
          <div
            class="absolute overflow-hidden z-20 h-screen top-[4.5rem] right-0 transform ease-in-out duration-300 dark:opacity-100 opacity-95 bg-white-500 dark:bg-black-800"
            :class="menu ? 'translate-x-0 w-full' : 'translate-x-full w-0'"
          >
            <nav @click="menu = !menu" class="flex flex-col space-y-4 items-center font-display text-xl font-semibold h-full mt-8">
              <div class="px-12 py-4">
                <a href="#about" class="transition-colors hover:text-blue-500">About</a>
              </div>
              <div class="px-12 py-4">
                <a href="#experience" class="transition-colors hover:text-blue-500">Experience</a>
              </div>
              <div class="px-12 py-4">
                <a href="#project" class="transition-colors hover:text-blue-500">Project</a>
              </div>              
            </nav>
          </div>
        </div>
      </div>
    </Container>
  </header>
</template>