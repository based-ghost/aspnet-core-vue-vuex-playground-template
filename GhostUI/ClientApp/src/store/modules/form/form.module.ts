import store from '@/store';
import { IDropdownOption, IFormState } from './types';
import { DROPDOWN_TEST_DATA } from '@/config/constants';
import { Module, VuexModule, Mutation, getModule } from 'vuex-module-decorators';

const initialState = Object.freeze<IFormState>({
  count: 0,
  checkboxValue: false,
  selectedDropdownOption: DROPDOWN_TEST_DATA[0]
});

@Module({
  store,
  name: 'form',
  dynamic: true
})
class Form extends VuexModule implements IFormState {
  public count: number = initialState.count;
  public checkboxValue: boolean = initialState.checkboxValue;
  public selectedDropdownOption: IDropdownOption = initialState.selectedDropdownOption;

  @Mutation
  public UPDATE_COUNT(count: number): void {
    this.count = count;
  }

  @Mutation
  public UPDATE_CHECKBOX_VALUE(checkboxValue: boolean): void {
    this.checkboxValue = checkboxValue;
  }

  @Mutation
  public UPDATE_SELECTED_OPTION(option: IDropdownOption): void {
    this.selectedDropdownOption = option;
  }
}

export const FormModule = getModule(Form);
