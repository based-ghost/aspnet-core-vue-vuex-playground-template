<template>
    <div v-show="show" id="load-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script lang="ts" src="./Spinner.ts"></script>

<style lang="scss" scoped>
    @import '../../../assets/style/scss/components/spinner.scss';
</style>