<script>
export default {
  props: {
    content: {
      type: String,
      default: null,
    },
    contentClass: {
      type: String,
      default: null,
    },
  },
};
</script>

<template>
  <div class="flex text-left pt-3 pb-6 px-6">
    <p :class="contentClass">
      {{ content }}
    </p>
  </div>
</template>

<style scoped>
</style>
