<template>
  <LoadingSpinner v-if="loadingActive" />
  <div
    class="l:w-1/2 xs:w-1/2 mx-auto justify-center sm:w-1/2 md:w-1/2 xl:w-1/4"
  >
    <div
      class="mx-auto mx-auto mt-10 w-full rounded-lg border border-gray-200 bg-white px-6 py-6 sm:px-8 sm:py-8 sm:shadow md:px-12"
    >
      <h3 class="text-lg font-bold text-indigo-500 sm:text-xl md:text-2xl">
        Your Profile: {{ username }}
      </h3>
      <FormInput
        v-model="firstName"
        label="First Name"
        placeholder="Jess"
        input-type="text"
      ></FormInput>
      <FormInput
        v-model="lastName"
        label="Last Name"
        placeholder="Bloggs"
        input-type="text"
      ></FormInput>
      <FormInput
        v-model="username"
        label="Username"
        placeholder="jBloggs"
        input-type="text"
      ></FormInput>
      <FormInput
        v-model="email"
        label="Email Address"
        placeholder="jBloggs@domain.com"
        input-type="email"
      ></FormInput>
      <FormInput
        v-model="initials"
        label="Initials"
        placeholder="JB"
        input-type="text"
      ></FormInput>
      <div class="m-3">
        <button
          @click="updateProfile"
          class="mt-5 justify-center rounded-md bg-indigo-500 px-2 py-1 text-white hover:bg-indigo-700"
        >
          Update Profile
        </button>
      </div>
      <MessageToast
        v-if="toastActive"
        :message="toastMessage"
        v-on:close-toast="closeToast"
      ></MessageToast>
    </div>
  </div>
</template>

<script>
import MessageToast from "@/components/toasts/MessageToast";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";
import FormInput from "@/components/inputs/FormInput";
export default {
  name: "profile-view",
  components: { MessageToast, FormInput, LoadingSpinner },
  data() {
    return {
      toastActive: false,
      toastMessage: "test",
      loadingActive: false,
    };
  },
  methods: {
    updateProfile() {
      this.loadingActive = true;
      this.$store.dispatch("updateUserProfile");
      this.toastMessage = "Profile Updated!";
      this.toastActive = !this.toastActive;
      this.loadingActive = !this.loadingActive;
      setTimeout(() => (this.toastActive = false), 3500);
    },
    closeToast() {
      this.toastActive = false;
    },
  },
  computed: {
    firstName: {
      get() {
        return this.$store.state.profile.firstName;
      },
      set(payload) {
        this.$store.commit("changeFirstName", payload);
      },
    },
    lastName: {
      get() {
        return this.$store.state.profile.lastName;
      },
      set(payload) {
        this.$store.commit("changeLastName", payload);
      },
    },
    initials: {
      get() {
        return this.$store.state.profile.initials;
      },
    },
    username: {
      get() {
        return this.$store.state.profile.username;
      },
      set(payload) {
        this.$store.commit("changeUsername", payload);
      },
    },
    email: {
      get() {
        return this.$store.state.profile.email;
      },
      set(payload) {
        this.$store.commit("changeEmail", payload);
      },
    },
  },
};
</script>
