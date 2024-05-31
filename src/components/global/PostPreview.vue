<template>
  <div class="post-preview" :class="platformClass">
    <div class="post-header">
      <img :src="profileIcon" alt="Profile Icon" class="profile-icon" />
      <div class="post-user-info">
        <p>Anselmo Carlos</p>
        <p v-if="isLinkedin">06 de Setembro</p>
      </div>
    </div>
    <div class="post-image">
      <img :src="image" alt="Post Image" />
    </div>
    <div class="post-footer">
      <p>{{ description }}</p>
      <div v-if="isLinkedin" class="linkedin-actions">
        <img src="@/assets/svgs/in-like.svg" alt="Like" />
        <img src="@/assets/svgs/in-comments.svg" alt="Comments" />
        <img src="@/assets/svgs/in-share.svg" alt="Share" />
        <span>5 comentários</span>
      </div>
      <div v-if="isInstagram" class="instagram-actions">
        <img src="@/assets/svgs/heart.svg" alt="Like" />
        <img src="@/assets/svgs/comment.svg" alt="Comment" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    platform: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  computed: {
    isLinkedin() {
      return this.platform === "Linkedin";
    },
    isInstagram() {
      return this.platform === "Instagram";
    },
    platformClass() {
      return this.isLinkedin ? "linkedin" : "instagram";
    },
    profileIcon() {
      return this.isLinkedin
        ? "@/assets/svgs/linkedin.svg"
        : "@/assets/svgs/instagram.svg";
    },
  },
};
</script>

<style scoped>
.post-preview {
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  overflow: hidden;
  margin: 16px;
}
.post-header {
  display: flex;
  align-items: center;
  padding: 8px;
}
.profile-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.post-user-info {
  margin-left: 8px;
}
.post-image img {
  width: 100%;
  height: auto;
}
.post-footer {
  padding: 8px;
}
.linkedin .linkedin-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.instagram .instagram-actions {
  display: flex;
  align-items: center;
}
.linkedin-actions img,
.instagram-actions img {
  margin-right: 8px;
}
</style>
