export type IDropdownOption = Readonly<{
  value: number;
  label: string;
}>;

export type IFormState = {
  count: number;
  checkboxValue: boolean;
  selectedDropdownOption: IDropdownOption;
};
