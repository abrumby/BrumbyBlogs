<template>
  <router-link
    :to="{ name: viewName }"
    class="text-base font-bold leading-6 text-gray-500 hover:text-gray-900 hover:text-indigo-400"
  >
    {{ linkText }}
  </router-link>
</template>

<script>
export default {
  name: "FooterLink",
  props: {
    viewName: String,
    linkText: String,
  },
};
</script>

<style scoped></style>
