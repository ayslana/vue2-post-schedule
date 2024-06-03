<template>
  <button
    @click="handleClick"
    :disabled="isDisabled"
    class="base-btn"
    :class="buttonClass"
    :title="label"
  >
    <p v-if="label">{{ label }}</p>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    primary: {
      type: Boolean,
      default: true,
    },
    text: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    tertiary: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClass() {
      return {
        "btn-primary": this.primary,
        "btn-text": this.text,
        "btn-secondary": this.secondary,
        "btn-tertiary": this.tertiary,
      };
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.base-btn {
  border-radius: 4px;
  border: 1px solid transparent;
  font-size: 16px;
  font-weight: 700 !important;
  min-width: 184px;
  max-height: 45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.btn-primary {
  background-color: #f2994a;
  color: white;
  border-color: #e0812c;
}
.btn-primary:hover {
  background-color: #f2984ad8;
}

.btn-secondary {
  background-color: #2f80ed;
  color: white;
  border-color: #2f80ed;
}
.btn-secondary:hover {
  background-color: #2f81eddb;
}

.btn-tertiary {
  background-color: transparent;
  color: #2f80ed;
  border-color: #2f80ed;
}
.btn-tertiary:hover {
  background-color: #d5e7ff30;
}

.btn-text {
  background-color: transparent;
  border: none;
  color: #2f80ed;
  min-width: inherit;
  min-height: inherit;
}
.btn-text:hover {
  text-decoration: underline;
  background-color: transparent;
}

/* Media Queries for Responsiveness */
@media (max-width: 1200px) {
  .base-btn {
    font-size: 14px;
    min-width: 160px;
    max-height: 40px;
  }
}

@media (max-width: 992px) {
  .base-btn {
    font-size: 12px;
    min-width: 140px;
    max-height: 35px;
  }
}

@media (max-width: 768px) {
  .base-btn {
    font-size: 10px;
    min-width: 120px;
    max-height: 30px;
  }
}

@media (max-width: 576px) {
  .base-btn {
    font-size: 8px;
    min-width: 100px;
    max-height: 25px;
  }
}
</style>
