<script>
import { ArrowDownCircleIcon } from '@heroicons/vue/24/solid'

export default {
  components: { ArrowDownCircleIcon },
  props: {
    label: {
      type: String,
      default: null,
    },
    labelClass: {
      type: String,
      default: null,
    },
    toggleText: {
      type: String,
      default: null,
    },
    toggleIcon: {
      type: String,
      default: "fa-open",
    },
  },
  methods: {
    toggle() {
      this.$emit("toggle");
    },
  },
};
</script>

<template>
  <div class="flex justify-between">
    <p :class="labelClass">
      {{ label }}
    </p>
    <button @click="toggle">
      <span v-if="toggleText">{{ toggleText }}</span>
      <ArrowDownCircleIcon class="h-6 w-6 text-slate-500"/>
    </button>
  </div>
</template>

<style scoped>
</style>
