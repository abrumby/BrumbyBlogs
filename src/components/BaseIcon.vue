<template>
  <img :src="require(`@/assets/Icons/${icon}.svg`)">
</template>


<script>
export default {
  name: 'BaseIcon',
  props: ['icon']
}
</script>