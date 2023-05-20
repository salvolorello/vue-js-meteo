<template>
  <v-btn color="primary" elevation="2" large @click="actions">{{ text }}</v-btn>
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
    text: String,
    actions: Function,
  },
};
</script>
