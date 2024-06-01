import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import ImageUploadContainer from "@/components/ImageUploadContainer.vue";
import BaseContainer from "@/components/global/BaseContainer.vue";
import BaseButton from "@/components/global/BaseButton.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("ImageUploadContainer.vue", () => {
  let actions;
  let state;
  let store;

  beforeEach(() => {
    state = {
      schedule: {
        media: "",
      },
    };

    actions = {
      updateScheduleField: jest.fn(),
    };

    store = new Vuex.Store({
      state,
      actions,
    });
  });

  it("renders the component correctly", () => {
    const wrapper = shallowMount(ImageUploadContainer, {
      store,
      localVue,
      stubs: {
        BaseContainer,
        BaseButton,
      },
    });

    expect(wrapper.findComponent(BaseContainer).exists()).toBe(true);
    expect(wrapper.findComponent(BaseButton).exists()).toBe(true);
    expect(wrapper.find(".upload-container").exists()).toBe(true);
  });

  it("handles file upload click", () => {
    const wrapper = shallowMount(ImageUploadContainer, {
      store,
      localVue,
      stubs: {
        BaseContainer,
        BaseButton,
      },
    });

    const fileInput = wrapper.find('input[type="file"]');
    const fileInputSpy = jest.spyOn(fileInput.element, "click");

    wrapper.vm.handleUploadClick();

    expect(fileInputSpy).toHaveBeenCalled();
  });

  it("handles drag leave event", async () => {
    const wrapper = shallowMount(ImageUploadContainer, {
      store,
      localVue,
      stubs: {
        BaseContainer,
        BaseButton,
      },
    });

    const uploadContainer = wrapper.find(".upload-container");
    await uploadContainer.trigger("dragleave");

    expect(uploadContainer.classes()).not.toContain("dragging");
  });
});
