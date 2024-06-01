import { shallowMount } from "@vue/test-utils";
import BaseModal from "@/components/global/BaseModal.vue";
import BaseButton from "@/components/global/BaseButton.vue";

describe("BaseModal.vue", () => {
  it("renders modal when isVisible is true", () => {
    const wrapper = shallowMount(BaseModal, {
      propsData: { isVisible: true },
    });
    expect(wrapper.find(".modal-overlay").exists()).toBe(true);
  });

  it("does not render modal when isVisible is false", () => {
    const wrapper = shallowMount(BaseModal, {
      propsData: { isVisible: false },
    });
    expect(wrapper.find(".modal-overlay").exists()).toBe(false);
  });

  it("displays the correct label", () => {
    const label = "Test Modal Label";
    const wrapper = shallowMount(BaseModal, {
      propsData: { isVisible: true, label },
    });
    expect(wrapper.find("h3").text()).toBe(label);
  });

  it("emits handleConfirmation and close events when OK button is clicked", async () => {
    const wrapper = shallowMount(BaseModal, {
      propsData: { isVisible: true },
    });
    const button = wrapper.findComponent(BaseButton);
    await button.vm.$emit("click");
    expect(wrapper.emitted().handleConfirmation).toBeTruthy();
    expect(wrapper.emitted().close).toBeTruthy();
  });
});
