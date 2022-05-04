<template>
  <li
    :class="
      'row my-1 mt-2 flex w-full items-center justify-between rounded border bg-gray-100 py-1 px-4 text-gray-600 ' +
      `${task.done ? 'border-green-600' : ''}`
    "
  >
    <div class="column items-center">
      <input class="mx-1 cursor-pointer" type="checkbox" :checked="task.done" @input="toggleDone" />
      <span :class="{ 'line-through': task.done }">{{ task.content }}</span>
    </div>
    <div class="row-reverse items-center hover:text-red-500" @click="removeTask">
      <span class="float-right cursor-pointer px-4 py-2">
        <font-awesome-icon :icon="['fas', 'trash']" />
      </span>
    </div>
  </li>
</template>

<script>
export default {
  name: "TaskCard",
  props: ["task"],
  methods: {
    toggleDone() {
      this.$store.commit("toggleTask", this.task);
    },
    removeTask() {
      this.$store.commit("deleteTask", this.task);
    },
  },
};
</script>

<style scoped></style>
