<template>
  <div>
    <BaseContainer title="Visualização de post">
      <div v-if="!selectedImage" class="content-container">
        <p>
          Aguardando conteúdo. Informe os canais e as mídias desejadas para
          visualização.
        </p>
        <img
          class="responsive-image"
          alt="Post preview"
          src="../assets/images/post-preview.png"
        />
      </div>
      <div v-else>
        <PostPreview
          :platform="selectedPlatform"
          :image="selectedImage"
          :description="selectedDescription"
        />
      </div>
    </BaseContainer>
  </div>
</template>

<script>
import BaseContainer from "@/components/global/BaseContainer.vue";
import PostPreview from "@/components/global/PostPreview.vue";

export default {
  name: "PostViewContainer",
  components: {
    BaseContainer,
    PostPreview,
  },
  data() {
    return {
      selectedImage: "",
      selectedPlatform: "Linkedin",
      selectedDescription: "Esta é uma descrição do post.",
    };
  },
};
</script>

<style scoped>
p {
  color: #828282;
}

.content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 26px 0px 26px 0px;
  gap: 16px;
}

.responsive-image {
  max-width: 100%;
  height: auto;
}
</style>
