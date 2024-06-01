<template>
  <BaseContainer title="Upload de imagem">
    <div
      class="upload-container"
      @dragover.prevent="handleDragOver"
      @dragleave.prevent="handleDragLeave"
      @drop.prevent="handleDrop"
    >
      <template v-if="media">
        <div class="image-preview-container">
          <img :src="media" alt="Uploaded Image" class="thumbnail-image" />
          <button @click="removeImage" class="remove-image-button">×</button>
        </div>
      </template>
      <template v-else>
        <img
          src="@/assets/svgs/cloud-upload.svg"
          alt="Upload Image Placeholder"
          class="upload-image"
        />
        <p>Arraste e solte uma imagem aqui ou clique no botão abaixo</p>
        <BaseButton
          label="Pesquisar imagens"
          @click="handleUploadClick"
          class="upload-button"
          tertiary
        />
      </template>
      <input
        type="file"
        ref="fileInput"
        @change="handleFileChange"
        style="display: none"
      />
    </div>
  </BaseContainer>
</template>

<script>
import { mapActions, mapState } from "vuex";
import BaseContainer from "@/components/global/BaseContainer.vue";
import BaseButton from "@/components/global/BaseButton.vue";

export default {
  name: "ImageUploadContainer",
  components: {
    BaseContainer,
    BaseButton,
  },
  data() {
    return {
      media: "",
    };
  },
  computed: {
    ...mapState({
      schedule: (state) => state.schedule,
    }),
  },
  watch: {
    "schedule.media": {
      handler(newMedia) {
        this.media = newMedia;
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions(["updateScheduleField"]),
    handleUploadClick() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      this.uploadFile(file);
      this.$refs.fileInput.value = null;
    },
    handleDragOver(event) {
      event.dataTransfer.dropEffect = "copy";
      event.currentTarget.classList.add("dragging");
    },
    handleDragLeave(event) {
      event.currentTarget.classList.remove("dragging");
    },
    handleDrop(event) {
      event.currentTarget.classList.remove("dragging");
      const file = event.dataTransfer.files[0];
      this.uploadFile(file);
    },
    uploadFile(file) {
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target.result;
          this.media = result;
          this.updateScheduleField({ field: "media", value: result });
        };
        reader.readAsDataURL(file);
      } else {
        alert("Por favor, selecione um arquivo de imagem.");
      }
    },
    removeImage() {
      this.media = "";
      this.updateScheduleField({ field: "media", value: "" });
    },
  },
  mounted() {
    this.media = this.schedule.media;
  },
};
</script>

<style scoped>
p {
  color: #828282;
}

.upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ccc;
  padding: 20px;
  border-radius: 8px;
  transition: border-color 0.3s;
}

.upload-container.dragging {
  border-color: #333;
}

.upload-image {
  max-width: 100%;
  height: auto;
}

.upload-button {
  margin-top: 20px;
}

.image-preview-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.thumbnail-image {
  max-width: 150px;
  max-height: 150px;
  border-radius: 8px;
  object-fit: cover;
}

.remove-image-button {
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  color: white;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  line-height: 24px;
  transition: background 0.3s;
}

.remove-image-button:hover {
  background: rgba(0, 0, 0, 0.9);
}
</style>
