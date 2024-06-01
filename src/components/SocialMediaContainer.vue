<template>
  <BaseContainer title="Redes sociais">
    <ItemGroup :items="socialNetworks" @toggle="handleToggle" />
  </BaseContainer>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import ItemGroup from "@/components/global/ItemGroup.vue";
import BaseContainer from "@/components/global/BaseContainer.vue";

export default {
  name: "SocialMediaContainer",
  components: {
    BaseContainer,
    ItemGroup,
  },
  computed: {
    ...mapGetters(["getSocialNetworks"]),
    socialNetworks() {
      return this.getSocialNetworks;
    },
  },
  mounted() {
    this.fetchSocialNetworks();
  },
  methods: {
    ...mapActions(["fetchSocialNetworks", "updateScheduleIconsAndKeys"]),
    ...mapMutations(["setSocialNetworks"]),
    handleToggle(index) {
      const updatedNetworks = [...this.socialNetworks];
      updatedNetworks[index].active = !updatedNetworks[index].active;
      this.setSocialNetworks(updatedNetworks);

      const activeItems = updatedNetworks.filter((item) => item.active);
      const inactiveItems = updatedNetworks.filter((item) => !item.active);

      this.$emit("status-change", {
        active: activeItems,
        inactive: inactiveItems,
      });

      const transformedObject = {
        icons: activeItems.map((item) => item.icon),
        social_network_key: activeItems.map((item) => item.id),
      };

      this.updateScheduleIconsAndKeys(transformedObject);
    },
  },
};
</script>
