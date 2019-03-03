import Vue, { VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';

/**
 * React render function in Vue - using TypeScript (.tsx) - single file
 */
@Component
export default class VCheckBox extends Vue {
    @Prop({ default: '' })    private wrapperClass:  string;
    @Prop({ default: '' })    private controlClass:  string;
    @Prop({ default: '' })    private trailingLabel: string;
    @Prop({ default: false }) private checked:       boolean;
    @Prop({ default: false }) private disabled:      boolean;  

    public render(): VNode {
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
                        { this.trailingLabel && <span>{this.trailingLabel}</span> }
                    </label>
                </p>
            </div>
        );      
    }

    private handleOnChange(e: Event): void {
        this.$emit('checked', !!(e.target as HTMLInputElement).checked);
    }
}