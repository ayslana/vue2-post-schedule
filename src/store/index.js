import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

const initialState = {
  id: 0,
  color: "#2F80ED",
  actions: "Preview",
  date: "",
  icons: [],
  social_network_key: [],
  media: "",
  text: "",
  time: "",
  name: "Agendado",
  date_formatted: "",
};

export default new Vuex.Store({
  state: {
    schedules: [],
    socialNetworks: [],
    schedule: { ...initialState },
    schedulesLoaded: false,
  },
  getters: {
    getSchedules: (state) => state.schedules,
    getSocialNetworks: (state) => state.socialNetworks,
    getSchedule: (state) => state.schedule,
    areSchedulesLoaded: (state) => state.schedulesLoaded,
  },
  mutations: {
    setSchedules(state, schedules) {
      state.schedules = schedules;
    },
    setSocialNetworks(state, socialNetworks) {
      state.socialNetworks = socialNetworks;
    },
    setSchedule(state, schedule) {
      state.schedule = schedule;
    },
    addSchedule(state, schedule) {
      state.schedules.push(schedule);
    },
    setScheduleField(state, { field, value }) {
      Vue.set(state.schedule, field, value);
    },
    setScheduleIconsAndKeys(state, { icons, social_network_key }) {
      state.schedule.icons = icons;
      state.schedule.social_network_key = social_network_key;
    },
    clearSchedule(state) {
      state.schedule = { ...initialState };
    },
    setSchedulesLoaded(state, loaded) {
      state.schedulesLoaded = loaded;
    },
  },
  actions: {
    async fetchSchedulesAndStatuses({ commit, state }) {
      if (state.schedulesLoaded) return;

      try {
        const [schedulesResponse, statusesResponse] = await Promise.all([
          axios.get("/schedules.json"),
          axios.get("/schedules-status.json"),
        ]);

        const schedules = schedulesResponse.data.data;
        const statuses = statusesResponse.data.data;

        const combinedSchedules = schedules.map((schedule) => {
          const status = statuses.find(
            (status) => status.id === schedule.status_key
          );
          return {
            ...schedule,
            status: status ? status.name : null,
            color: status ? status.color : null,
            name: status ? status.name : null,
          };
        });

        commit("setSchedules", combinedSchedules);
        commit("setSchedulesLoaded", true);
      } catch (error) {
        console.error("Error fetching schedules or schedule statuses:", error);
      }
    },
    async fetchSocialNetworks({ commit }) {
      try {
        const response = await axios.get("/social-networks.json");
        commit("setSocialNetworks", response.data.data);
      } catch (error) {
        console.error("Error fetching social networks:", error);
      }
    },
    async addSchedule({ commit, state }) {
      try {
        const newId = state.schedules.length
          ? state.schedules[state.schedules.length - 1].id + 1
          : 1;

        const newSchedule = {
          ...state.schedule,
          id: newId,
        };

        commit("addSchedule", newSchedule);
        commit("clearSchedule");
      } catch (error) {
        console.error("Error adding new schedule:", error);
      }
    },
    updateScheduleField({ commit }, payload) {
      commit("setScheduleField", payload);
    },
    updateScheduleIconsAndKeys({ commit }, payload) {
      commit("setScheduleIconsAndKeys", payload);
    },
    clearSchedule({ commit }) {
      commit("clearSchedule");
    },
  },
  plugins: [vuexLocal.plugin],
});
