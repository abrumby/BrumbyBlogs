<template>
  <div
    class="group relative col-span-12 flex h-full flex-col items-start justify-end overflow-hidden rounded-xl md:col-span-6 xl:col-span-4"
  >
    <a
      href="#"
      class="bg-fill block h-96 w-full transform bg-center transition duration-300 ease-in-out hover:scale-110"
    >
      <img
        src="/"
        class="max-h-56 w-full object-scale-down shadow-sm"
        :alt="post.blogCoverPhotoAlt"
        :style="{
          backgroundImage: `url(${require(`@/assets/blogPhotos/${post.blogCoverPhoto}.jpg`)})`,
          minHeight: '500px',
        }"
      />
    </a>
    <div
      class="relative z-20 h-auto w-full border-t-0 border-yellow-200 bg-zinc-500 py-8 px-7 text-white"
    >
      <a
        href="#"
        class="absolute top-0 -mt-3.5 inline-block rounded-full bg-purple-500 px-4 py-2 text-xs font-semibold uppercase text-white"
      >
        {{ post.blogTag }}
      </a>
      <h2 class="mb-5 text-5xl font-bold">
        <a href="/">{{ post.blogTitle }}</a>
      </h2>
      <p class="mb-2 text-lg font-normal text-purple-100 opacity-100">
        {{ post.blogText }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogLarge",
  props: ["post"],
};
</script>
