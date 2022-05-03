<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
      <div class="flex justify-center">
        <div>
          <h1 class="text-2xl font-semibold">Login to Brumby logs</h1>
        </div>
      </div>
      <div class="flex justify-center">
        <router-link :to="{name: 'register-view'}" class="text-sm text-blue-600 hover:underline">
          Register for an account?
        </router-link>
      </div>
      <form action="">
        <div class="mt-4">
          <div>
            <label class="block" for="email">Email</label>
            <input v-model="email" type="email" placeholder="Email" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
            <span class="text-xs tracking-wide text-red-600">Email field is required </span>
          </div>
          <div class="mt-4">
            <label class="block">Password</label>
            <input v-model="password" type="password" placeholder="Password" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
          </div>
          <div class="flex items-baseline justify-between">
            <button type="submit" @click.prevent="signIn" class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
            <router-link :to="{name: 'recover-account-view'}" class="text-sm text-blue-600 hover:underline">
              Forgot password?
            </router-link>
          </div>
          <div v-for="(error, index) in errors" :key="index" class="flex items-baseline justify-between">
            <span  class="text-xs tracking-wide text-red-600">{{ error.errorMessage }}</span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/firebase/firebaseInit"

export default {
  name: "login-view",
  data() {
    return {
      email: "",
      password: "",
      errors: []
    }
  },
  methods: {
    async signIn() {
      this.errors = []
      if(this.email !== "" && this.password !== "")
      {
        await signInWithEmailAndPassword(auth, this.email, this.password).then(() => {
          this.$router.push({name: 'home-view'})
          console.log(auth.currentUser.uid)
        }).catch(err => {
          this.errors.push({errorElement: "login", errorMessage: err.message})
        })
      }
      this.errors.push({errorElement: "none", errorMessage: "something went wrong!"})
    }
  }
}
</script>
