<template>
  <div class="item-group">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="['item', { active: isActive(item.id), disabled: item.disabled }]"
      @click="!item.disabled && toggleItem(index)"
      @mouseover="!item.disabled && hoverItem(index, true)"
      @mouseleave="!item.disabled && hoverItem(index, false)"
    >
      <img :src="getIconPath(item.icon)" class="icon" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ItemGroup",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["getSchedule"]),
    socialNetworkKey() {
      return this.getSchedule.social_network_key;
    },
  },
  methods: {
    isActive(itemId) {
      return this.socialNetworkKey.includes(itemId);
    },
    toggleItem(index) {
      this.$emit("toggle", index);
    },
    hoverItem(index, isHovering) {
      this.hoveredItem = isHovering ? index : null;
    },
    getIconPath(iconName) {
      return require(`@/assets/svgs/${iconName}`);
    },
  },
};
</script>

<style scoped>
.item-group {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
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
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
}

.item.active {
  background: linear-gradient(135deg, #ef9f2e 25%, #e02b4b 105.56%);
  border-color: #ef9f2e;
}

.item:not(.active):not(.disabled):hover {
  background: #fff3e0;
}

.item.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.icon {
  width: 16px;
  height: 16px;
}

.item.active .icon {
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(93deg)
    brightness(107%) contrast(101%);
}

.item:not(.active):not(.disabled):hover .icon {
  filter: invert(73%) sepia(100%) saturate(589%) hue-rotate(346deg)
    brightness(96%) contrast(101%);
}
</style>
