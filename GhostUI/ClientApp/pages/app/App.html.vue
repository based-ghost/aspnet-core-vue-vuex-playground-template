<template>
    <div id="app-root">
        <vue-snotify />
        <nav-bar :showNavigation="isAuthenticated" />
        <settings :showSettings="isAuthenticated" />
        <transition :name="$route.meta.transitionName" mode="out-in">
            <router-view></router-view>
        </transition>
        <app-footer />
    </div>
</template>

<script lang="ts" src="./App.ts"></script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        -webkit-transition: opacity .25s ease;
        transition: opacity .25s ease;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
    .pageSlideRight-enter-active {
        -webkit-animation: page-enter-slideRight both cubic-bezier(0.4, 0, 0, 1.5);
        animation: page-enter-slideRight both cubic-bezier(0.4, 0, 0, 1.5);
        -webkit-animation-duration: .35s;
        animation-duration: .35s;
    }
    .pageSlideLeft-enter-active {
        -webkit-animation: page-enter-slideLeft both cubic-bezier(0.4, 0, 0, 1.5);
        animation: page-enter-slideLeft both cubic-bezier(0.4, 0, 0, 1.5);
        -webkit-animation-duration: .35s;
        animation-duration: .35s;
    }
    .pageSlideRight-leave-active,
    .pageSlideLeft-leave-active {
        -webkit-animation: page-leave-fadeOut ease;
        animation: page-leave-fadeOut ease;
        -webkit-animation-duration: .25s;
        animation-duration: .25s;
    }
    @-webkit-keyframes page-leave-fadeOut {
        from {
            opacity: 1;
        } to {
            opacity: 0;
        }
    }
    @keyframes page-leave-fadeOut {
        from {
            opacity: 1;
        } to {
            opacity: 0;
        }
    }
    @-webkit-keyframes page-enter-slideRight {
        from {
            opacity: 0;
            -webkit-transform: translate3d(150px, 0, 0);
            transform: translate3d(150px, 0, 0);
        } to {
            opacity: 1;
        }
    }
    @keyframes page-enter-slideRight {
        from {
            opacity: 0;
            -webkit-transform: translate3d(150px, 0, 0);
            transform: translate3d(150px, 0, 0);
        } to {
            opacity: 1;
        }
    }
    @-webkit-keyframes page-enter-slideLeft {
        from {
            opacity: 0;
            -webkit-transform: translate3d(-150px, 0, 0);
            transform: translate3d(-150px, 0, 0);
        }
        to {
            opacity: 1;
        }
    }
    @keyframes page-enter-slideLeft {
        from {
            opacity: 0;
            -webkit-transform: translate3d(-150px, 0, 0);
            transform: translate3d(-150px, 0, 0);
        }
        to {
            opacity: 1;
        }
    }
</style>