<template>
  <section class="relative w-full bg-white">
    <div class="absolute h-32 w-full bg-white"></div>
    <div
      class="relative mx-auto w-full max-w-7xl px-5 py-10 sm:py-12 md:py-16 md:px-10"
    >
      <div class="mt-8 flex grid h-full grid-cols-12 gap-10 pb-10 sm:mt-16">
        <!--POSTS-->
        <BlogLarge
          :post="post"
          v-for="(post, index) in sampleBlogPosts"
          :key="index"
        />
        <div class="col-span-12 grid grid-cols-12 gap-7">
          <BlogSmall
            :post="post"
            v-for="(post, index) in sampleBlogCards"
            :key="index"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BlogLarge from "@/components/cards/BlogLarge";
import BlogSmall from "@/components/cards/BlogSmall";
export default {
  name: "BlogsArea",
  components: {
    BlogLarge,
    BlogSmall,
  },
  computed: {
    sampleBlogPosts() {
      return this.$store.state.sampleBlogPosts;
    },
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
  },
};
</script>
