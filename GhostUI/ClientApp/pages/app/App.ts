import { Component, Vue } from 'vue-property-decorator';
import { NavBar, Settings } from '../../components/nav';
import FooterStatic from '../../components/footer/Footer.html.vue';
import { mapGetters } from 'vuex';

@Component({
    components: {
        NavBar,
        Settings,
        FooterStatic
    },
    computed: mapGetters({
        isAuthenticated: 'isAuthenticated'
     })
})
export default class App extends Vue { }