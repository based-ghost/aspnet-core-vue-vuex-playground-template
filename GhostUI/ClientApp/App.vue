<template>
    <div id="app-root">
        <vue-snotify />
        <nav-bar />
        <settings v-if="isAuthenticated" />
        <transition :name="$route.meta.transitionName" mode="out-in">
            <router-view></router-view>
        </transition>
        <app-footer />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import AppFooter from './components/footer/Footer.vue';
    import { NavBar, Settings } from './components/nav';
    import { sfcGlobalData } from './config/constants';
    import { mapGetters } from 'vuex';

    @Component({
        components: {
            NavBar,
            Settings,
            AppFooter
        },
        computed: mapGetters({
            isAuthenticated: 'isAuthenticated'
        })
    })
    export default class App extends Vue {
        public readonly sfcData = sfcGlobalData;
    }
</script>