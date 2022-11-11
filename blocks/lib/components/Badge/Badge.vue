<script>

export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
      default: null,
    },
    textColor: {
      type: String,
      default: null,
    }
  },
  computed: {
    backgroundClass() {
      if(!this.backgroundColor) {
        return 'bg-rose-500'
      }
    },
    textClass() {
      if(this.active) {
        return 'text-sky-500';
      }

      return 'text-white';
    }
  }
};
</script>

<template>
  <div class="p-1 px-3 rounded-full inline-flex" :class="backgroundClass" :style="`background-color: ${backgroundColor}`">
    <span class="text-sm" :class="textClass">
      <slot></slot>
    </span>
  </div>
</template>

<style scoped>

</style>
