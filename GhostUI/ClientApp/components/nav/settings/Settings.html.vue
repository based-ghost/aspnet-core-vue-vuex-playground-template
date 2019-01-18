<template>
    <div v-if="showSettings" :class="['fixed-plugin', { 'fixed-plugin-active': open }]">
        <div class="dropdown">
            <a role="button"
               @click="toggleSettingsMenu"
               v-click-outside="closeSettingsMenu">
                <font-awesome-icon icon="cog" size="3x" />
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
                            <font-awesome-icon icon="heart" />
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
                            <font-awesome-icon icon="file" />
                        </span>
                        <span>Swagger API</span>
                    </a>
                </li>
                <li>
                    <a class="dropdown-item" 
                       role="button" 
                       @click="logout">
                        <span class="icon">
                            <font-awesome-icon icon="sign-out-alt" />
                        </span>
                        <span>Logout</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" src="./Settings.ts"></script>