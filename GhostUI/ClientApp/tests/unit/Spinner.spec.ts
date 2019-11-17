import { shallowMount } from '@vue/test-utils';
import Spinner from '@/components/Spinner.vue';

/**
 * Unit Tests For Component: Spinner.vue
 */
describe("Spinner.vue", () => {
  const spinnerParentElId = "#load-spinner";

  const shallowMountSpinner = (options?: any) => {
    return shallowMount(Spinner, {
      ...options
    });
  };

  it("should mount and render properly", async () => {
    const wrapper = shallowMountSpinner(Spinner);
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.find(spinnerParentElId).exists()).toBeTruthy();
  });

  it("v-show directive evaluates false AND element is not visible when 'isLoading' prop = false", async () => {
    const isLoading = false;
    const wrapper = shallowMount(Spinner, {
      propsData: {
        isLoading
      }
    });
    expect(wrapper.find(spinnerParentElId).isVisible()).toBe(isLoading);
  });

  it("v-show directive evaluates true AND element is visible when 'isLoading' prop = true", async () => {
    const isLoading = true;
    const wrapper = shallowMount(Spinner, {
      propsData: {
        isLoading
      }
    });
    expect(wrapper.find(spinnerParentElId).isVisible()).toBe(isLoading);
  });
});
