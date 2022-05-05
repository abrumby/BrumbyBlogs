<template>
  <div class="col-span-12 flex flex-col items-start overflow-hidden rounded-xl shadow-sm md:col-span-6 lg:col-span-4">
    <a href="/" class="block transform transition duration-200 ease-out hover:scale-110">
      <img class="max-h-56 w-full object-cover shadow-sm" :src="require(`@/assets/blogCards/${post.blogCoverPhoto}.jpg`)" :alt="post.blogCoverPhotoAlt" />
    </a>
    <div class="relative flex w-full flex-col items-start rounded-b-2xl border border-t-0 border-gray-200 bg-white px-6 py-7">
      <div
        class="absolute top-0 -mt-3 inline-block inline-block flex w-auto items-center rounded-full bg-indigo-400 px-3 py-1.5 text-xs font-medium uppercase leading-none text-white"
      >
        <span>{{ post.blogTag }}</span>
      </div>
      <h2 class="text-base font-bold sm:text-lg md:text-xl">
        <a href="/">{{ post.blogTitle }}</a>
      </h2>
      <p class="mt-2 text-sm text-gray-500">{{ post.blogText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogSmall",
  props: ["post"],
};
</script>
