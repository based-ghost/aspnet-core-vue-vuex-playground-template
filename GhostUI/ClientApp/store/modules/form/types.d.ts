export interface IDropdownOption {
  readonly value: number;
  readonly label: string;
}

export interface IFormState {
  readonly count: number;
  readonly checkboxValue: boolean;
  readonly selectedDropdownOption: IDropdownOption;
}
