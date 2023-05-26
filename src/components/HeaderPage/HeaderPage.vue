<template>
    <h1>{{ title }}</h1>

</template>

<script>
export default {
  data: () => {
    return {
      // data
    };
  },

  components: {},
  props: {
    title: String,
  },
};
</script>
<style scoped>

@media (max-width: 768px) {
h1{
  font-size: 100%;
}}

</style>
