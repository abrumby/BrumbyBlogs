<template>
  <!-- form floating title -->
  <h2 class="mt-5 text-xl font-semibold text-gray-600">{{ mainTitle1 }}</h2>
  <p class="mb-2 text-gray-500">{{ mainTitle2 }}</p>
  <!-- form floating title -->
  <div class="mb-2 rounded bg-white p-4 px-4 shadow-lg md:p-8">
    <!-- left section-->
    <div class="grid grid-cols-1 gap-4 gap-y-2 text-sm lg:grid-cols-3">
      <div class="text-gray-600">
        <p class="text-lg font-medium">{{ sideTitle1 }}</p>
        <p>{{ sideTitle2 }}</p>
      </div>
      <!-- left section-->
      <!-- right section -->
      <div class="lg:col-span-2">
        <div class="grid grid-cols-1 gap-4 gap-y-2 text-sm md:grid-cols-5">
          <slot></slot>
        </div>
      </div>
      <!-- right section -->
    </div>
  </div>
</template>

<script>
export default {
  name: "FormContainer",
  props: ["mainTitle1", "mainTitle2", "sideTitle1", "sideTitle2"],
};
</script>

<style scoped></style>
