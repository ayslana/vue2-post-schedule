<template>
  <div :class="containerClass">
    <div class="container-header">
      <h4>{{ title }}</h4>
    </div>
    <div class="container-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseContainer",
  props: {
    title: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "full",
    },
  },
  computed: {
    containerClass() {
      return [
        "container",
        {
          "container-full": this.size === "full",
          "container-half": this.size === "half",
          "container-quarter": this.size === "quarter",
        },
      ];
    },
  },
};
</script>

<style scoped>
.container {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}

.container-header {
  border-bottom: 1px solid #e0e0e0;
  text-align: left;
}

.container-header h4 {
  margin: 0;
  padding: 8px;
}

.container-content {
  padding: 4px 0;
  flex: 1;
  margin: 10px;
}

.container-full {
  width: 100%;
}

.container-half {
  width: 50%;
}

.container-quarter {
  width: 25%;
}

@media (max-width: 768px) {
  .container-half,
  .container-quarter {
    width: 100%;
  }
}
</style>
