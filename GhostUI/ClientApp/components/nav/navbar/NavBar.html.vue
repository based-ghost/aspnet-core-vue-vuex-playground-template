<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="brand-wrapper">
            <img src="../../../assets/image/bulma-type-white-40.png" alt="">
        </div>
        <div class="navbar-centered">
            <div v-if="showNavigation" class="navbar-start">
                <router-link to="/form" class="navbar-item">
                    <span class="icon">
                        <font-awesome-icon icon="pencil-alt" />
                    </span>
                    <span>Form</span>
                </router-link>
                <div class="nav-divider"></div>
                <router-link to="/dashboard" class="navbar-item">
                    <span class="icon">
                        <font-awesome-icon icon="home" />
                    </span>
                    <span>Dashboard</span>
                </router-link>
                <div class="nav-divider"></div>
                <router-link to="/fetchdata" class="navbar-item">
                    <span class="icon">
                        <font-awesome-icon icon="cloud" />
                    </span>
                    <span>Fetch Data</span>
                </router-link>
            </div>
        </div>     
    </nav>
</template>

<script lang="ts" src="./NavBar.ts"></script>