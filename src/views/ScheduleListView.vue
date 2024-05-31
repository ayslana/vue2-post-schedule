<template>
  <div>
    <p class="left-align">Listagem de agendamento</p>
    <TableList />
  </div>
</template>

<script>
import TableList from "@/components/global/TableList.vue";

export default {
  name: "ScheduleListView",
  components: {
    TableList,
  },
};
</script>

<style>
.left-align {
  text-align: left;
  font-weight: bold;
  margin-bottom: 50px;
}
</style>
