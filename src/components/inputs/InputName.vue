<template>
    <div class="relative">
      <input v-model="input" autocomplete="off" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Full Name" />
      <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Full Name</label>
    </div>
  <ErrorDisplay :error="error"></ErrorDisplay>
</template>
<script>
import { ref, computed } from 'vue';
import ErrorDisplay from "@/components/elements/ErrorDisplay";
export default {
  name: 'InputName',
  components: {ErrorDisplay},
  setup() {
    let input = ref("");
    const error = computed(() => {
      return input.value === "" ? "The Input field is required" : "";
    });
    return { input, error };
  },
};
</script>