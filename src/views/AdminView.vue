<template>
  <LoadingSpinner v-if="loadingActive" />
  <PageWrapper>
    <FormContainer main-title1="Admin Section" side-title1="Promote Administrator" side-title2="Use this section to promote a user to admin.">
      <div class="md:col-span-5">
        <FormInput v-model="adminEmail" label="Email" placeholder="Email to promote" input-type="email"></FormInput>
      </div>
      <div class="text-right md:col-span-5">
        <div class="inline-flex items-end">
          <button @click="addAdmin" class="mt-5 justify-center rounded-md bg-indigo-500 px-2 py-1 text-white hover:bg-indigo-700">Submit</button>
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
import PageWrapper from "@/components/layouts/PageWrapper";
import FormContainer from "@/components/layouts/FormContainer";
import FormInput from "@/components/inputs/FormInput";
import { functions } from "../firebase/firebaseInit";
import { httpsCallable } from "firebase/functions";


export default {
  name: "admin-view",
  components: { FormInput, FormContainer, PageWrapper, LoadingSpinner, MessageToast },
  data() {
    return {
      adminEmail: '',
      toastActive: false,
      toastMessage: "test",
      loadingActive: false,
    };
  },
  methods: {
    async addAdmin() {
      const addAdminRole = httpsCallable(functions, 'addAdminRole');
      await addAdminRole({ email: this.adminEmail })
        .then((result) => {
          this.toastMessage = result.data.message
          this.toastActive = true
        }).catch((err) => console.log(err));
    },
    closeToast() {
      this.toastActive = false;
    }
  }
};
</script>

<style scoped></style>
