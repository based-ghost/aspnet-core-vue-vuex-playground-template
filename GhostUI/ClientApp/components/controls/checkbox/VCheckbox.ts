import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class VCheckbox extends Vue {
    @Prop({ default: false })
    disabled: boolean;

    @Prop({ default: false })
    checked: boolean;   

    @Prop({ default: '' })
    trailingLabel: string;

    @Prop({ default: '' })
    parentClass: string;

    @Prop({ default: '' })
    controlClass: string;
}