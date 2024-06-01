import { shallowMount } from "@vue/test-utils";
import BaseContainer from "@/components/global/BaseContainer.vue";

describe("BaseContainer.vue", () => {
  it("renders container with correct title", () => {
    const title = "Test Title";
    const wrapper = shallowMount(BaseContainer, {
      propsData: { title },
    });
    expect(wrapper.find("h4").text()).toBe(title);
  });

  it("renders default slot content", () => {
    const slotContent = "<p>Slot Content</p>";
    const wrapper = shallowMount(BaseContainer, {
      propsData: { title: "Test Title" },
      slots: {
        default: slotContent,
      },
    });
    expect(wrapper.find(".container-content").html()).toContain(slotContent);
  });

  it("applies correct class for full size", () => {
    const wrapper = shallowMount(BaseContainer, {
      propsData: { title: "Test Title", size: "full" },
    });
    expect(wrapper.classes()).toContain("container-full");
  });

  it("applies correct class for half size", () => {
    const wrapper = shallowMount(BaseContainer, {
      propsData: { title: "Test Title", size: "half" },
    });
    expect(wrapper.classes()).toContain("container-half");
  });

  it("applies correct class for quarter size", () => {
    const wrapper = shallowMount(BaseContainer, {
      propsData: { title: "Test Title", size: "quarter" },
    });
    expect(wrapper.classes()).toContain("container-quarter");
  });

  it("applies default class for size when no size is provided", () => {
    const wrapper = shallowMount(BaseContainer, {
      propsData: { title: "Test Title" },
    });
    expect(wrapper.classes()).toContain("container-full");
  });
});
