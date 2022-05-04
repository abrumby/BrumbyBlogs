<template>
  <section class="bg-white px-2 py-32 md:px-0">
    <div class="container mx-auto max-w-6xl items-center px-8 xl:px-5">
      <div class="flex flex-wrap items-center sm:-mx-3">
        <div class="w-full md:w-1/2 md:px-3">
          <div
            class="w-full space-y-6 pb-6 sm:max-w-md sm:pr-5 md:space-y-4 md:pb-0 lg:max-w-lg lg:space-y-8 lg:pr-0 xl:space-y-9"
          >
            <h1
              class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl"
            >
              <span class="block xl:inline">{{ post.blogPrimary }}</span>
              <span class="m-1 block text-indigo-600 xl:inline">{{
                post.blogSecondary
              }}</span>
            </h1>
            <p
              class="mx-auto text-base text-gray-500 sm:max-w-md md:max-w-3xl lg:text-xl"
            >
              {{ post.blogPost }}
            </p>
            <div class="relative flex flex-col sm:flex-row sm:space-x-4">
              <router-link
                :to="{ name: 'register-view' }"
                class="mb-3 flex w-full items-center rounded-md bg-indigo-600 px-6 py-3 text-lg text-white hover:bg-indigo-700 sm:mb-0 sm:w-auto"
              >
                <span>Register Now </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-1 h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </router-link>
              <router-link
                :to="{ name: 'about-view' }"
                class="flex items-center rounded-md bg-gray-100 px-6 py-3 text-gray-500 hover:bg-gray-200 hover:text-gray-600"
              >
                <span>Learn more </span>
              </router-link>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <div
            class="h-auto w-full overflow-hidden rounded-md shadow-xl sm:rounded-xl"
          >
            <img
              :src="require(`@/assets/blogPhotos/${post.photo}.jpg`)"
              alt="{{post.photoAlt}}"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeHero",
  props: ["post"],
};
</script>

<style scoped></style>
