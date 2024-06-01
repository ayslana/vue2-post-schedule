<template>
  <div v-if="isVisible" class="modal-overlay">
    <div class="modal-content">
      <div>
        <div class="label-container">
          <h3>{{ label }}</h3>
        </div>
        <div class="modal-footer">
          <BaseButton @click="handleOkClick" label="OK" secondary></BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  name: "BaseModal",
  components: {
    BaseButton,
  },
  props: {
    label: {
      type: String,
      default: "Agendado com sucesso!",
    },
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    handleOkClick() {
      this.$emit("handleConfirmation");
      this.closeModal();
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 40%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
}

.label-container {
  max-width: 60%;
  margin: 0 auto;
}

.modal-footer {
  display: flex;
  justify-content: center;
}
</style>
