<template>
  <div>
    <BaseContainer title="Data de publicação">
      <DateTimeInput />
    </BaseContainer>
  </div>
</template>
<script>
import BaseContainer from "@/components/global/BaseContainer.vue";
import DateTimeInput from "@/components/global/DateTimeInput.vue";

export default {
  name: "PublicationDateContainer",
  components: {
    BaseContainer,
    DateTimeInput,
  },
};
</script>
<style lang=""></style>
