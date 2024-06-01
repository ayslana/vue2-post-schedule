import { shallowMount } from "@vue/test-utils";
import BaseButton from "@/components/global/BaseButton.vue";

describe("BaseButton.vue", () => {
  it("renders button with correct label", () => {
    const label = "Click Me";
    const wrapper = shallowMount(BaseButton, {
      propsData: { label },
    });
    expect(wrapper.text()).toMatch(label);
  });

  it("emits click event when button is clicked", async () => {
    const wrapper = shallowMount(BaseButton);
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted().click).toBeTruthy();
  });

  it("applies correct primary class based on prop", () => {
    const wrapper = shallowMount(BaseButton, {
      propsData: { primary: true },
    });
    expect(wrapper.classes()).toContain("btn-primary");
  });

  it("applies correct secondary class based on prop", () => {
    const wrapper = shallowMount(BaseButton, {
      propsData: { secondary: true },
    });
    expect(wrapper.classes()).toContain("btn-secondary");
  });

  it("applies correct tertiary class based on prop", () => {
    const wrapper = shallowMount(BaseButton, {
      propsData: { tertiary: true },
    });
    expect(wrapper.classes()).toContain("btn-tertiary");
  });

  it("applies correct text class based on prop", () => {
    const wrapper = shallowMount(BaseButton, {
      propsData: { text: true },
    });
    expect(wrapper.classes()).toContain("btn-text");
  });

  it("button is disabled when isDisabled prop is true", () => {
    const wrapper = shallowMount(BaseButton, {
      propsData: { isDisabled: true },
    });
    expect(wrapper.find("button").attributes("disabled")).toBe("disabled");
  });
});
