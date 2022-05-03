<template>
  <div class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
    <h3 class="text-lg font-bold text-indigo-600 sm:text-xl md:text-2xl">{{question.questionTitle}}</h3>
    <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
      {{question.questionText}}
    </p>
  </div>
</template>

<script>
export default {
  name: "QuestionStandard",
  props: ["question"]
}
</script>