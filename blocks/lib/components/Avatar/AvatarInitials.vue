<script>
export default {
  props: {
    firstName: {
      type: String,
      default: null
    },
    lastName: {
      type: String,
      default: null
    }
  },
  computed: {
    firstInitial() {
      return this.firstName.split('')[0];
    },
    lastInitial() {
      return this.lastName.split('')[0];
    },
  }
};
</script>

<template>
  <div v-if="firstName && lastName">
    <div class="w-10 h-10 rounded-full bg-slate-500 text-center flex flex-col justify-center">
      <span class="initials font-bold text-white">
        {{ firstInitial }} {{ lastInitial }}
      </span>
    </div>
  </div>
</template>

<style scoped>
  .initials {
    letter-spacing: -0.0875rem;
  }
</style>
