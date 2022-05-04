<template>
  <span v-if="error" class="mt-1 ml-1 flex items-center text-xs font-medium tracking-wide text-red-500">
    {{ error }}
  </span>
</template>

<script>
export default {
  name: "ErrorDisplay",
  props: {
    error: String,
  },
};
</script>
