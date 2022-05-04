<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="mt-4 bg-white px-8 py-6 text-left shadow-lg">
      <div class="flex justify-center">
        <div>
          <h1 class="text-2xl font-semibold">Register to Brumby logs</h1>
        </div>
      </div>
      <div class="flex justify-center">
        <router-link
          :to="{ name: 'login-view' }"
          class="text-sm text-blue-600 hover:underline"
        >
          Already have an account?
        </router-link>
      </div>
      <form>
        <div class="mt-4">
          <div class="mt-4">
            <label class="block">First Name</label>
            <input
              v-model="firstName"
              type="text"
              placeholder="First Name"
              class="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div class="mt-4">
            <label class="block">Last Name</label>
            <input
              v-model="lastName"
              type="text"
              placeholder="Last Name"
              class="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div class="mt-4">
            <label class="block">Username</label>
            <input
              v-model="username"
              type="text"
              placeholder="Username"
              class="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div class="mt-4">
            <label class="block" for="email">Email</label>
            <input
              v-model="email"
              type="text"
              placeholder="Email"
              class="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
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
            <button
              type="submit"
              @click.prevent="register"
              class="mt-4 rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-900"
            >
              Register
            </button>
          </div>
          <div
            v-for="(error, index) in errors"
            :key="index"
            class="flex items-baseline justify-between"
          >
            <span class="text-xs tracking-wide text-red-600">{{
              error.errorMessage
            }}</span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, Timestamp } from "@/firebase/firebaseInit";
import { doc, setDoc } from "firebase/firestore";

export default {
  name: "register-view",
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    async register() {
      this.errors = [];
      if (
        this.email !== "" &&
        this.password !== "" &&
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.username !== ""
      ) {
        const createUser = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        const result = await createUser;
        const docRef = await setDoc(doc(db, "users", result.user.uid), {
          userId: result.user.uid,
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          email: this.email,
          createdOn: Timestamp.now(),
        });
        await docRef;
        this.$router.push({ name: "home-view" });
        return;
      }
      if (this.email === "")
        this.errors.push({
          errorElement: "email",
          errorMessage: "Email Address is required!",
        });
      if (this.password === "")
        this.errors.push({
          errorElement: "password",
          errorMessage: "Password is required!",
        });
      if (this.firstName === "")
        this.errors.push({
          errorElement: "firstName",
          errorMessage: "First name is required!",
        });
      if (this.lastName === "")
        this.errors.push({
          errorElement: "lastName",
          errorMessage: "Last name is required!",
        });
      if (this.username === "")
        this.errors.push({
          errorElement: "username",
          errorMessage: "Username is required!",
        });
    },
  },
};
</script>
