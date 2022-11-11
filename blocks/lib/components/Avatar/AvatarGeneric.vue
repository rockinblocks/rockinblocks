<script>
import { UserIcon } from "@heroicons/vue/24/solid";
export default {
  components: { UserIcon },
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
  <div>
    <div class="w-10 h-10 rounded-full bg-slate-500 text-center flex flex-col justify-center">
      <div class="mx-auto">
        <UserIcon class="text-white w-6 h-6" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .initials {
    letter-spacing: -0.0875rem;
  }
</style>
