<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="mt-4 bg-white px-8 py-6 text-left shadow-lg">
      <div class="flex justify-center">
        <div>
          <h1 class="text-2xl font-semibold">Login to Brumby logs</h1>
        </div>
      </div>
      <div class="flex justify-center">
        <router-link :to="{ name: 'register-view' }" class="text-sm text-blue-600 hover:underline"> Register for an account? </router-link>
      </div>
      <form action="">
        <div class="mt-4">
          <div>
            <label class="block" for="email">Email</label>
            <input
              v-model="email"
              type="email"
              placeholder="Email"
              class="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            <span class="text-xs tracking-wide text-red-600">Email field is required </span>
          </div>
          <div class="mt-4">
            <label class="block">Password</label>
            <input
              v-model="password"
              type="password"
              placeholder="Password"
              class="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div class="flex items-baseline justify-between">
            <button type="submit" @click.prevent="signIn" class="mt-4 rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-900">
              Login
            </button>
            <router-link :to="{ name: 'recover-account-view' }" class="text-sm text-blue-600 hover:underline">
              Forgot password?
            </router-link>
          </div>
          <div v-for="(error, index) in errors" :key="index" class="flex items-baseline justify-between">
            <span class="text-xs tracking-wide text-red-600">{{ error.errorMessage }}</span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebaseInit";

export default {
  name: "login-view",
  data() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    async signIn() {
      this.errors = [];
      if (this.email !== "" && this.password !== "") {
        await signInWithEmailAndPassword(auth, this.email, this.password)
          .then(() => {
            this.$router.push({ name: "home-view" });
            console.log(auth.currentUser.uid);
          })
          .catch((err) => {
            this.errors.push({
              errorElement: "login",
              errorMessage: err.message,
            });
          });
      }
      this.errors.push({
        errorElement: "none",
        errorMessage: "something went wrong!",
      });
    },
  },
};
</script>
