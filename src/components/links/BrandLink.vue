<template>
  <router-link
    :to="{ name: 'home-view' }"
    class="relative z-10 flex w-auto select-none items-center text-2xl font-extrabold leading-none text-black hover:text-zinc-600"
  >
    Brumby Logs
  </router-link>
</template>

<script>
export default {
  name: "BrandLink",
};
</script>

<style scoped></style>
