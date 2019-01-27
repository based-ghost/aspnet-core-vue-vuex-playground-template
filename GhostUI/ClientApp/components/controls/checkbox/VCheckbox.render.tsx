import Vue, { VNode, CreateElement } from 'vue';
import { Component, Prop } from 'vue-property-decorator';

/**
 * React render function in Vue - using TypeScript (.tsx) - single file
 */
@Component
export default class VCheckBox extends Vue {
    @Prop({ default: '' })
    wrapperClass: string;

    @Prop({ default: '' })
    controlClass: string;

    @Prop({ default: '' })
    trailingLabel: string;

    @Prop({ default: false })
    checked: boolean;

    @Prop({ default: false })
    disabled: boolean;  

    public render(h: CreateElement): VNode {
        return (
            <div class={['control', this.wrapperClass]}>
                <p class={['checkbox-control', this.controlClass, { 'disabled': this.disabled }]}>
                    <label>
                        <input type="checkbox"
                               value={this.checked}
                               checked={this.checked}
                               disabled={this.disabled}
                               onChange={this.handleOnChange} />
                        <i class="helper"></i>
                        { this.trailingLabel ? <span>{this.trailingLabel}</span> : null }
                    </label>
                </p>
            </div>
        );      
    }

    private handleOnChange(event: Event): void {
        this.$emit('checked', !!(event.target as HTMLInputElement).checked);
    }
}