<template>
  <router-link
    :to="{ name: viewName }"
    :class="[activeClass, textColor, bgColor, bgHoverColor]"
  >
    {{ buttonText }}
  </router-link>
</template>

<script>
export default {
  name: "NavButton",
  props: {
    viewName: String,
    buttonText: String,
    textColor: String,
    bgColor: String,
    bgHoverColor: String,
  },
  data() {
    return {
      activeClass: [
        "inline-flex",
        "items-center",
        "justify-center",
        "px-4 py-2",
        "text-base",
        "font-medium",
        "leading-6",
        "whitespace-no-wrap",
        "border",
        "border-gray-200",
        "rounded-md ",
        "shadow-sm",
        "focus:outline-none",
        "focus:shadow-none",
      ],
    };
  },
};
</script>

<style scoped></style>
