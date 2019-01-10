import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Spinner extends Vue {
    @Prop({ default: false })
    show: boolean;
}