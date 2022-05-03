<template>
  <div class="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
    <a href="/" class="block transition duration-200 ease-out transform hover:scale-110">
      <img class="object-cover w-full shadow-sm max-h-56" :src="require(`@/assets/blogCards/${post.blogCoverPhoto}.jpg`)" :alt="post.blogCoverPhotoAlt">
    </a>
    <div class="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl w-full">
      <div class="bg-indigo-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
        <span>{{ post.blogTag }}</span>
      </div>
      <h2 class="text-base font-bold sm:text-lg md:text-xl"><a href="/">{{ post.blogTitle }}</a></h2>
      <p class="mt-2 text-sm text-gray-500">{{ post.blogText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogSmall",
  props: ["post"]
}
</script>
