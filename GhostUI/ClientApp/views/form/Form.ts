import { Component, Vue } from 'vue-property-decorator';
import { DropdownOption, FormMutations } from '../../store/modules/form/types';
import VCheckbox from '../../components/controls/checkbox/VCheckbox.render';
import VDropdown from '../../components/controls/dropdown/VDropdown.render';
import { DROPDOWN_TEST_DATA } from '../../config/constants';
import { Committer } from 'vuex-type-helper';

@Component({
    components: {
        VCheckbox,
        VDropdown
    }
})
export default class Form extends Vue {
    readonly dropdownOptionsList: DropdownOption[] = DROPDOWN_TEST_DATA;

    // Vue can directly mutate vuex state stores, unlike react/redux pattern. 
    // Set them up as getter / setters and map in HTML templates
    get count(): number {
        return this.$store.state.formStore.count;
    }
    set count(value: number) {
        this.$store.commit<Committer<FormMutations>>({
            type: 'UPDATE_COUNT',
            value: value
        });
    }

    get checkboxValue(): boolean {
        return this.$store.state.formStore.checkboxValue;
    }
    set checkboxValue(value: boolean) {
        this.$store.commit<Committer<FormMutations>>({
            type: 'UPDATE_CHECKBOX_VALUE',
            checked: value
        });
    }

    get selectedDropdownOption(): DropdownOption {
        return this.$store.state.formStore.selectedDropdownOption;
    }
    set selectedDropdownOption(value: DropdownOption) {
        this.$store.commit<Committer<FormMutations>>({
            type: 'UPDATE_SELECTED_OPTION',
            option: value
        });
    }
}