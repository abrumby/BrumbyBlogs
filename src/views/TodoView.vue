<template>
  <section>
    <div class="container mx-auto my-10 sm:w-5/6 xl:w-2/6">
      <h3 class="mt-1 text-left text-2xl font-bold text-gray-800 sm:mx-6 sm:mx-0 sm:text-center sm:text-3xl md:text-4xl lg:text-5xl">Todo List</h3>
      <div class="new-todo-form column mt-8 flex">
        <input
          type="text"
          v-model="newTask"
          placeholder="Add a new Task"
          @keypress.enter="addTask"
          class="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
        />
        <button
          @click="addTask"
          class="ml-2 rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-100 hover:bg-green-600 hover:text-white"
        >
          <font-awesome-icon :icon="['fas', 'plus']" />
        </button>
      </div>
      <ul>
        <TaskCard v-for="(task, index) in $store.state.tasks" :key="index" :task="task" />
      </ul>
    </div>
  </section>
</template>

<script>
import TaskCard from "@/components/cards/Task";

export default {
  name: "todo-view",
  components: {
    TaskCard,
  },
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.$store.commit("addTask", this.newTask);
        this.newTask = "";
      }
    },
  },
};
</script>
