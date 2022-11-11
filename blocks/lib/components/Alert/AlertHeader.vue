<script>
import {
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
  HandThumbUpIcon,
} from "@heroicons/vue/24/solid";

export default {
  components: {
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
    XMarkIcon,
    HandThumbUpIcon,
  },
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
    dismissible: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    backgroundClass() {
      switch (this.type) {
        case "success":
          return "bg-green-50";
        case "warning":
          return "bg-yellow-50";
        case "danger":
          return "bg-red-50";
        default:
          return "bg-slate-50";
      }
    },
    iconClass() {
      switch (this.type) {
        case "success":
          return "text-green-500 h-6 w-6 mr-2";
        case "warning":
          return "text-yellow-500 h-6 w-6 mr-2";
        case "danger":
          return "text-red-500 h-6 w-6 mr-2";
        default:
          return "text-slate-500 h-6 w-6 mr-2";
      }
    },
    borderClass() {
      switch (this.type) {
        case "success":
          return "border-green-100";
        case "warning":
          return "border-yellow-100";
        case "danger":
          return "border-red-100";
        default:
          return "border-slate-100";
      }
    },
  },
  methods: {
    dismiss() {
      this.$emit('dismissed');
    },
  },
};
</script>

<template>
  <div class="flex justify-between border-b py-3 px-6" :class="borderClass">
    <div class="flex">
      <div>
        <ExclamationCircleIcon
          v-if="type === 'danger' || type === 'default'"
          :class="iconClass"
        />
        <HandThumbUpIcon
          v-if="type === 'success'"
          :class="iconClass"
        />
        <ExclamationTriangleIcon
          v-if="type === 'warning'"
          :class="iconClass"
        />
      </div>
      <div>
        <div class="flex text-left">
          <p :class="titleClass">
            {{ title }}
          </p>
        </div>
      </div>
    </div>
    <div v-if="dismissible">
      <button @click.prevent="dismiss">
        <XMarkIcon class="h-6 w-6 text-slate-500 mr-2" />
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>
