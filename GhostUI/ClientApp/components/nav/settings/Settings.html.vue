<template>
    <div v-if="showSettings" :class="['fixed-plugin', { 'fixed-plugin-active': open }]">
        <div class="dropdown">
            <a role="button"
               @click="toggleSettingsMenu"
               v-click-outside="closeSettingsMenu">
                <i class="fa fa-cog fa-2x"></i>
            </a>
            <ul v-if="open" class="dropdown-menu">
                <li class="header-title">Settings</li>
                <li>
                    <a class="dropdown-item" 
                       target="_blank" 
                       rel="noopener" 
                       :href="healthCheckURL" 
                       role="button">
                        <span class="icon">
                            <i class="fa fa-heart"></i>
                        </span>
                        <span>Health Checks</span>
                    </a>
                </li>
                <li>
                    <a class="dropdown-item"
                       target="_blank"
                       rel="noopener"
                       :href="swaggerURL"
                       role="button">
                        <span class="icon">
                            <i class="fa fa-file"></i>
                        </span>
                        <span>Swagger API</span>
                    </a>
                </li>
                <li>
                    <a class="dropdown-item" 
                       role="button" 
                       @click="logout">
                        <span class="icon">
                            <i class="fa fa-sign-out"></i>
                        </span>
                        <span>Logout</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" src="./Settings.ts"></script>