<template>
  <PageWrapper>
    <div class="blog-cards-wrapper">
      <div class="blog-cards container">
        <div class="toggle-edit">
          <span>Toggle Editing Post</span>
          <input type="checkbox" v-model="editPost" />
        </div>
        <BlogCard :card="card" v-for="(card, index) in sampleBlogCards" :key="index" />
      </div>
    </div>
  </PageWrapper>
</template>

<script>
import BlogCard from "../components/BlogCard";
import PageWrapper from "@/components/layouts/PageWrapper";

export default {
  name: "blogs-view",
  components: {
    BlogCard,
    PageWrapper,
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
    editPost: {
      get() {
        return this.$store.state.editPost;
      },
      set(payload) {
        this.$store.commit("toggleEditPost", payload);
      },
    },
  },
  beforeUnmount() {
    this.$store.commit("toggleEditPost", false);
  },
};
</script>
