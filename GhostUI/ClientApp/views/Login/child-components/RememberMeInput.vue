<template>
  <div class="field remember-me-field">
    <v-checkbox
      label="Remember me"
      :checked="rememberMe"
      @checked="isCheckedState => rememberMe = isCheckedState"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AuthModule } from "../../../store/modules/auth";
import { VCheckbox } from "../../../components";

@Component({
  components: {
    VCheckbox,
  }
})
export default class RememberMeInput extends Vue {
  get rememberMe(): boolean {
    return AuthModule.rememberMe;
  }
  set rememberMe(value: boolean) {
    AuthModule.UPDATE_REMEMBER_ME(value);
  }
}
</script>