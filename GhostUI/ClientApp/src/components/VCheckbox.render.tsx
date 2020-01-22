import Vue, { VNode } from 'vue';
import styled from 'vue-styled-components';
import { Component, Prop } from 'vue-property-decorator';

// ============================================================================
// React CSS-in-JS using its popular styled-components library
// ...(creators have made one for Vue.js)
// ============================================================================

const BORDER_COLOR = '#dbdbdb';
const CHECK_MARK_COLOR = '#09d3ac';
const BORDER_CHECKED_COLOR = 'rgba(9, 211, 172, 0.6)';

const StyledSpan = styled.span`
  padding-left: 1.5rem;
`;

const StyledLabelWrapper = styled.label`
  display: flex;
  user-select: none;
  position: relative;
`;

const StyledInput = styled.input`
  top: 0.2em;
  z-index: 3;
  opacity: 0;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  position: absolute;

  :checked ~ i {
    border-color: ${BORDER_CHECKED_COLOR};

    :after,
    :before {
      opacity: 1;
      transition: height 0.38s ease;
    }

    :after {
      height: 0.5rem;
    }

    :before {
      height: 1.2rem;
      transition-delay: 0.15s;
    }
  }
`;

const StyledCheckIcon = styled.i`
  z-index: 0;
  width: 1rem;
  height: 1rem;
  position: absolute;
  color: ${BORDER_COLOR};
  box-sizing: border-box;
  border-radius: 0.0625rem;
  background-color: transparent;
  border: 0.125rem solid currentColor;
  transition: border-color 0.38s ease;
  top: 0.2em;

  :after,
  :before {
    height: 0;
    opacity: 0;
    content: "";
    width: 0.2rem;
    display: block;
    position: absolute;
    border-radius: 0.25rem;
    transform-origin: left top;
    background-color: ${CHECK_MARK_COLOR};
    transition: opacity 0.38s ease, height 0s linear 0.38s;
  }

  :after {
    left: 0;
    top: 0.3rem;
    transform: rotate(-45deg);
  }

  :before {
    top: 0.65rem;
    left: 0.38rem;
    transform: rotate(-135deg);
  }
`;

// ============================================================================
// React render function in Vue - using TypeScript (.tsx)
// ...single file component
// ============================================================================

@Component
export default class VCheckBox extends Vue {
  @Prop({ default: undefined })  public readonly id: string;
  @Prop({ default: undefined })  public readonly name: string;
  @Prop({ default: undefined })  public readonly label: string;
  @Prop({ default: false })      public readonly checked:  boolean;
  @Prop({ default: false })      public readonly disabled: boolean;
  @Prop({ default: false })      public readonly readOnly: boolean;

  public render(): VNode {
    return (
      <StyledLabelWrapper>
        <StyledInput
          id={this.id}
          type='checkbox'
          name={this.name}
          value={this.checked}
          checked={this.checked}
          readOnly={this.readOnly}
          disabled={this.disabled}
          onChange={this.handleOnChange}
        />
        <StyledCheckIcon />
        {this.label && <StyledSpan>{this.label}</StyledSpan>}
      </StyledLabelWrapper>
    );
  }

  public handleOnChange(event: Event): void {
    this.$emit('checked', !!(event.target as HTMLInputElement).checked);
  }
}
