<template>
  <div class="navbar">
    <div class="logo">
      <img
        alt="Logo mLabs"
        src="@/assets/images/mlabs-logo.png"
        style="cursor: pointer"
        @click="$router.push({ name: 'Home' })"
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
}

.logo {
  display: flex;
  align-items: center;
  padding-left: 40px;
}

.profile {
  display: flex;
  align-items: center;
  padding-right: 40px;
  gap: 10px;
}

.profile-pic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 10px;
}

.profile-name {
  font-size: 16px;
  color: black;
  font-weight: bold;
}
</style>
