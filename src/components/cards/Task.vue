<template>
  <li :class="'flex row items-center justify-between w-full py-1 px-4 my-1 rounded border mt-2 bg-gray-100 text-gray-600 ' +`${task.done ? 'border-green-600' : ''}`">
    <div class="items-center column">
      <input class="mx-1 cursor-pointer" type="checkbox" :checked="task.done" @input="toggleDone">
      <span :class="{'line-through': task.done }">{{ task.content }}</span>
    </div>
    <div class="items-center row-reverse hover:text-red-500" @click="removeTask">
        <span class="px-4 py-2 float-right cursor-pointer" >
          <font-awesome-icon :icon="['fas', 'trash']" />
        </span>
    </div>
  </li>
</template>

<script>
export default {
  name: "TaskCard",
  props: ['task'],
  methods: {
    toggleDone(){
      this.$store.commit('toggleTask', this.task)
    },
    removeTask(){
      this.$store.commit('deleteTask', this.task)
    }
  }
}
</script>

<style scoped>

</style>