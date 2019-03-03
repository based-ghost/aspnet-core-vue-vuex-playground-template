<template>
    <div v-show="show" id="load-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class Spinner extends Vue {
        @Prop({ default: false })
        show: boolean;
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/style/scss/components/spinner.scss';
</style>