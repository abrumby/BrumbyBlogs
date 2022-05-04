<template>
  <div
    class="mx-auto mt-10 w-full rounded-lg border border-gray-200 bg-white px-6 py-6 sm:px-8 sm:py-8 sm:shadow md:px-12 lg:w-5/6 xl:w-2/3"
  >
    <h3 class="text-lg font-bold text-indigo-600 sm:text-xl md:text-2xl">
      {{ question.questionTitle }}
    </h3>
    <p class="md:text-normal mt-2 text-base text-gray-600 sm:text-lg">
      {{ question.questionText }}
    </p>
  </div>
</template>

<script>
export default {
  name: "QuestionStandard",
  props: ["question"],
};
</script>
