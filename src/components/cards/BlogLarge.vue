<template>
  <div class="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
    <a href="#" class="block w-full transition duration-300 ease-in-out transform bg-center bg-fill h-96 hover:scale-110">
      <img src="/" class="object-scale-down w-full shadow-sm max-h-56" :alt="post.blogCoverPhotoAlt" :style="{ backgroundImage: `url(${require(`@/assets/blogPhotos/${post.blogCoverPhoto}.jpg`)})`, minHeight: '500px' }">
    </a>
    <div class="relative z-20 w-full h-auto py-8 text-white bg-zinc-500 border-t-0 border-yellow-200 px-7">
      <a href="#" class="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-white bg-purple-500">
        {{post.blogTag}}
      </a>
      <h2 class="mb-5 text-5xl font-bold"><a href="/">{{post.blogTitle}}</a></h2>
      <p class="mb-2 text-lg font-normal text-purple-100 opacity-100">{{post.blogText}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogLarge",
  props: ["post"],
}
</script>