<template>
  <BaseContainer title="Visualização de post">
    <div v-if="!hasContent" class="content-container">
      <p>
        Aguardando conteúdo. Informe os canais e <br />
        as mídias desejadas para visualização.
      </p>
      <img
        class="responsive-image"
        alt="Post preview"
        src="@/assets/images/post-preview.png"
      />
    </div>
    <PostPreview v-else :schedule="schedule" />
  </BaseContainer>
</template>

<script>
import { mapGetters } from "vuex";
import BaseContainer from "@/components/global/BaseContainer.vue";
import PostPreview from "@/components/global/PostPreview.vue";

export default {
  name: "PostViewContainer",
  components: {
    BaseContainer,
    PostPreview,
  },
  computed: {
    ...mapGetters(["getSchedule"]),
    schedule() {
      return this.getSchedule;
    },
    hasContent() {
      return this.schedule.media && this.schedule.social_network_key.length;
    },
  },
};
</script>

<style scoped>
p {
  color: #828282;
  text-align: center;
}

.content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  text-align: center;
}

.responsive-image {
  max-width: 100%;
  padding: 24px;
}
</style>
