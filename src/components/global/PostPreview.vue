<template>
  <div class="post-preview" :class="{ 'scroll-container': isMultipleNetworks }">
    <div
      class="social-post"
      v-for="(networkKey, index) in schedule.social_network_key"
      :key="networkKey"
      :class="getPlatformClass(networkKey)"
    >
      <div class="post-header">
        <div :class="['social-icon-container', getPlatformClass(networkKey)]">
          <img
            :src="getIconPath(schedule.icons[index])"
            class="social-icon"
            alt="Profile Icon"
          />
        </div>
        <div class="post-user-info">
          <p class="user-name">Anselmo Carlos</p>
          <p v-if="isLinkedin(networkKey)" class="post-date">
            {{ schedule.date }}
          </p>
        </div>
      </div>
      <div class="post-content">
        <p v-if="isLinkedin(networkKey)" class="post-text">
          {{ schedule.text }}
        </p>
        <div class="post-image">
          <img :src="schedule.media" alt="Post Image" />
        </div>
        <p v-if="isInstagram(networkKey)" class="post-text">
          {{ schedule.text }}
        </p>
      </div>
      <div class="post-footer">
        <div v-if="isLinkedin(networkKey)" class="linkedin-comments">
          <span class="comments-count">5 comentários</span>
        </div>
        <div v-if="isInstagram(networkKey)" class="instagram-actions actions">
          <div class="insta-main-icons">
            <img src="@/assets/svgs/heart.svg" alt="Like" />
            <img src="@/assets/svgs/comment.svg" alt="Comment" />
          </div>
          <img
            src="@/assets/svgs/bookmark.svg"
            alt="Bookmark"
            class="bookmark"
          />
        </div>
        <div v-if="isLinkedin(networkKey)" class="linkedin-actions actions">
          <img src="@/assets/svgs/in-like.svg" alt="Like" />
          <img src="@/assets/svgs/in-comments.svg" alt="Comments" />
          <img src="@/assets/svgs/in-share.svg" alt="Share" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPreview",
  props: {
    schedule: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isMultipleNetworks() {
      return this.schedule.social_network_key.length > 1;
    },
  },
  methods: {
    isLinkedin(networkKey) {
      return networkKey === 1;
    },
    isInstagram(networkKey) {
      return networkKey === 2;
    },
    getPlatformClass(networkKey) {
      return this.isLinkedin(networkKey) ? "linkedin" : "instagram";
    },
    getIconPath(icon) {
      return require(`@/assets/svgs/${icon}`);
    },
  },
};
</script>

<style scoped>
.post-preview {
  border-radius: 8px;
  overflow: hidden;
  margin: 16px;
  display: flex;
  flex-direction: row;
  background: #fff;
}

.scroll-container {
  overflow-x: auto;
}

.social-post {
  flex: 0 0 auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-right: 16px;
  max-width: 345px;
}

.post-header {
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #e1e1e1;
}

.social-icon-container {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.linkedin .social-icon-container {
  background: #3a70da;
}

.instagram .social-icon-container {
  background: linear-gradient(187.5deg, #ef2ea2 5.81%, #e0a22b 109.34%);
}

.social-icon {
  width: 24px;
  height: 24px;
  transition: filter 0.3s;
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(93deg)
    brightness(107%) contrast(101%);
}

.post-user-info {
  margin-left: 8px;
}

.user-name {
  font-weight: bold;
  margin: 0;
}

.post-date {
  margin: 0;
  color: #777;
  font-size: 12px;
}

.post-content {
  padding: 8px;
}

.post-image img {
  width: 100%;
  max-width: 348px;
  max-height: 348px;
  object-fit: cover;
  border-bottom: 1px solid #e1e1e1;
}

.post-footer {
  padding: 0px 8px 4px 8px;
}

.post-text {
  margin: 0 0 8px 0;
  text-align: left;
}

.actions {
  display: flex;
  align-items: center;
}

.instagram-actions {
  justify-content: space-between;
}

.insta-main-icons {
  display: flex;
}

.insta-main-icons img {
  margin-right: 8px;
}

.bookmark {
  margin-left: auto;
}

.linkedin-comments {
  margin-bottom: 8px;
  text-align: left;
}

.linkedin-actions {
  justify-content: flex-start;
}

.linkedin-actions img {
  margin-right: 8px;
}

.comments-count {
  font-size: 12px;
  color: #777;
}
</style>
