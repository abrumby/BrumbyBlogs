<template>
  <router-link
    :to="{ name: viewName }"
    class="relative text-xl font-extrabold font-medium leading-6 text-zinc-900 transition duration-150 ease-out hover:text-indigo-400 hover:underline hover:underline-offset-4"
  >
    <span class="block">{{ linkText }}</span>
  </router-link>
</template>

<script>
export default {
  name: "NavLink",
  props: {
    viewName: String,
    linkText: String,
  },
};
</script>
