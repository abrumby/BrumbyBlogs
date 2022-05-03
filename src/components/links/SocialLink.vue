<template>
  <a :href="socialUrl" class="text-gray-400 hover:text-gray-500 fa-2x hover:scale-110 hover:text-indigo-400">
    <span class="sr-only">{{ linkText }}</span>
    <font-awesome-icon :icon="['fab', icon ]" />
  </a>
</template>

<script>
export default {
  name: "SocialLink",
  props: {
    linkText: String,
    icon: String,
    socialUrl: String
  }
}
</script>

<style scoped>

</style>