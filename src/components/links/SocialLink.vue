<template>
  <a :href="socialUrl" class="fa-2x text-gray-400 hover:scale-110 hover:text-gray-500 hover:text-indigo-400">
    <span class="sr-only">{{ linkText }}</span>
    <font-awesome-icon :icon="['fab', icon]" />
  </a>
</template>

<script>
export default {
  name: "SocialLink",
  props: {
    linkText: String,
    icon: String,
    socialUrl: String,
  },
};
</script>

<style scoped></style>
