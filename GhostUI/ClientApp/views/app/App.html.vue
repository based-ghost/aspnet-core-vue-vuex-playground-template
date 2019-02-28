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

<script lang="ts" src="./App.ts"></script>