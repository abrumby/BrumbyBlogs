<template>
    <span v-if="error" class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          {{ error }}
    </span>
</template>

<script>
export default {
  name: "ErrorDisplay",
  props: {
    error: String
  }
}
</script>