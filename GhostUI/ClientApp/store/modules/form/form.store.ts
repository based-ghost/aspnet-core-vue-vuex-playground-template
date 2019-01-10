import { FormActions, FormGetters, FormMutations, FormState } from './types';
import { DefineGetters, DefineMutations, DefineActions } from 'vuex-type-helper';

const initialState = () => {
    return {
        count: 0,
        checkboxValue: false,
        selectedDropdownOption: {
            value: 1,
            label: 'Option 1'
        }
    } as FormState;
};

const getters: DefineGetters<FormGetters, FormState> = {
    isChecked: (state) => !!state.checkboxValue,
    currentCount: (state) => state.count || 0,
    activeDropdownOption: (state) => state.selectedDropdownOption
};

const actions: DefineActions<FormActions, FormState, FormMutations, FormGetters> = {
    clearFormState: ({ commit }) => {
        commit('CLEAR_FORM_STATE', {});
    }
};

const mutations: DefineMutations<FormMutations, FormState> = {
    UPDATE_COUNT: (state, { value }) => {
        state.count = value;
    },
    UPDATE_CHECKBOX_VALUE: (state, { checked }) => {
        state.checkboxValue = checked;
    },
    UPDATE_SELECTED_OPTION: (state, { option }) => {
        state.selectedDropdownOption = option;
    },
    CLEAR_FORM_STATE: (state) => {
        Object.assign(state, initialState());
    }
};

const formModule = {
    state: initialState(),
    getters,
    actions,
    mutations
};

export default formModule;