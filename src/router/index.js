import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/agendamento",
    name: "Agendamento",
    component: () => import("../views/ScheduleView.vue"),
  },
  {
    path: "/listagem-agendamento",
    name: "Listagem de Agendamento",
    component: () => import("../views/ScheduleListView.vue"),
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
