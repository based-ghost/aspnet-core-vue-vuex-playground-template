<template>
  <div :class="['control', wrapperClass]">
    <p :class="['checkbox-control', controlClass, { 'disabled': disabled }]">
      <label>
        <input
          type="checkbox"
          :value="checked"
          :checked="checked"
          :disabled="disabled"
          @change="$emit('checked', $event.target.checked || false)"
        >
        <i class="helper"></i>
        <span v-if="trailingLabel">{{trailingLabel}}</span>
      </label>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class VCheckbox extends Vue {
  @Prop({ default: "" }) private wrapperClass: string;
  @Prop({ default: "" }) private controlClass: string;
  @Prop({ default: "" }) private trailingLabel: string;
  @Prop({ default: false }) private checked: boolean;
  @Prop({ default: false }) private disabled: boolean;
}
</script>