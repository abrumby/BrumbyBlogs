<template>
  <header>
    <nav>
      <section class="relative w-full px-8 text-gray-700 bg-white body-font">
        <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <BrandLink />
          <nav class="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
            <NavLink view-name="home-view" link-text="Home" />
            <NavLink view-name="blogs-view" link-text="Blogs" />
            <NavLink view-name="create-blog-view" link-text="Create Blog" />
            <NavLink view-name="about-view" link-text="About" />
          </nav>
          <div class="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
              <NavButton v-if="!user" view-name="login-view" button-text="Sign In" text-color="text-gray-600" bg-color="bg-white" bg-hover-color="hover:bg-gray-200" />
              <NavButton v-if="!user" viewName="register-view" button-text="Register" text-color="text-white" bg-color="bg-indigo-600" bg-hover-color="hover:bg-indigo-800"  />
          </div>
          <ProfileDropDown />
        </div>
      </section>
    </nav>
  </header>
</template>

<script>
import BrandLink from "@/components/links/BrandLink";
import NavLink from "@/components/links/NavLink";
import NavButton from "@/components/buttons/NavButton";
import { auth } from '@/firebase/firebaseInit'

import ProfileDropDown from "@/components/sections/ProfileDropDown";

export default {
  name: 'NavigationView',
  components: {ProfileDropDown, NavButton, NavLink, BrandLink},

  data() {
    return {
      loggedIn: auth.currentUser
    }
  },
  computed: {
    user() {
      console.log(this.$store.state.user)
      return this.$store.state.user
    }
  }
}
</script>