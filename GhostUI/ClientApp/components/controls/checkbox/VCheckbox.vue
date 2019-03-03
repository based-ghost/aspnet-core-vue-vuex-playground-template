<template>
    <div :class="['control', wrapperClass]">
        <p :class="['checkbox-control', controlClass, { 'disabled': disabled }]">
            <label>
                <input type="checkbox"
                       :value="checked"
                       :checked="checked"
                       :disabled="disabled"
                       @change="$emit('checked', $event.target.checked || false)">
                <i class="helper"></i>
                <span v-if="trailingLabel">{{trailingLabel}}</span>
            </label>
        </p>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class VCheckbox extends Vue {
        @Prop({ default: false })
        disabled: boolean;

        @Prop({ default: false })
        checked: boolean;

        @Prop({ default: '' })
        trailingLabel: string;

        @Prop({ default: '' })
        wrapperClass: string;

        @Prop({ default: '' })
        controlClass: string;
    }
</script>