<script>

export default {
  props: {
    size: {
      type: String,
      default: 'md'
    },
    backgroundColor: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    }
  },
  computed: {
    backgroundClass() {
      let classes = [];

      if(!this.backgroundColor && !this.type) {
        classes.push("bg-black");
      }

      switch (this.type) {
        case "primary":
          classes.push("bg-rose-500 hover:bg-rose-600");
          break;
        case "success":
          classes.push("bg-green-500 hover:bg-green-600");
          break;
        case "danger":
          classes.push("bg-red-500 hover:bg-red-600");
          break;
        case "warning":
          classes.push("bg-yellow-500 hover:bg-yellow-600");
          break;
        case "info":
          classes.push("bg-sky-500 hover:bg-sky-600");
          break;
        default:
          classes.push("bg-slate-500 hover:bg-slate-600");
      }

      if(this.size === "sm") {
        classes.push("p-2 inline-flex");
      }

      if(this.size === "md") {
        classes.push("p-3");
        classes.push("w-36");
      }

      if(this.size === "lg") {
        classes.push("p-4");
        classes.push("w-48");
      }

      return classes.join(" ");
    }
  }
};
</script>

<template>
  <button class="rounded-full text-center" :class="backgroundClass" :style="`background-color: ${backgroundColor} !important`">
    <span class="text-white font-semibold">
      <slot></slot>
    </span>
  </button>
</template>

<style scoped>

</style>
