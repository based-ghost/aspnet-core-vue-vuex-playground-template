import 'jest';
import '../prototype';
import { mount, createLocalVue } from '@vue/test-utils';
import vClickOutside from '../plugins/vue-click-outside';
import VCheckbox from '../components/controls/checkbox/VCheckbox.render';
import VDropdown from '../components/controls/dropdown/VDropdown.render';

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
    it('reflects visual changes to component via updates to reactive properties (wrapperClass, controlClass)', () => {
        const className = 'is-medium';
        const wrapper = mount(VCheckbox, {
            propsData: {
                wrapperClass: className,
                controlClass: className
            }
        });

        expect(wrapper.element.classList.contains(className)).toBeTruthy();
        expect(wrapper.element.querySelector(`p.${className}`)).toBeTruthy();
    });

    it('emits the custom @check event with new target value when the @change event is triggered', () => {
        const wrapper = mount(VCheckbox, {
            propsData: {
                checked: false
            }
        });

        const inputNode = wrapper.find('input');

        (<HTMLInputElement>inputNode.element).value = 'true';
        (<HTMLInputElement>inputNode.element).checked = true;

        inputNode.trigger('change');

        expect(wrapper.emitted('checked')).toBeTruthy();
        expect(wrapper.emitted('checked')[0]).toEqual([true]);
    });
});

/**
 * VDropdown.render.tsx unit tests
 */
describe('VDropdown.render.tsx', () => {
    it('allows DOM manipulation via the custom ref attributes (dropdownButton, dropdownMenu)', () => {
        const objectArray_OptionsList = dropdownTestData;
        const wrapper = mount(VDropdown, {
            localVue,
            propsData: {
                options: objectArray_OptionsList
            }
        });

        const buttonNode = wrapper.find({ ref: 'dropdownButton' });
        const menuNode = wrapper.find({ ref: 'dropdownMenu' });

        expect(buttonNode).toBeTruthy();
        expect(menuNode).toBeTruthy();
    });


    it('reflects visual changes to component via updates to reactive properties (wrapperClass, buttonClass)', () => {
        const className = 'is-medium';
        const objectArray_OptionsList = dropdownTestData;

        const wrapper = mount(VDropdown, {
            localVue,
            propsData: {
                options: objectArray_OptionsList,
                wrapperClass: className,
                buttonClass: className
            }
        });

        expect(wrapper.element.classList.contains(className)).toBeTruthy();
        expect(wrapper.element.querySelector(`button.${className}`)).toBeTruthy();
    });

    it('detects if individual options are singleton or object, and detects changes to the options property', () => {
        const objectArray_OptionsList = dropdownTestData;
        const strArray_OptionsList = ['string', 'array'];

        const wrapper = mount(VDropdown, {
            localVue,
            propsData: {
                options: objectArray_OptionsList,
            }
        });

        expect((<any>wrapper.vm).isArrayOfObjects).toEqual(true);
        wrapper.setProps({ options: strArray_OptionsList });
        expect((<any>wrapper.vm).isArrayOfObjects).toEqual(false);
    });
});