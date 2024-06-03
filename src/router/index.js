import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ScheduleView from "@/views/ScheduleView.vue";
import ScheduleListView from "@/views/ScheduleListView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/agendamento",
    name: "Agendamento",
    component: ScheduleView,
  },
  {
    path: "/listagem-agendamento",
    name: "Listagem de Agendamento",
    component: ScheduleListView,
  },
  {
    path: "*",
    redirect: { name: "Home" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
