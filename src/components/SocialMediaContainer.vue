<template>
  <div>
    <BaseContainer title="Redes sociais">
      <ItemGroup :items="socialItems" @toggle="handleToggle" />
    </BaseContainer>
  </div>
</template>

<script>
import ItemGroup from "@/components/global/ItemGroup.vue";
import BaseContainer from "@/components/global/BaseContainer.vue";

export default {
  name: "SocialMediaContainer",
  components: {
    BaseContainer,
    ItemGroup,
  },
  data() {
    return {
      socialItems: [
        { svg: require("@/assets/svgs/instagram.svg"), active: false },
        { svg: require("@/assets/svgs/linkedin.svg"), active: false },
        { svg: require("@/assets/svgs/youtube.svg"), active: false },
        { svg: require("@/assets/svgs/pinterest.svg"), active: false },
        { svg: require("@/assets/svgs/twitter.svg"), active: false },
        { svg: require("@/assets/svgs/facebook.svg"), active: false },
      ],
    };
  },
  methods: {
    handleToggle(index) {
      this.socialItems[index].active = !this.socialItems[index].active;
      const activeItems = this.socialItems.filter((item) => item.active);
      const inactiveItems = this.socialItems.filter((item) => !item.active);

      this.$emit("status-change", {
        active: activeItems,
        inactive: inactiveItems,
      });
    },
  },
};
</script>

<style></style>
