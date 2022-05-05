<template>
  <div id="app">
    <Navigation v-if="!navigation" />
    <router-view />
    <Footer v-if="!navigation" />
  </div>
</template>

<script>
import Navigation from "./components/sections/Navigation";
import Footer from "./components/sections/Footer";
import { auth } from "@/firebase/firebaseInit";

export default {
  name: "app",
  components: { Navigation, Footer },
  created() {
    this.checkRoute();
    auth.onAuthStateChanged((user) => {
      this.$store.commit("updateUser", user);
      if (user) {
        this.$store.dispatch("getCurrentUser");
      }
    });
  },
  data() {
    return {
      navigation: null,
      noTemplates: ["login-view", "recover-account-view", "register-view"],
    };
  },
  methods: {
    checkRoute() {
      if (this.noTemplates.includes(this.$route.name)) {
        this.navigation = true;
        return;
      }
      this.navigation = false;
    },
  },
  watch: {
    $route() {
      this.checkRoute();
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
* {
  font-family: "Quicksand", sans-serif;
}
</style>
