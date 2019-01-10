import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {
    @Prop({ default: false })
    showNavigation: boolean;
}