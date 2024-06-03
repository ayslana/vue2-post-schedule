<template>
  <div class="footer-container">
    <BaseButton label="Cancelar" @click="confirmCancel" text />
    <BaseButton label="Salvar rascunho" @click="confirmSaveDraft" tertiary />
    <BaseButton label="Agendar" @click="confirmSchedule" secondary />
    <BaseModal
      :isVisible="showModal"
      @close="closeModal"
      :label="label"
      @handleConfirmation="handleConfirmation"
      :showCancel="showCancel"
    />
  </div>
</template>

<script>
import BaseButton from "@/components/global/BaseButton.vue";
import BaseModal from "@/components/global/BaseModal.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "ScheduleFooter",
  components: {
    BaseButton,
    BaseModal,
  },
  data() {
    return {
      showModal: false,
      showCancel: false,
      label: "",
      pendingAction: null,
    };
  },
  computed: {
    ...mapState(["schedule", "persistedSchedule"]),
  },
  methods: {
    ...mapActions(["clearSchedule", "addSchedule", "persistSchedule"]),
    handleConfirmation() {
      if (this.pendingAction) {
        this.pendingAction();
        this.pendingAction = null;
      }
      this.closeModal();
    },
    confirmCancel() {
      this.setModal(
        "Você tem certeza que deseja cancelar o agendamento? Todas as suas informações serão perdidas.",
        this.handleCancel,
        true
      );
    },
    confirmSaveDraft() {
      if (this.isScheduleNotEmpty()) {
        this.setModal("Rascunho salvo com sucesso!", this.handleSaveDraft);
        this.persistSchedule(true);
      } else {
        this.setModal(
          "Por favor, preencha pelo menos um campo antes de salvar o rascunho."
        );
        this.persistSchedule(false);
      }
    },
    confirmSchedule() {
      if (this.isScheduleComplete()) {
        this.setModal("Agendamento feito com sucesso!", this.handleSchedule);
      } else {
        this.setModal(
          "Por favor, preencha todos os campos obrigatórios antes de agendar."
        );
      }
    },
    setModal(label, action = null, showCancel = false) {
      this.label = label;
      this.pendingAction = action;
      this.showCancel = showCancel;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    handleCancel() {
      this.clearSchedule();
      this.persistSchedule(false);
      this.$router.push({ name: "Home" });
    },
    handleSchedule() {
      this.addSchedule();
      this.persistSchedule(false);
      this.$router.push({ name: "Listagem de Agendamento" });
    },
    handleSaveDraft() {
      this.$router.push({ name: "Home" });
    },
    isScheduleNotEmpty() {
      const { text, icons, time, date, media } = this.schedule;
      return text || icons.length || time || date || media;
    },
    isScheduleComplete() {
      const { text, icons, time, date, media } = this.schedule;
      return text && icons.length && time && date && media;
    },
  },
  beforeMount() {
    if (!this.persistedSchedule) {
      this.clearSchedule();
    }
    this.persistSchedule(false);
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
  padding: 0 24px;
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
