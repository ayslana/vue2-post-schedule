<template>
  <div class="navbar">
    <div class="logo" @click="navigateHome">
      <img
        alt="Logo mLabs"
        src="@/assets/images/mlabs-logo.png"
        class="logo-img"
      />
    </div>
    <div class="profile">
      <div class="profile-pic">
        <img alt="Profile picture" src="@/assets/images/user.png" />
      </div>
      <span class="profile-name">{{ userName }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      userName: "Anselmo Carlos",
    };
  },
  methods: {
    navigateHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1000;
  padding: 0 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  cursor: pointer;
}

.logo-img {
  display: flex;
  align-items: center;
}

.profile {
  display: flex;
  align-items: center;
  gap: 10px;
}

.profile-pic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}

.profile-pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-name {
  font-size: 16px;
  color: black;
  font-weight: bold;
}
</style>
