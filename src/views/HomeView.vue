<template>
  <div class="home">
    <HomeHero :post="welcomeScreen" />
    <BlogsArea />
    <RegisterSection v-if="!user" />
    <BrandsArea />
  </div>
</template>

<script>

import RegisterSection from '@/components/sections/RegisterSection'
import BrandsArea from "@/components/sections/BrandsArea"
import HomeHero from "@/components/hero/HomeHero"
import BlogsArea from "@/components/sections/BlogsArea"
export default {
  name: 'home-view',
  components: {
    HomeHero,
    BrandsArea,
    RegisterSection,
    BlogsArea
  },
  computed: {
    welcomeScreen() {
      return this.$store.state.welcomeScreen
    },
    user(){
      return this.$store.state.user
    }
  }
}
</script>