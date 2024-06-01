import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import ScheduleFooter from "@/components/ScheduleFooter.vue";
import BaseButton from "@/components/global/BaseButton.vue";
import BaseModal from "@/components/global/BaseModal.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("ScheduleFooter.vue", () => {
  let actions;
  let state;
  let store;

  beforeEach(() => {
    state = {
      schedule: {
        text: "",
        icons: [],
        time: "",
        date: "",
        media: "",
      },
    };

    actions = {
      clearSchedule: jest.fn(),
      addSchedule: jest.fn(),
    };

    store = new Vuex.Store({
      state,
      actions,
    });
  });

  it("renders buttons and modal correctly", () => {
    const wrapper = shallowMount(ScheduleFooter, {
      store,
      localVue,
      stubs: {
        BaseButton,
        BaseModal,
      },
    });

    expect(wrapper.findAllComponents(BaseButton).length).toBe(3);
    expect(wrapper.findComponent(BaseModal).exists()).toBe(true);
  });

  it("displays modal with correct label when confirmCancel is called", async () => {
    const wrapper = shallowMount(ScheduleFooter, {
      store,
      localVue,
      stubs: {
        BaseButton,
        BaseModal,
      },
    });

    wrapper.vm.confirmCancel();
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.showModal).toBe(true);
    expect(wrapper.vm.label).toBe(
      "Você tem certeza que deseja cancelar o agendamento? Todas as suas informações serão perdidas."
    );
  });

  it("displays modal with correct label when confirmSaveDraft is called with filled fields", async () => {
    state.schedule = {
      text: "Test",
      icons: ["icon1"],
      time: "12:00",
      date: "2024-05-31",
      media: "media.jpg",
    };

    const wrapper = shallowMount(ScheduleFooter, {
      store,
      localVue,
      stubs: {
        BaseButton,
        BaseModal,
      },
    });

    wrapper.vm.confirmSaveDraft();
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.showModal).toBe(true);
    expect(wrapper.vm.label).toBe("Rascunho salvo com sucesso!");
  });

  it("displays modal with correct label when confirmSaveDraft is called with empty fields", async () => {
    const wrapper = shallowMount(ScheduleFooter, {
      store,
      localVue,
      stubs: {
        BaseButton,
        BaseModal,
      },
    });

    wrapper.vm.confirmSaveDraft();
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.showModal).toBe(true);
    expect(wrapper.vm.label).toBe(
      "Por favor, preencha pelo menos um campo antes de salvar o rascunho."
    );
  });

  it("displays modal with correct label when confirmSchedule is called with filled fields", async () => {
    state.schedule = {
      text: "Test",
      icons: ["icon1"],
      time: "12:00",
      date: "2024-05-31",
      media: "media.jpg",
    };

    const wrapper = shallowMount(ScheduleFooter, {
      store,
      localVue,
      stubs: {
        BaseButton,
        BaseModal,
      },
    });

    wrapper.vm.confirmSchedule();
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.showModal).toBe(true);
    expect(wrapper.vm.label).toBe("Agendamento feito com sucesso!");
  });

  it("displays modal with correct label when confirmSchedule is called with empty fields", async () => {
    const wrapper = shallowMount(ScheduleFooter, {
      store,
      localVue,
      stubs: {
        BaseButton,
        BaseModal,
      },
    });

    wrapper.vm.confirmSchedule();
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.showModal).toBe(true);
    expect(wrapper.vm.label).toBe(
      "Por favor, preencha todos os campos obrigatórios antes de agendar."
    );
  });
});
