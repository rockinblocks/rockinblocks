<script>
import AvatarInitials from "./AvatarInitials.vue";
import AvatarImage from "./AvatarImage.vue";
import AvatarGeneric from "./AvatarGeneric.vue";

export default {
  components: { AvatarInitials, AvatarImage, AvatarGeneric },
  props: {
    src: {
      type: String,
      default: null,
    },
    alt: {
      type: String,
      default: null,
    },
    firstName: {
      type: String,
      default: null,
    },
    lastName: {
      type: String,
      default: null,
    },
  },
};
</script>

<template>
  <div>
    <AvatarImage v-if="src" :src="src" :alt="alt" />
    <AvatarInitials
      v-if="!src && (firstName && lastName)"
      :first-name="firstName"
      :last-name="lastName"
    />
    <AvatarGeneric v-if="!src && !firstName && !lastName" />
  </div>
</template>

<style scoped>
.initials {
  letter-spacing: -0.0875rem;
}
</style>
