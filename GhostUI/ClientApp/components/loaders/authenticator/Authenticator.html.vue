<template>
    <div v-if="show" :class="['atom-loader', authStatus]">
        <div></div>
        <div></div>
    </div>
</template>

<script lang="ts" src="./Authenticator.ts"></script>