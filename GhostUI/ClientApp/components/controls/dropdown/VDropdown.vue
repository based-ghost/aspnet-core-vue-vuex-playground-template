<template>
    <div :class="['dropdown', wrapperClass, { 'is-active': open }]">
            <button :class="['button', buttonClass]"
                    type="button"
                    disabled="disabled"
                    ref="dropdownButton"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu"
                    v-click-outside="hideDropdownMenu"
                    @click="toggleDropdownMenu"
                    @keydown="keyDownHandler">
                <span>{{selectedOptionLabel || placeholder}}</span>
                <span class="caret-select"></span>
            </button>
        <div class="dropdown-menu" 
             role="menu" 
             ref="dropdownMenu">
            <ul class="dropdown-content">
                <li v-for="(option, index) in options" :key="index">
                    <a role="button"
                       :class="['dropdown-item', { 'selected-option': getOptionLabelName(option) === selectedOptionLabel }]"
                       @click="updateSelectedOption(option)">
                        {{getOptionLabelName(option)}}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class VDropdown extends Vue {
        public $refs: {
            dropdownMenu: HTMLElement,
            dropdownButton: HTMLElement
        }

        @Prop({ default: () => ([]) })
        options: any[];

        @Prop({ default: false })
        disabled: boolean;

        @Prop({ default: 'label' })
        labelKey: string;

        @Prop({ default: '' })
        placeholder: string;

        @Prop({ default: '' })
        wrapperClass: string;

        @Prop({ default: '' })
        buttonClass: string;

        @Prop({ default: '' })
        selectedOptionLabel: string;

        open: boolean = false;

        get isArrayOfObjects(): boolean {
            return this.options && (this.options[0] === Object(this.options[0]));
        }

        toggleDropdownMenu(): void {
            this.open = !this.open;
        }

        hideDropdownMenu(): void {
            this.open = false;
        }

        showDropdownMenu(): void {
            this.open = true;
        }

        getOptionLabelName(option: any): string {
            return this.isArrayOfObjects ? (option[this.labelKey] || option[0]) : option;
        }

        updateSelectedOption(option: any): void {
            this.$emit('select', option);
        }

        keyDownHandler(event: KeyboardEvent): void {
            if (event.keyCode == 38 || event.keyCode == 40) { // up and down keys
                this.toggleDropdownMenu();
                event.preventDefault();
            } else if (event.keyCode == 27) { // Esc key
                this.$refs.dropdownButton.focus();
                this.hideDropdownMenu();
            } else if (event.keyCode == 9 && this.open) { // Tab key
                this.hideDropdownMenu();
            }
        }
    }
</script>