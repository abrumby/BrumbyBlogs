<template>
  <section>
    <div class="container mx-auto my-10 xl:w-2/6 sm:w-5/6">
      <h3 class="mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center sm:mx-0">
        Todo List
      </h3>
      <div class="new-todo-form flex column mt-8">
        <input type="text" v-model="newTask" placeholder="Add a new Task" @keypress.enter="addTask" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        <button @click="addTask" class="ml-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow hover:bg-green-600 hover:text-white">
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
    TaskCard
  },
  data() {
    return {
      newTask: ''
    }
  },
  methods: {
    addTask() {
      if(this.newTask) {
        this.$store.commit('addTask', this.newTask)
        this.newTask = ''
      }
    }
  }
}
</script>