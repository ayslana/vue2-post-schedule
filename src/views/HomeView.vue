<template>
  <div class="container">
    <div>
      <img
        alt="Home Image"
        src="../assets/images/home.png"
        class="responsive-image"
      />
    </div>
    <div class="button-container">
      <BaseButton
        label="Agendar post"
        @click="$router.push({ name: 'Agendamento' })"
      />
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/global/BaseButton.vue";

export default {
  name: "HomeView",
  components: {
    BaseButton,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.responsive-image {
  width: 100%;
  max-width: 408px;
  max-height: 461px;
  height: auto;
  margin-bottom: 4em;
}

.button-container {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
