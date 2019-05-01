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
