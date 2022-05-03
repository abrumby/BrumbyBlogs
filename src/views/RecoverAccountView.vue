<template>
  <div class="account-recover">
    <MessageModal :modal-message="modalMessage" v-if="modalActive" v-on:close-modal="closeModal" />
    <LoadingSpinner v-if="loadingActive" />
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <div class="flex justify-center">
          <div>
            <h1 class="text-2xl font-semibold">Reset Password</h1>
          </div>
        </div>
        <form action="">
          <div class="mt-4">
            <div>
              <label class="block" for="email">Email</label>
              <input v-model="email" type="text" placeholder="Email" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
              <span class="text-xs tracking-wide text-red-600">Email field is required </span>
            </div>
          </div>
          <div class="flex items-baseline justify-between">
            <button type="submit" @click.prevent="resetPassword" class="px-6 py-2 mt-4 text-white bg-zinc-600 rounded-lg hover:bg-zinc-900">Reset password</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import MessageModal from "@/components/modals/MessageModal"
import LoadingSpinner from "@/components/loaders/LoadingSpinner"
import { sendPasswordResetEmail } from "firebase/auth"
import {auth } from "@/firebase/firebaseInit"
export default {
  name: "recover-account-view",
  data() {
    return {
      email: "",
      modalActive: false,
      modalMessage: "",
      modalCode: 0,
      loadingActive: false
    }
  },
  components: {
    LoadingSpinner,
    MessageModal
  },
  methods: {
    closeModal() {
      this.modalActive = !this.modalActive
      this.email = ""
      if(this.modalCode === 1){
        this.$router.push({name: 'login-view'})
      }
    },
    async resetPassword() {
      this.loadingActive = true
      this.modalCode = 0
      if(this.email !== ""){
          await sendPasswordResetEmail(auth, this.email).then(() => {
          this.modalMessage = "Email sent! if an account exists with that email. "
          this.modalActive = true
          this.loadingActive = false
            this.modalCode = 1
        }).catch(err => {
          this.modalMessage = err.message
          this.modalActive = true;
          this.loadingActive = false
          this.modalCode = 0
        })
      }
      this.loadingActive = false
    }
  }
}
</script>