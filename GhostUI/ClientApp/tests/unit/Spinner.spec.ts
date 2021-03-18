import '@testing-library/jest-dom';
import { shallowMount, ThisTypedShallowMountOptions } from '@vue/test-utils';
import Spinner from '@/components/Spinner.vue';

/**
 * Unit Tests For Component: Spinner.vue
 */
describe("Spinner.vue", () => {
  const spinnerParentElId = "#load-spinner";

  const shallowMountSpinner = (
    options?: ThisTypedShallowMountOptions<Spinner>
  ) => {
    return shallowMount(Spinner, {
      ...options
    });
  };

  it("should mount and render properly", async () => {
    const wrapper = shallowMountSpinner();
    expect(wrapper).toBeTruthy();
    expect(wrapper.find(spinnerParentElId).exists()).toBe(true);
  });

  it("v-show directive evaluates false AND element is not visible when 'isLoading' prop = false", async () => {
    const wrapper = shallowMountSpinner({
      propsData: {
        isLoading: false
      }
    });

    const spinnerParentEl = wrapper.find(spinnerParentElId).element;
    expect(spinnerParentEl).not.toBeVisible();
  });

  it("v-show directive evaluates true AND element is visible when 'isLoading' prop = true", async () => {
    const wrapper = shallowMountSpinner({
      propsData: {
        isLoading: true
      }
    });

    const spinnerParentEl = wrapper.find(spinnerParentElId).element;
    expect(spinnerParentEl).toBeVisible();
  });
});
