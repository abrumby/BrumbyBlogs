<template>
  <div class="flex items-center justify-center w-full h-full rounded">
    <div class="px-4 lg:py-12">
      <div class="lg:gap-4 lg:flex">
        <div class="flex flex-col items-center justify-center md:py-24 lg:py-32 rounded rounded-2xl">
          <h1 class="font-bold text-zinc-600 text-9xl">404</h1>
          <p class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span class="text-red-500">Oops!</span> Page not found
          </p>
          <p class="mb-8 text-center text-gray-500 md:text-lg">
            The page you’re looking for does not exist.
          </p>
          <a href="/" class="px-6 py-2 text-sm font-semibold text-zinc-800 bg-zinc-100 rounded">Go home</a>
        </div>
        <div class="mt-4">
          <img src="https://cdn.pixabay.com/photo/2016/11/22/23/13/black-dog-1851106__340.jpg" alt="img" class="object-cover w-full h-full rounded" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>

</style>