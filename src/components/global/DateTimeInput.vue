<template>
  <div class="date-time-inputs">
    <div class="input-wrapper">
      <img src="@/assets/svgs/calendar.svg" alt="Calendar" class="icon-size" />
      <DatePicker
        v-model="date"
        valueType="format"
        format="DD/MM/YYYY"
        placeholder="DD/MM/YYYY"
        type="date"
        class="date-picker"
        @change="updateScheduleDateFormatted"
      >
        <template v-slot:icon-calendar>
          <svg></svg>
        </template>
      </DatePicker>
    </div>
    <div class="input-wrapper">
      <img src="@/assets/svgs/clock.svg" alt="Clock" class="icon-size" />
      <input
        type="text"
        placeholder="HH:MM"
        v-model="time"
        @input="formatTime"
        @blur="finalizeTimeFormat"
      />
    </div>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import { mapActions, mapState } from "vuex";

export default {
  name: "DateTimeInput",
  components: {
    DatePicker,
  },
  data() {
    return {
      date: null,
      time: "",
    };
  },
  computed: {
    ...mapState({
      schedule: (state) => state.schedule,
    }),
  },
  watch: {
    "schedule.date_formatted": {
      handler(newDate) {
        this.date = newDate;
      },
      immediate: true,
    },
    "schedule.time": {
      handler(newTime) {
        this.time = newTime;
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions(["updateScheduleField"]),
    updateScheduleDateFormatted() {
      this.updateScheduleField({ field: "date_formatted", value: this.date });
      this.updateScheduleDate();
    },
    updateScheduleDate() {
      if (this.date && this.time) {
        const dateTime = `${this.date} às ${this.time}`;
        this.updateScheduleField({ field: "date", value: dateTime });
      }
    },
    formatTime(event) {
      let value = event.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
      if (value.length > 2) {
        value = `${value.slice(0, 2)}:${value.slice(2, 4)}`;
      }
      this.time = value;
    },
    finalizeTimeFormat() {
      if (this.time.length === 4 && !this.time.includes(":")) {
        this.time = `${this.time.slice(0, 2)}:${this.time.slice(2, 4)}`;
      }
      this.updateScheduleField({ field: "time", value: this.time });
      this.updateScheduleDate();
    },
  },
};
</script>

<style>
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

.icon-size {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.input-wrapper input {
  border: none;
  outline: none;
  font-size: 14px;
  flex-grow: 1;
  min-width: 0;
}

.input-wrapper input::placeholder {
  color: #999;
}

.date-picker {
  width: 100%;
}

.mx-datepicker {
  height: 100%;
  width: 100%;
  border: none;
}

.mx-datepicker .mx-input {
  box-shadow: none;
  font-size: 14px;
  flex-grow: 1;
  height: auto;
  padding: 0;
}
</style>
