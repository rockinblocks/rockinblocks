<script>
import AvatarInitials from "./AvatarInitials.vue";

export default {
  components: { AvatarInitials },
  props: {
    src: {
      type: String,
      default: null,
    },
    alt: {
      type: String,
      default: null,
    }
  },
};
</script>

<template>
  <div v-if="src">
    <img :src="src" :alt="alt" class="w-10 h-10 rounded-full" />
  </div>
</template>

<style scoped>

</style>
