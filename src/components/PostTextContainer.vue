<template>
  <div>
    <BaseContainer title="Texto do post">
      <BaseTextArea />
    </BaseContainer>
  </div>
</template>
<script>
import BaseContainer from "@/components/global/BaseContainer.vue";
import BaseTextArea from "./global/BaseTextArea.vue";

export default {
  name: "PostTextContainer",
  components: {
    BaseContainer,
    BaseTextArea,
  },
};
</script>
