<script>
export default {
  props: {
    name: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    labelClass: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    onChange: {
      type: Function,
      default: null,
    },
    maxLength: {
      type: Number,
      default: null,
    },
    error: {
      type: String,
      default: null,
    },
  },
  computed: {
    /**
     * The value passed in as the v-model for the input
     */
    inputValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      },
    },
  },
  methods: {
    change({ target }) {
      let { value } = target;
      this.inputValue = value;
      this.$emit("change", { name: this.name, value });
    },
  },
};
</script>

<template>
  <div>
    <div v-if="label" :class="String(labelClass)">
      <label>{{ label }}</label>
    </div>
    <span v-if="required" class="text-danger ml-1">*</span>
    <input
      :ref="name"
      v-model="inputValue"
      type="text"
      class="border border-slate-200 p-3 rounded-lg w-full md:w-96"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :readonly="readOnly"
      :maxlength="maxLength"
      @change="change"
    />
    <div v-if="error && error !== 'undefined'" class="text-sm text-red-500 mt-2">
      <span>{{ error }}</span>
    </div>
    <div v-if="description" >
      <span class="text-sm text-slate-500">
        {{ description }}
      </span>
    </div>
  </div>
</template>
