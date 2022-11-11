<script>
import AlertHeader from "./AlertHeader.vue";
import AlertContent from "./AlertContent.vue";

export default {
  components: { AlertHeader, AlertContent },
  props: {
    type: {
      type: String,
      default: "default",
    },
    title: {
      type: String,
      default: null,
    },
    titleClass: {
      type: String,
      default: null,
    },
    content: {
      type: String,
      default: null,
    },
    contentClass: {
      type: String,
      default: null,
    },
    dismissible: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isClosed: false,
    };
  },
  computed: {
    backgroundClass() {
      let classes = [];
      switch (this.type) {
        case "success":
          classes.push("bg-green-50");
          break;
        case "warning":
          classes.push("bg-yellow-50");
          break;
        case "danger":
          classes.push("bg-red-50");
          break;
        default:
          classes.push("bg-slate-50");
      }

      if (this.shadow) {
        classes.push("drop-shadow-xl");
      }

      return classes.join(" ");
    },
  },
  methods: {
    close() {
      this.isClosed = true;
    },
  },
};
</script>

<template>
  <div
    v-if="!isClosed"
    class="p-1 rounded-xl max-w-xl"
    :class="backgroundClass"
  >
    <AlertHeader
      :type="type"
      :title="title"
      :title-class="titleClass"
      :dismissible="dismissible"
      @dismissed="close"
    />
    <AlertContent :content-class="contentClass" :content="content" />
  </div>
</template>

<style scoped>
</style>
