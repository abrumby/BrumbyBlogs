<template>
  <section class="relative bg-white min-w-screen -z-10">
    <div class="container mx-auto sm:px-12 xl:px-5">
      <p class="text-xs font-bold text-left text-pink-500 uppercase sm:mx-6 sm:text-center sm:text-normal sm:font-bold">
        Frequently Asked Questions
      </p>
      <h3 class="mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center sm:mx-0">
        What is Brumby Logs?
      </h3>
      <QuestionStandard :question="question" v-for="(question, index) in question" :key="index" />
    </div>
  </section>
</template>

<script>
import QuestionStandard from "@/components/cards/QuestionStandard";
export default {
  name: 'about-view',
  components: { QuestionStandard },
  data() {
    return {
      question: [
        {
          questionTitle: "Who are you?",
          questionText: "Adam Brumby, a software developer from Manchester, UK"
        },
        {
          questionTitle: "What was this site built with?",
          questionText: "This site was built with a Vue.JS front end, using tailwind CSS, Vuex for state management and the backend utilizes Firebase for authentication and storage."
        },
        {
          questionTitle: "Whats the purpose of this site?",
          questionText: "This site was created as part of my #100DaysOfCoding challenge as a place to document my journey, and has since evolved into my own playground for learning new things."
        },
        {
          questionTitle: "Do I need to sign up?",
          questionText: "No! The user section was built as a training exercise more than anything, but feel free to give it a try!"
        }
      ],
    }
  }
}
</script>