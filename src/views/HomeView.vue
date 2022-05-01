<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" :key="10000"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
    <div class="blog-cards-wrapper">
      <div class="container">
        <h3>View More Blogs</h3>
        <div class="blog-cards">
          <BlogCard :card="card" v-for="(card,index) in sampleBlogCards" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import BlogPost from "../components/BlogPost";
import BlogCard from "../components/BlogCard";
export default {
  name: 'home-view',
  components: {
    BlogPost,
    BlogCard
  },
  data() {
    return {
      welcomeScreen: {
        blogTitle: "Welcome!",
        blogPost: "Daily blog detailing my 100 days of coding challenge.",
        welcomeScreen: true,
        photo: "coding",
        photoAlt: "keyboard in foreground with computer monitors showing coding in the background"
      },
      sampleBlogPost: [
        {
          index: 0,
          blogTitle: "The first blog!",
          blogHtml: "This is the first blogs title",
          blogCoverPhoto: "beautiful-stories",
          blogCoverPhotoAlt: "beautiful stories"
        },
        {
          id: 1,
          blogTitle: "The second blog!",
          blogHtml: "This is the second blogs title",
          blogCoverPhoto: "designed-for-everyone",
          blogCoverPhotoAlt: "designed for everyone"
        }
      ],
      sampleBlogCards: [
        { blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1", blogCoverPhotoAlt: "designed for everyone", blogDate: "May 4, 2022" },
        { blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2", blogCoverPhotoAlt: "designed for everyone", blogDate: "May 2, 2022" },
        { blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3", blogCoverPhotoAlt: "designed for everyone", blogDate: "May 1, 2022" },
        { blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4", blogCoverPhotoAlt: "designed for everyone", blogDate: "April 31, 2022" },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-cards-wrapper {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
</style>