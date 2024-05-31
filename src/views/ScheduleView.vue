<template>
  <div>
    <div class="schedule-view">
      <div class="left-side">
        <div class="top">
          <SocialMediaContainer />
          <PublicationDateContainer />
        </div>
        <div class="bottom">
          <PostTextContainer />
          <ImageUploadContainer />
        </div>
      </div>
      <div class="right-side">
        <PostPreviewContainer />
      </div>
    </div>
    <ScheduleFooter />
  </div>
</template>

<script>
import ImageUploadContainer from "@/components/ImageUploadContainer.vue";
import PostTextContainer from "@/components/PostTextContainer.vue";
import PostPreviewContainer from "@/components/PostPreviewContainer.vue";
import PublicationDateContainer from "@/components/PublicationDateContainer.vue";
import ScheduleFooter from "@/components/ScheduleFooter.vue";
import SocialMediaContainer from "@/components/SocialMediaContainer.vue";

export default {
  name: "ScheduleView",
  components: {
    ImageUploadContainer,
    PostTextContainer,
    PostPreviewContainer,
    PublicationDateContainer,
    SocialMediaContainer,
    ScheduleFooter,
  },
};
</script>

<style scoped>
.schedule-view {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  width: 100%;
  box-sizing: border-box;
}

.left-side {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 16px;
}

.left-side .top {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.left-side .bottom {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 16px;
}

.left-side .bottom > * {
  height: 100%;
}

.right-side {
  display: grid;
  grid-template-rows: 1fr;
  gap: 16px;
}

@media (min-width: 768px) {
  .schedule-view {
    grid-template-columns: 1fr 1fr;
  }

  .left-side .top {
    grid-template-columns: 1fr 1fr;
  }

  .left-side .bottom {
    grid-template-rows: auto 1fr;
  }

  .right-side {
    grid-template-rows: auto 1fr;
  }
}
</style>
