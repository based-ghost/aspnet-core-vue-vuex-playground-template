<template>
  <section class="section">
    <div class="container is-centered box">
      <div class="columns form-columns">
        <div class="column">
          <h3 class="title is-4">Counter</h3>
          <h5 class="subtitle is-5">Click buttons to change count value</h5>
          <p class="subtitle is-5">
            Current count:<code>{{count}}</code>
          </p>
          <p class="buttons incrementer-buttons">
            <button class="button is-light minus" @click="count = count - 1">
              <font-awesome-icon icon="minus" class="is-danger" />Decrement
            </button>
            <button class="button is-light plus" @click="count = count + 1">
              <font-awesome-icon icon="plus" class="is-success" />Increment
            </button>
          </p>
        </div>
        <div class="column">
          <h3 class="title is-4">Dropdown</h3>
          <h5 class="subtitle is-5">Select an option from the dropdown</h5>
          <p class="subtitle is-5">
            Option:<code>{{JSON.stringify(selectedDropdownOption || {})}}</code>
          </p>
          <div class="field">
            <v-dropdown
              labelKey="label"
              wrapperClass="normal-width"
              :options="dropdownOptionsList"
              :selectedOptionLabel="selectedDropdownOption.label"
              @select="newSelectedOption => selectedDropdownOption = newSelectedOption"
            />
          </div>
        </div>
        <div class="column">
          <h3 class="title is-4">Checkbox</h3>
          <h5 class="subtitle is-5">Toggle the checkbox</h5>
          <p class="subtitle is-5">
            Checked:<code>{{checkboxValue}}</code>
          </p>
          <div class="field">
            <v-checkbox
              :checked="checkboxValue"
              @checked="isCheckedState => checkboxValue = isCheckedState"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { VCheckbox, VDropdown } from "../../components";
import { DROPDOWN_TEST_DATA } from "../../config/constants";
import { FormModule, IDropdownOption } from "../../store/modules/form";

@Component({
  components: {
    VCheckbox,
    VDropdown
  }
})
export default class Form extends Vue {
  public readonly dropdownOptionsList: IDropdownOption[] = DROPDOWN_TEST_DATA;

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