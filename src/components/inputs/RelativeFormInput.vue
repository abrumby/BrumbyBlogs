<template>
  <div class="relative">
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      autocomplete="off"
      placeholder="Last Name"
      type="text"
      class="focus:borer-rose-600 peer mt-2 h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none"
    />
    <label
      for="lastName"
      class="peer-placeholder-shown:text-gray-440 absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
      >Last Name</label
    >
  </div>
</template>

<script>
export default {
  props: ["modelValue", "placeholder"],
  emits: ["update:modelValue"],
};
</script>
