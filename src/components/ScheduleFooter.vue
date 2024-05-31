<template>
  <div class="footer-container">
    <BaseButton label="Cancelar" @click="handleCancel" text />
    <BaseButton label="Salvar rascunho" @click="handleSaveDraft" tertiary />
    <BaseButton label="Agendar" @click="handleSchedule" secondary />
  </div>
</template>

<script>
import BaseButton from "@/components/global/BaseButton.vue";

export default {
  name: "ScheduleFooter",
  components: {
    BaseButton,
  },
  methods: {
    handleCancel() {
      this.$router.push({ name: "Home" });
    },
    handleSaveDraft() {},
    handleSchedule() {
      this.$router.push({ name: "Listagem de Agendamento" });
    },
  },
};
</script>

<style scoped>
.footer-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 67px;
  border-top: 1px solid #e0e0e0;
  box-sizing: border-box;
  padding: 0px 24px 0px 24px;
  gap: 16px;
  z-index: 1000;
  background-color: white;
}

.footer-container button {
  margin-left: 8px;
}

.footer-container ::v-deep .base-button {
  margin-left: 8px;
}
</style>
