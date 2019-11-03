import 'jest';
import { VCheckbox, VDropdown } from '../components';
import vClickOutside from '../plugins/vue-click-outside';
import { shallowMount, createLocalVue } from '@vue/test-utils';

/**
 * Create local Vue instance to install global plugins/mixins to (avoids pulluting the global Vue constructor)
 */
const localVue = createLocalVue();
localVue.use(vClickOutside);

/**
 * Dropdown test data
 */
export const dropdownTestData = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
    { value: 4, label: 'Option 4' },
    { value: 5, label: 'Option 5' }
];

/**
 * VCheckbox.render.tsx unit tests
 */
describe('VCheckbox.render.tsx', () => {
    const mountVCheckbox = (options: any = null) => {
        return shallowMount(VCheckbox, {
            ...options
        });
    };

    it('should mount and render properly', () => {
        const wrapper = mountVCheckbox();
        expect(wrapper.isVueInstance()).toBe(true);
        expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true);
    });

    it('renders CSS properties when passed (props.wrapperClass, props.controlClass)', () => {
        const className = 'is-medium';
        const wrapper = mountVCheckbox({
            propsData: {
                wrapperClass: className,
                controlClass: className
            }
        });

        expect(wrapper.classes()).toContain(className);
        expect(wrapper.find(`p.${className}`).exists()).toBe(true);
    });

    it('reflects the disabled attribute on the input element when props.disabled is passed as true', () => {
        const wrapper = mountVCheckbox({
            propsData: {
                disabled: true
            }
        });

        expect(wrapper.find('input[type="checkbox"]').html()).toMatch('disabled');
    });

    it('emits the custom @checked event with new target value when the @change event is triggered', () => {
        const wrapper = mountVCheckbox({
            propsData: {
                checked: false
            }
        });

        const inputNode = wrapper.find('input[type="checkbox"]');
        (inputNode.element as HTMLInputElement).value = 'true';
        (inputNode.element as HTMLInputElement).checked = true;
        inputNode.trigger('change');

        expect(wrapper.emitted('checked')).toBeTruthy();
        expect(wrapper.emitted('checked')[0]).toEqual([true]);
    });

    it('trailing label <span> is present when props.trailingLabel is passed with a truthy string value', () => {
        const label = 'Test Label';
        const labelSpanEl = `<span>${label}</span>`;

        const wrapper = mountVCheckbox({
            propsData: {
                trailingLabel: label
            }
        });

        expect(wrapper.html()).toMatch(labelSpanEl);
    });
});

/**
 * VDropdown.render.tsx unit tests
 */
describe('VDropdown.render.tsx', () => {
    const mountVDropdown = (options: any = null) => {
        const localVue = createLocalVue();
        localVue.use(vClickOutside);
        return shallowMount(VDropdown, {
            localVue,
            ...options
        });
    };

    it('should mount and render properly', () => {
        const wrapper = mountVDropdown({
            propsData: {
                options: dropdownTestData
            }
        });

        expect(wrapper.isVueInstance()).toBe(true);
        expect(wrapper.find('.dropdown').exists()).toBe(true);
    });

    it('custom ref attributes exist and are functional on component (dropdownButton, dropdownMenu)', () => {
        const wrapper = mountVDropdown({
            propsData: {
                options: dropdownTestData
            }
        });

        expect(wrapper.find({ ref: 'dropdownButton' }).exists()).toBe(true);
        expect(wrapper.find({ ref: 'dropdownMenu' }).exists()).toBe(true);
    });

    it('renders CSS properties when passed (props.wrapperClass, props.buttonClass)', () => {
        const className = 'is-medium';
        const wrapper = mountVDropdown({
            propsData: {
                options: dropdownTestData,
                wrapperClass: className,
                buttonClass: className
            }
        });

        expect(wrapper.classes()).toContain(className);
        expect(wrapper.find(`button.${className}`).exists()).toBe(true);
    });

    it('detects if individual options are singleton or object, and detects changes to the options property', () => {
        const wrapper = mountVDropdown({
            propsData: {
                options: dropdownTestData
            }
        });

        // Standard test data should return true since each option is of type { value: 1, label: 'Option 1' }
        expect(wrapper.vm.isArrayOfObjects).toEqual(true);

        // Update options to be array of strings, so each option is of type 'test string' (check should then return false)
        wrapper.setProps({ options: ['string', 'array'] });
        expect(wrapper.vm.isArrayOfObjects).toEqual(false);
    });

    it('onClick and onKeydown events on button control correctly toggle $data.open; if $data.open === true, the options menu should be visible in DOM', () => {
        const wrapper = mountVDropdown({
            propsData: {
                options: dropdownTestData
            }
        });

        wrapper.setData({ open: false });

        // When $data.open === true, the component adds 'is-active' class to root component element
        const isActiveClass = 'is-active';
        const buttonNode = wrapper.find({ ref: 'dropdownButton' });

        // $data.open should default to false (menu not visible)
        expect(wrapper.vm.open).toEqual(false);
        expect(wrapper.classes(isActiveClass)).toBe(false);

        // Simulate click event on dropdown button control
        buttonNode.trigger('click');

        // $data.open should reflect true after initial toggle and menu should then be visible
        expect(wrapper.vm.open).toEqual(true);
        expect(wrapper.classes()).toContain(isActiveClass);

        // Simulate onKeyDown event on dropdown button control (keyCode === 38 (up))
        buttonNode.trigger('keydown.up');

        // $data.open should get toggled and revert back to false
        expect(wrapper.vm.open).toEqual(false);
        expect(wrapper.classes(isActiveClass)).toBe(false);
    });
});