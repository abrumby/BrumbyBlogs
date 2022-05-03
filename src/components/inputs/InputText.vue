<template>
  <div>
    <label>
      Name
      <input type="text" v-model="input" name="text" />
      <ErrorDisplay v-if="errors" :errors="errors" />
    </label>
  </div>
</template>
<script>
import useInputValidator from "@/features/elements/useInputValidator";
import { minLength } from "@/features/validators/validators";
import ErrorDisplay from "@/components/elements/ErrorDisplay";

export default {
    name: "InputText",
    props: {
      value: String
    },
    setup (props, { emit }) {
    const { input, errors } = useInputValidator(
        props.value,
        [ minLength(3) ],
        value => emit("input", value)
    );
    return {
      input,
      errors
    }
  },
  components: {
    ErrorDisplay
  }
}
</script>