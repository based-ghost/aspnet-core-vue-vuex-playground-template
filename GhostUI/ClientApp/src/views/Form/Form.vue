<template>
  <section class="section">
    <div class="container">
      <h3 class="title is-3">Form Controls</h3>
      <div class="box container-box">
        <div class="columns form-columns">
          <div class="column">
            <h3 class="title is-4">Counter</h3>
            <h5 class="subtitle is-5">Use buttons to update count value</h5>
            <p class="buttons incrementer-buttons form-control-group">
              <button
                @click="count = count - 1"
                class="button is-light minus"
              >
                <font-awesome-icon icon="minus" class="is-danger" />
              </button>
              <button
                @click="count = count + 1"
                class="button is-light plus"
              >
                <font-awesome-icon icon="plus" class="is-success" />
              </button>
            </p>
            <p class="subtitle is-5">
              Current count: <code>{{count}}</code>
            </p>
          </div>
          <div class="column">
            <h3 class="title is-4">Dropdown</h3>
            <h5 class="subtitle is-5">Select options from the dropdown</h5>
            <div class="field form-control-group">
              <v-dropdown
                labelKey="label"
                :options="dropdownOptions"
                wrapperClass="normal-width"
                :selectedOptionLabel="selectedDropdownOption.label"
                @select="newSelectedOption => selectedDropdownOption = newSelectedOption"
              />
            </div>
            <p class="subtitle is-5">
              Option: <code>{{selectedOptionJSON}}</code>
            </p>
          </div>
          <div class="column">
            <h3 class="title is-4">Checkbox</h3>
            <h5 class="subtitle is-5">Toggle the checkbox</h5>
            <div class="field form-control-group">
              <v-checkbox
                :checked="checkboxValue"
                @checked="isCheckedState => checkboxValue = isCheckedState"
              />
            </div>
            <p class="subtitle is-5">
              Checked: <code>{{checkboxValue}}</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { VCheckbox, VDropdown } from "@/components";
import { DROPDOWN_TEST_DATA } from "@/config/constants";
import { FormModule, IDropdownOption } from "@/store/modules/form";

@Component({
  components: {
    VCheckbox,
    VDropdown
  }
})
export default class Form extends Vue {
  public readonly dropdownOptions: IDropdownOption[] = DROPDOWN_TEST_DATA;

  get selectedOptionJSON(): string {
    const option = this.selectedDropdownOption || {};
    return JSON.stringify(option).replace(/"/g, "'");
  }

  get count(): number {
    return FormModule.count;
  }
  set count(value: number) {
    FormModule.UPDATE_COUNT(value);
  }

  get checkboxValue(): boolean {
    return FormModule.checkboxValue;
  }
  set checkboxValue(value: boolean) {
    FormModule.UPDATE_CHECKBOX_VALUE(value);
  }

  get selectedDropdownOption(): IDropdownOption {
    return FormModule.selectedDropdownOption;
  }
  set selectedDropdownOption(value: IDropdownOption) {
    FormModule.UPDATE_SELECTED_OPTION(value);
  }
}
</script>