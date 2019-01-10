<template>
    <div :class="['dropdown', parentClass, { 'is-active': open }]">
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

<script lang="ts" src="./VDropdown.ts"></script>