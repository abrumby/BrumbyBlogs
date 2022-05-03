<template>
  <div class="group inline-block relative" v-if="user">
    <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
      <span class="mr-1">{{ this.$store.state.profile.username }}</span>
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
      </svg>
    </button>
    <ul class="absolute hidden font-bold text-gray-700 pt-1 group-hover:block w-full">
      <li class="">
        <router-link :to="{name: 'profile-view'}" class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >
          <span><font-awesome-icon :icon="['fas', 'user' ]" class="left" /></span>
          <span class="pl-2">Profile</span>
        </router-link>
      </li>
      <li class="">
        <router-link :to="{name: 'admin-view'}" class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
          <span><font-awesome-icon :icon="['fas', 'cogs' ]" class="left" /></span>
          <span class="pl-2">Admin</span>
        </router-link>
      </li>
      <li class="">
        <div @click="signOut" class="rounded-b bg-gray-200 py-2 px-4 block whitespace-no-wrap hover:bg-red-600 hover:text-white cursor-pointer">
          <span><font-awesome-icon :icon="['fas', 'circle-xmark' ]" class="left" /></span>
          <span class="pl-2">Sign Out</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {signOut} from "firebase/auth";
import {auth} from "@/firebase/firebaseInit";

export default {
  name: "ProfileDropDown",
  methods: {
    signOut() {
      signOut(auth)
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

<style scoped>

</style>