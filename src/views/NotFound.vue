<template>
  <div class="flex h-full w-full items-center justify-center rounded">
    <div class="px-4 lg:py-12">
      <div class="lg:flex lg:gap-4">
        <div
          class="flex flex-col items-center justify-center rounded rounded-2xl md:py-24 lg:py-32"
        >
          <h1 class="text-9xl font-bold text-zinc-600">404</h1>
          <p
            class="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl"
          >
            <span class="text-red-500">Oops!</span> Page not found
          </p>
          <p class="mb-8 text-center text-gray-500 md:text-lg">
            The page you’re looking for does not exist.
          </p>
          <a
            href="/"
            class="rounded bg-zinc-100 px-6 py-2 text-sm font-semibold text-zinc-800"
            >Go home</a
          >
        </div>
        <div class="mt-4">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/22/23/13/black-dog-1851106__340.jpg"
            alt="img"
            class="h-full w-full rounded object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped></style>
