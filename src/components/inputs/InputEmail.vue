<template>
  <div>
    <label>
      Email
      <input type="email" v-model="input" name="email" />
    </label>
    <ErrorDisplay v-if="input" :errors="errors" />
  </div>
</template>
<script>
import useInputValidator from "@/features/elements/useInputValidator";
import { isEmail } from "@/features/validators/validators";
import ErrorDisplay from "@/components/elements/ErrorDisplay";

export default {
  name: "InputEmail",
  props: {
    value: String
  },
  setup (props, { emit }) {
    const { input, errors } = useInputValidator(
        props.value,
        [ isEmail() ],
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