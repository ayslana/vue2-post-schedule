<template>
  <div class="table-container">
    <table class="responsive-table">
      <thead>
        <tr>
          <th
            v-for="(title, index) in tableHeaders"
            :key="index"
            @click="sortBy(index)"
          >
            {{ title }}
            <span v-if="sortedColumn === index">
              {{ sortOrder === "asc" ? "↑" : "↓" }}
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in sortedSchedules"
          :key="index"
          :class="{ 'alternate-row': index % 2 !== 0 }"
        >
          <td>
            <div
              v-for="(icon, iconIndex) in item.icons"
              :key="iconIndex"
              :class="['icon-container', getIconClass(icon)]"
            >
              <img :src="getIconPath(icon)" class="icon" />
            </div>
          </td>
          <td>
            <img v-bind:src="getMediaPath(item.id, item.media)" class="media" />
          </td>
          <td>{{ item.text }}</td>
          <td>{{ item.date }}</td>
          <td>
            <a href="#">{{ item.actions }}</a>
          </td>
          <td>
            <span class="status-dot" :style="{ backgroundColor: item.color }" />
            <span>{{ item.name }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TableContainer",
  data() {
    return {
      tableHeaders: [
        "Redes sociais",
        "Mídia",
        "Texto",
        "Data",
        "Ações",
        "Status",
      ],
      sortedColumn: null,
      sortOrder: "asc",
    };
  },
  computed: {
    ...mapGetters(["getSchedules"]),
    schedules() {
      return this.getSchedules;
    },
    sortedSchedules() {
      if (this.sortedColumn === null) return this.schedules;

      return [...this.schedules].sort((a, b) => {
        let result = 0;
        if (this.sortedColumn === 3) {
          const [dateA, timeA] = a.date.split(" às ");
          const [dayA, monthA, yearA] = dateA.split("/").map(Number);
          const [hoursA, minutesA] = timeA.split(":").map(Number);
          const dateTimeA = new Date(yearA, monthA - 1, dayA, hoursA, minutesA);

          const [dateB, timeB] = b.date.split(" às ");
          const [dayB, monthB, yearB] = dateB.split("/").map(Number);
          const [hoursB, minutesB] = timeB.split(":").map(Number);
          const dateTimeB = new Date(yearB, monthB - 1, dayB, hoursB, minutesB);

          result = dateTimeA - dateTimeB;
        } else if (this.sortedColumn === 5) {
          result = a.name.localeCompare(b.name);
        }

        return this.sortOrder === "asc" ? result : -result;
      });
    },
  },
  methods: {
    sortBy(index) {
      if (this.sortedColumn === index) {
        this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
      } else {
        this.sortedColumn = index;
        this.sortOrder = "asc";
      }
    },
    getIconClass(icon) {
      if (icon.includes("instagram")) {
        return "instagram-icon";
      } else if (icon.includes("linkedin")) {
        return "linkedin-icon";
      }
      return "";
    },
    getIconPath(icon) {
      return require(`@/assets/svgs/${icon}`);
    },
    getMediaPath(id, media) {
      const baseIds = [1, 2];
      return baseIds.includes(id) ? require(`@/assets/images/${media}`) : media;
    },
  },
};
</script>

<style scoped>
.table-container {
  width: 100%;
  overflow-x: auto;
}

.responsive-table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}

.responsive-table th,
.responsive-table td {
  border: 1px solid #ddd;
  padding: 20px;
  text-align: center;
  white-space: nowrap;
}

.responsive-table th {
  background-color: #fff;
  color: black;
}

.responsive-table th:hover {
  cursor: pointer;
}

.icon-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
}

.icon {
  width: 24px;
  height: 24px;
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(93deg)
    brightness(107%) contrast(101%);
}

.instagram-icon {
  background-color: #d60f86;
}

.linkedin-icon {
  background-color: #3a70da;
}

.media {
  width: 50px;
  height: auto;
}

a {
  color: blue;
  text-decoration: underline;
}

.status-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
}

.alternate-row {
  background-color: #f9f9f9;
}

@media screen and (max-width: 768px) {
  .responsive-table th,
  .responsive-table td {
    padding: 10px;
    font-size: 14px;
  }
}
</style>
