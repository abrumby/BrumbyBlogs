<template>
  <LoadingSpinner v-if="loadingActive" />
  <PageWrapper>
    <FormContainer main-title1="My profile" main-title2="Update your user information here!" side-title1="My Profile" side-title2="Data">
      <div class="md:col-span-5">
        <FormInput v-model="firstName" label="First Name" placeholder="Jess" input-type="text"></FormInput>
      </div>
      <div class="md:col-span-5">
        <FormInput v-model="lastName" label="Last Name" placeholder="Bloggs" input-type="text"></FormInput>
      </div>
      <div class="md:col-span-5">
        <FormInput v-model="username" label="Username" placeholder="jBloggs" input-type="text"></FormInput>
      </div>
      <div class="md:col-span-5">
        <FormInput v-model="email" label="Email Address" placeholder="jBloggs@domain.com" input-type="email"></FormInput>
      </div>
      <div class="md:col-span-5">
        <FormInput v-model="initials" label="Initials" placeholder="JB" input-type="text"></FormInput>
      </div>
      <div class="text-right md:col-span-5">
        <div class="inline-flex items-end">
          <button @click="updateProfile" class="mt-5 justify-center rounded-md bg-indigo-500 px-2 py-1 text-white hover:bg-indigo-700">Update Profile</button>
        </div>
      </div>
      <div class="col-span-5">
        <MessageToast v-if="toastActive" :message="toastMessage" v-on:close-toast="closeToast" class="float-right"></MessageToast>
      </div>
    </FormContainer>
  </PageWrapper>
</template>

<script>
import MessageToast from "@/components/toasts/MessageToast";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";
import FormInput from "@/components/inputs/FormInput";
import FormContainer from "@/components/layouts/FormContainer";
import PageWrapper from "@/components/layouts/PageWrapper";

export default {
  name: "profile-view",
  components: { PageWrapper, MessageToast, FormInput, FormContainer, LoadingSpinner },
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
