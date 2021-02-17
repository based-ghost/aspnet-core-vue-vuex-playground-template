import Vue, { VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';

/**
 * React render function in Vue - using TypeScript (.tsx) - single file
 */
@Component
export default class VDropdown extends Vue {
  public $refs: {
    dropdownMenu: HTMLElement;
    dropdownButton: HTMLElement;
  };

  @Prop({ default: () => [] }) public readonly options: any[];
  @Prop({ default: false }) public readonly disabled: boolean;
  @Prop({ default: 'label' }) public readonly labelKey: string;
  @Prop({ default: '' }) public readonly placeholder: string;
  @Prop({ default: '' }) public readonly wrapperClass: string;
  @Prop({ default: '' }) public readonly buttonClass: string;
  @Prop({ default: '' }) public readonly selectedOptionLabel: string;

  public open: boolean = false;

  get isArrayOfObjects(): boolean {
    return this.options && this.options[0] === Object(this.options[0]);
  }

  public render(): VNode {
    return (
      <div class={['dropdown', this.wrapperClass, { 'is-active': this.open }]}>
        <button
          class={['button', this.buttonClass]}
          type='button'
          ref='dropdownButton'
          aria-haspopup='true'
          aria-controls='dropdown-menu'
          disabled={this.disabled}
          onKeydown={this.keyDownHandler}
          onClick={this.toggleDropdownMenu}
          v-click-outside={this.hideDropdownMenu}
        >
          <span>{this.selectedOptionLabel || this.placeholder}</span>
          <span class='caret-select' />
        </button>
        <div class='dropdown-menu' ref='dropdownMenu' role='menu'>
          <ul class='dropdown-content'>
            {this.options.map((option: any, index: number) => this.renderListOption(option, index))}
          </ul>
        </div>
      </div>
    );
  }

  public renderListOption(option: any, index: number): VNode {
    const optionLabel = this.getOptionLabelName(option);

    return (
      <li key={index}>
        <a
          role='button'
          class={['dropdown-item', { 'selected-option': optionLabel === this.selectedOptionLabel }]}
          onClick={() => this.updateSelectedOption(option)}
        >
          {optionLabel}
        </a>
      </li>
    );
  }

  public hideDropdownMenu(): void {
    this.open = false;
  }

  public toggleDropdownMenu(): void {
    this.open = !this.open;
  }

  public updateSelectedOption(option: any): void {
    this.$emit('select', option);
  }

  public getOptionLabelName(option: any): string {
    return this.isArrayOfObjects ? option[this.labelKey] || option[0] : option;
  }

  public keyDownHandler(e: KeyboardEvent): void {
    switch (e.key) {
      case 'ArrowUp':
      case 'ArrowDown':
        this.toggleDropdownMenu();
        e.preventDefault();
        break;
      case 'Escape':
        this.$refs.dropdownButton.focus();
        this.hideDropdownMenu();
        break;
      case 'Tab':
        this.hideDropdownMenu();
        break;
      default:
        break;
    }
  }
}
