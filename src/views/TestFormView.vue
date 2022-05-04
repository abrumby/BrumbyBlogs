<template>
  <div
    class="l:w-1/2 xs:w-1/2 mx-auto justify-center sm:w-1/2 md:w-1/2 xl:w-1/4"
  >
    <div
      class="mx-auto mx-auto mt-10 w-full rounded-lg border border-gray-200 bg-white px-6 py-6 sm:px-8 sm:py-8 sm:shadow md:px-12"
    >
      <h3 class="text-lg font-bold text-indigo-500 sm:text-xl md:text-2xl">
        Your Profile
      </h3>
      <p class="md:text-normal mt-2 text-base text-gray-600 sm:text-lg"></p>
      <div class="m-3">
        <button
          @click="updateProfile"
          class="mt-5 justify-center rounded-md bg-indigo-500 px-2 py-1 text-white hover:bg-indigo-700"
        >
          Update Profile
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "test-form",
  setup() {},
  components: {},
};
</script>
