<template>
  <section class="relative w-full bg-white">
    <div class="absolute w-full h-32 bg-white"></div>
    <div class="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">
      <div class="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
        <!--POSTS-->
        <BlogLarge :post="post" v-for="(post, index) in sampleBlogPosts" :key="index" />
        <div class="grid grid-cols-12 col-span-12 gap-7">
          <BlogSmall :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BlogLarge from "@/components/cards/BlogLarge"
import BlogSmall from "@/components/cards/BlogSmall"
export default {
  name: "BlogsArea",
  components: {
    BlogLarge,
    BlogSmall
  },
  computed: {
    sampleBlogPosts() {
      return this.$store.state.sampleBlogPosts
    },
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards
    }
  }
}
</script>