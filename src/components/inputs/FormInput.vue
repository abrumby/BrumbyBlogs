<template>
  <div class="m-3">
    <label class="text-gray-700">{{ label }}</label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="inputType"
      class="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out hover:border-indigo-400 focus:border-indigo-600 focus:bg-white focus:text-gray-700 focus:outline-none"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: ["modelValue", "label", "placeholder", "inputType"],
  emits: ["update:modelValue"],
};
</script>
