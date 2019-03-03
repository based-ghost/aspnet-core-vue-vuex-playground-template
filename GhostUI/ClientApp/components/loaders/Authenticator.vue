<template>
    <div v-if="show" :class="['atom-loader', authStatus]">
        <div></div>
        <div></div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
    import { AuthStatusEnum } from '../../store/modules/auth.store';

    @Component
    export default class Authenticator extends Vue {
        @Prop({ default: 1500 })                private emitTimeout: number;
        @Prop({ default: AuthStatusEnum.None }) private authStatus:  string;

        private show: boolean = false;

        @Watch('authStatus')
        private onStatusChange(newStatus: string): void {
            if (newStatus.isIn(AuthStatusEnum.Success, AuthStatusEnum.Fail)) {
                setTimeout(() => {
                    this.$emit(newStatus);
                }, this.emitTimeout);
            } else {
                this.show = (newStatus === AuthStatusEnum.Process);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/style/scss/components/authenticator.scss';
</style>