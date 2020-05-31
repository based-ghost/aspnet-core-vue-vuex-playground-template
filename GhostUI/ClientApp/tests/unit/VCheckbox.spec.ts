import { mount, ThisTypedShallowMountOptions } from '@vue/test-utils';
import VCheckbox from '@/components/VCheckbox.render';

/**
 * Unit Tests For Component: VCheckbox.render.tsx
 */
describe("VCheckbox.render.tsx", () => {
  const inputElQuery = 'input[type="checkbox"]';

  const mountVCheckbox = (
    options?: ThisTypedShallowMountOptions<VCheckbox>
  ) => {
    return mount(VCheckbox, {
      ...options,
    });
  };

  it("should mount and render properly", async () => {
    const wrapper = mountVCheckbox();
    expect(wrapper).toBeTruthy();
    expect(wrapper.find(inputElQuery).exists()).toBeTruthy();
  });

  it("'id', 'disabled', 'readonly', and 'name' attributes are rendered on input element when those props are explicitly defined", async () => {
    const propsData = {
      id: 'checkbox',
      disabled: true,
      readOnly: true,
      name: 'checkbox'
    };

    const wrapper = mountVCheckbox({ propsData });
    const inputEl = wrapper.find(inputElQuery).element;

    Object.keys(propsData).forEach((key) => {
      const attr = key.toLowerCase();
      expect(inputEl.hasAttribute(attr)).toBeTruthy();
    });
  });

  it("emits the custom @checked event with new target value when the @change event is triggered", async () => {
    const wrapper = mountVCheckbox({
      propsData: {
        checked: false
      }
    });

    const inputNode = wrapper.find(inputElQuery);
    const inputEl = inputNode.element as HTMLInputElement;

    inputEl.checked = true;
    inputEl.value = inputEl.checked.toString();

    inputNode.trigger("change");

    expect(wrapper.emitted().checked).toBeTruthy();
  });

  it("A label element is rendered with the specified value when the 'label' prop is defined", async () => {
    const label = "Test Label";
    const wrapper = mountVCheckbox({
      propsData: {
        label
      }
    });

    expect(wrapper.find("label").text()).toMatch(label);
  });
});
