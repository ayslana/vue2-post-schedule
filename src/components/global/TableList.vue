<template>
  <div class="table-container">
    <table class="responsive-table">
      <thead>
        <tr>
          <th>Redes sociais</th>
          <th>Mídia</th>
          <th>Texto</th>
          <th>Data</th>
          <th>Ações</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in items"
          :key="index"
          :class="{ 'alternate-row': index % 2 === 0 }"
        >
          <td>
            <img :src="item.icon1" class="icon" />
            <img :src="item.icon2" class="icon" />
          </td>
          <td><img :src="item.media" class="media" /></td>
          <td>{{ item.text }}</td>
          <td>{{ item.date }}</td>
          <td>
            <a href="#">{{ item.actions }}</a>
          </td>
          <td>
            <span :class="['status-dot', statusDotClass(item.status)]"></span>
            <span :class="statusClass(item.status)">{{ item.status }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon1: "path/to/instagram.png",
          icon2: "path/to/linkedin.png",
          media: "path/to/media1.png",
          text: "Aqui vai o texto descritivo desse post",
          date: "09/09/2020 às 14:45h",
          actions: "Preview",
          status: "Agendado",
        },
        {
          icon1: "path/to/instagram.png",
          icon2: "path/to/linkedin.png",
          media: "path/to/media1.png",
          text: "Aqui vai o texto descritivo desse post",
          date: "09/09/2020 às 14:45h",
          actions: "Preview",
          status: "Agendado",
        },
      ],
    };
  },
  methods: {
    statusClass(status) {
      switch (status) {
        case "Agendado":
          return "status-scheduled";
        case "Postado":
          return "status-posted";
        case "Postado com ressalvas":
          return "status-posted-reserved";
        case "Não aprovado":
          return "status-not-approved";
        default:
          return "";
      }
    },
    statusDotClass(status) {
      switch (status) {
        case "Agendado":
          return "dot-scheduled";
        case "Postado":
        case "Postado com ressalvas":
          return "dot-posted";
        case "Não aprovado":
          return "dot-not-approved";
        default:
          return "";
      }
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
}

.responsive-table th,
.responsive-table td {
  border: 1px solid #ddd;
  padding: 20px;
  text-align: left;
}

.responsive-table th {
  background-color: #fff;
  color: black;
}

.responsive-table .icon {
  width: 24px;
  height: 24px;
  margin-right: 4px;
}

.responsive-table .media {
  width: 100px;
  height: auto;
}

.responsive-table a {
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

.dot-scheduled {
  background-color: green;
}

.dot-posted {
  background-color: yellow;
}

.dot-not-approved {
  background-color: red;
}

.status-scheduled {
  color: blue;
}

.status-posted {
  color: green;
}

.status-posted-reserved {
  color: orange;
}

.status-not-approved {
  color: red;
}

.alternate-row {
  background-color: #f2f2f2;
}

@media screen and (max-width: 768px) {
  .responsive-table thead {
    display: none;
  }

  .responsive-table tr {
    display: block;
    margin-bottom: 15px;
  }

  .responsive-table td {
    display: block;
    text-align: right;
    font-size: 13px;
    border: none;
    border-bottom: 1px solid #ddd;
    position: relative;
    padding-left: 50%;
  }

  .responsive-table td:before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 50%;
    padding-left: 15px;
    text-align: left;
  }

  .responsive-table td:last-child {
    border-bottom: 0;
  }
}
</style>
