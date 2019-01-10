export interface DropdownOption {
    value: number;
    label: string;
}

export interface FormState {
    count: number;
    checkboxValue: boolean;
    selectedDropdownOption: DropdownOption;
}

export interface FormGetters {
    isChecked: boolean,
    currentCount: number,
    activeDropdownOption: DropdownOption
}

export interface FormActions {
    clearFormState: {}
}

export interface FormMutations {
    CLEAR_FORM_STATE: {},
    UPDATE_COUNT: {
        value: number
    },
    UPDATE_CHECKBOX_VALUE: {
        checked: boolean
    },
    UPDATE_SELECTED_OPTION: {
        option: DropdownOption
    }
}