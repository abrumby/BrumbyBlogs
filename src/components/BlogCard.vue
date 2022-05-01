<template>
  <div class="blog-cards">
    <h3>I'm a card!</h3>
    <div class="icons">
      <div class="icon">
        <baseIcon icon="edit-regular"/>
      </div>
      <div class="icon">
        <baseIcon icon="trash-regular"/>
      </div>
    </div>
    <img :src="require(`@/assets/blogCards/${card.blogCoverPhoto}.jpg`)" alt="{{card.blogCoverPhotoAlt}}" />
    <div class="info">
      <h4>{{card.blogTitle}}</h4>
      <h6>Posted on: {{card.blogDate}}</h6>
      <router-link class="link" :to="{name: 'about-view'}" />
    </div>
  </div>
</template>

<script>
import baseIcon from "@/components/BaseIcon";
export default {
  name: "BlogCard",
  props: ["card"],
  components: { baseIcon }
}
</script>

<style scoped>

</style>