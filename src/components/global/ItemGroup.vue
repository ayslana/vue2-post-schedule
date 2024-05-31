<template>
  <div class="item-group">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="['item', { active: item.active }]"
      @click="toggleItem(index)"
    >
      <img :src="item.svg" class="icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemGroup",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toggleItem(index) {
      this.$emit("toggle", index);
    },
  },
};
</script>

<style scoped>
.item-group {
  max-width: fit-content;
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
}

.item {
  width: 33px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #e0e0e0;
  border-radius: 50%;
  margin: 0px 5px 0px 5px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
}

.item.active {
  background-color: #d0f0c0;
  border-color: #00aaff;
}

.icon {
  width: 16px;
  height: 16px;
}
</style>
