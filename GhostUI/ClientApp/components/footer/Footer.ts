import { Component, Vue } from 'vue-property-decorator';
import { FOOTER_TEXT } from '../../config/constants';

@Component
export default class Footer extends Vue {
    readonly footerText: string = FOOTER_TEXT;
}