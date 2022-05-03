<template>
  <div class="mx-auto justify-center xl:w-1/4 l:w-1/2 md:w-1/2 sm:w-1/2 xs:w-1/2">
    <div class="mx-auto w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow">
      <h3 class="text-lg font-bold text-indigo-500 sm:text-xl md:text-2xl ">Your Profile</h3>
      <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
      </p>
      <div class="m-3">
        <button @click="updateProfile" class="bg-indigo-500 text-white rounded-md px-2 py-1 mt-5 justify-center hover:bg-indigo-700">Update Profile</button>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'test-form',
  setup() {
  },
  components: {
  },
};
</script>