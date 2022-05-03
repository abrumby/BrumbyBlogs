<template>
  <div class="m-3">
    <label class="text-gray-700">{{ label }}</label>
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :type="inputType" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none hover:border-indigo-400" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  props: ['modelValue', 'label', 'placeholder', 'inputType'],
  emits: ['update:modelValue']
}
</script>
