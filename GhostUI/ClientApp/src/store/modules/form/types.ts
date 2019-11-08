export type IDropdownOption = {
  readonly value: number;
  readonly label: string;
};

export type IFormState = {
  count: number;
  checkboxValue: boolean;
  selectedDropdownOption: IDropdownOption;
};
