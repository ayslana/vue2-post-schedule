<template>
  <div class="date-time-inputs">
    <div class="input-wrapper">
      <img src="@/assets/svgs/calendar.svg" alt="Calendar" class="icon" />
      <input type="text" placeholder="DD/MM" />
    </div>
    <div class="input-wrapper">
      <img src="@/assets/svgs/clock.svg" alt="Clock" class="icon" />
      <input type="text" placeholder="HH:MM" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DateTimeInput",
};
</script>

<style scoped>
.date-time-inputs {
  display: flex;
  gap: 10px;
  width: 100%;
}

.input-wrapper {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 7.5px;
  background-color: #fff;
  flex-grow: 1;
  min-width: 0;
}

.icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

input {
  border: none;
  outline: none;
  font-size: 14px;
  flex-grow: 1;
  min-width: 0;
}

input::placeholder {
  color: #999;
}

input:focus {
  outline: none;
}
</style>
