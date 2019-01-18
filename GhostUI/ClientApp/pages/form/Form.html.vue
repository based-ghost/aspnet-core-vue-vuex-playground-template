<template>
    <section class="section">
        <div class="container is-centered box">
            <div class="columns form-columns">
                <div class="column is-4">
                    <h3 class="title is-4">Counter</h3>
                    <h5 class="subtitle is-5">Simple example of a React component</h5>
                    <p class="subtitle is-5">Current count: <strong>{{count.toString()}}</strong></p>
                    <div class="field is-grouped">
                        <p class="control">
                            <button class="button is-danger"
                                    @click="count = count - 1">
                                <span class="icon">
                                    <font-awesome-icon icon="minus" />
                                </span>
                                <span>Decrement</span>
                            </button>
                        </p>
                        <p class="control">
                            <button class="button is-success"
                                    @click="count = count + 1">
                                <span class="icon">
                                    <font-awesome-icon icon="plus" />
                                </span>
                                <span>Increment</span>
                            </button>
                        </p>
                    </div>
                </div>
                <div class="column is-4">
                    <h3 class="title is-4">Dropdown</h3>
                    <h5 class="subtitle is-5">Select an option from the dropdown</h5>
                    <p class="subtitle is-5">Option: <strong>{{JSON.stringify(selectedDropdownOption)}}</strong></p>
                    <div class="field is-grouped">
                        <div class="control">
                            <v-dropdown :options="dropdownOptionsList"
                                        labelKey="label"
                                        :selectedOptionLabel="selectedDropdownOption.label"
                                        parentClass="normal-width"
                                        @select="newSelectedOption => selectedDropdownOption = newSelectedOption" />
                        </div>
                    </div>
                </div>
                <div class="column is-4">
                    <h3 class="title is-4">Checkbox</h3>
                    <h5 class="subtitle is-5">Toggle the checkbox</h5>
                    <p class="subtitle is-5">Checked: <strong>{{checkboxValue.toString()}}</strong></p>
                    <div class="field is-grouped">
                        <v-checkbox :checked="checkboxValue"
                                    @checked="isCheckedState => checkboxValue = isCheckedState" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" src="./Form.ts"></script>