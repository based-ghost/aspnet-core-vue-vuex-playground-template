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

  it("'id', 'disabled', 'readOnly', and 'name' attributes are rendered on input element when those props are explicitly defined", async () => {
    const wrapper = mountVCheckbox({
      propsData: {
        id: 'checkbox',
        disabled: true,
        readOnly: true,
        name: 'checkbox',
      }
    });

    const inputEl = wrapper.find(inputElQuery).element;

    expect(inputEl.hasAttribute('id')).toBeTruthy();
    expect(inputEl.hasAttribute('name')).toBeTruthy();
    expect(inputEl.hasAttribute('disabled')).toBeTruthy();
    expect(inputEl.hasAttribute('readonly')).toBeTruthy();
  });

  it("emits the custom @checked event with new target value when the @change event is triggered", async () => {
    const wrapper = mountVCheckbox({
      propsData: {
        checked: false
      }
    });

    const inputNode = wrapper.find(inputElQuery);
    const inputEl = inputNode.element as HTMLInputElement;

    inputEl.value = "true";
    inputEl.checked = true;
    inputNode.trigger("change");

    expect(wrapper.emitted("checked")).toBeTruthy();
    expect(wrapper.emitted("checked")[0]).toEqual([true]);
  });

  it("A label element is rendered with the specified value when the 'label' prop is defined", async () => {
    const label = "Test Label";
    const wrapper = mountVCheckbox({
      propsData: {
        label
      }
    });

    expect(wrapper.html().includes(label)).toBeTruthy();
  });
});
