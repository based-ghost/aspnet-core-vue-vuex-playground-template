import store from '../../store';
import { Module, VuexModule, Mutation, getModule } from 'vuex-module-decorators'

export interface IDropdownOption {
    value: number;
    label: string;
}

export interface IFormState {
    count: number;
    checkboxValue: boolean;
    selectedDropdownOption: {
        value: number;
        label: string;
    };
}

@Module({ dynamic: true, store, name: 'form' })
class Form extends VuexModule implements IFormState {
    public count: number = 0;
    public checkboxValue: boolean = false;

    public selectedDropdownOption: IDropdownOption = {
        value: 1,
        label: 'Option 1'
    };

    @Mutation
    public UPDATE_COUNT(value: number): void {
        this.count = value;
    }

    @Mutation
    public UPDATE_CHECKBOX_VALUE(value: boolean): void {
        this.checkboxValue = value;
    }

    @Mutation
    public UPDATE_SELECTED_OPTION(option: IDropdownOption): void {
        this.selectedDropdownOption = option;
    }
}

export const FormModule = getModule(Form);