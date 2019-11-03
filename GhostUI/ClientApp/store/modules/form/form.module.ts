import store from "../../../store";
import { IDropdownOption, IFormState } from "./types";
import { Module, VuexModule, Mutation, getModule } from "vuex-module-decorators";

const initialState = Object.freeze<IFormState>({
  count: 0,
  checkboxValue: false,
  selectedDropdownOption: {
    value: 1,
    label: 'Option 1',
  },
});

@Module({ dynamic: true, store, name: "form" })
class Form extends VuexModule implements IFormState {
  public count: number = initialState.count;
  public checkboxValue: boolean = initialState.checkboxValue;
  public selectedDropdownOption: IDropdownOption = initialState.selectedDropdownOption;

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
