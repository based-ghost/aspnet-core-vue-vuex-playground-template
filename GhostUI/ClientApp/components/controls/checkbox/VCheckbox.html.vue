<template>
    <div :class="['control', parentClass]">
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

<script lang="ts" src="./VCheckbox.ts"></script>

<style scoped>
    .remember-me-control {
        text-align: center;
    }
    .menu-list-control {
        display: block;
        padding: 0.55em 0.75em;
    }
    .checkbox-control {
        margin-bottom: 1rem;
    }
        .checkbox-control.is-medium {
            font-size: 1.25rem;
            height: 2.25rem;
        }
        .checkbox-control.menu-list-control {
            margin-bottom: inherit;
        }
    .remember-me-control .checkbox-control {
        line-height: 0.85;
        font-size: 1.15rem;
        font-weight: 400;
    }
    .checkbox-control:not(.disabled) label:hover .helper {
        color: #b5b5b5;
    }
    .checkbox-control input {
        opacity: 0;
        width: 1rem;
        height: 1rem;
        position: absolute;
    }
    .checkbox-control.is-medium input {
        opacity: 0;
        left: 0;
        margin-top: 0.3rem;
        width: 1.25rem;
        height: 1.25rem;
        position: absolute;
    }
    input[type="checkbox"] {
        vertical-align: baseline;
    }
    .checkbox-control label {
        cursor: pointer;
        color: #4a4a4a;
        position: relative;
        display: block;
    }
        .checkbox-control label span {
            padding-left: 1.4em;
        }
    .checkbox-control.disabled label {
        cursor: not-allowed;
    }
    .checkbox-control.disabled .helper, .checkbox-control.disabled input {
        opacity: .7;
    }
    .checkbox-control.is-medium label span, .checkbox-control.menu-list-control span {
        padding-left: 1.75em;
    }
    .checkbox-control .helper {
        color: #dbdbdb;
        background-color: #fff;
        position: absolute;
        top: 0;
        width: 1rem;
        height: 1rem;
        z-index: 0;
        border: 0.125rem solid currentColor;
        border-radius: 0.0625rem;
        -webkit-transition: border-color 0.38s ease;
        transition: border-color 0.38s ease;
    }
    .checkbox-control.menu-list-control .helper {
        top: 0.25rem;
    }
    .checkbox-control.is-medium .helper {
        width: 1.25rem;
        height: 1.25rem;
        top: inherit;
        margin-top: 0.3rem;
    }
    .checkbox-control input:checked ~ .helper::before {
        height: 1.2rem;
        -webkit-transition-delay: 0.38s;
        transition-delay: 0.38s;
    }
    .checkbox-control.is-medium input:checked ~ .helper::before {
        height: 1.5rem;
    }
    .checkbox-control input:checked ~ .helper::after, .checkbox-control input:checked ~ .helper::before {
        opacity: 1;
        -webkit-transition: height 0.38s ease;
        transition: height 0.38s ease;
        -webkit-transition-delay: 0s;
        transition-delay: 0s;
    }
    .checkbox-control .helper::before {
        top: 0.65rem;
        left: 0.38rem;
        -webkit-transform: rotate(-135deg);
        transform: rotate(-135deg);
    }
    .checkbox-control.is-medium .helper::before {
        top: 0.8125rem;
        left: 0.475rem;
    }
    .checkbox-control .helper::before, .checkbox-control .helper::after {
        position: absolute;
        height: 0;
        width: 0.2rem;
        background-color: #4bbf73;
        display: block;
        transform-origin: left top;
        border-radius: 0.25rem;
        content: "";
        -webkit-transition: opacity 0.38s ease, height 0s linear 0.38s;
        transition: opacity 0.38s ease, height 0s linear 0.38s;
        opacity: 0;
    }
    .checkbox-control.is-medium .helper::before, .checkbox-control.is-medium .helper::after {
        width: 0.23rem;
    }
    .checkbox-control input:checked ~ .helper::after {
        height: 0.5rem;
    }
    .checkbox-control.is-medium input:checked ~ .helper::after {
        height: 0.625rem;
    }
    .checkbox-control .helper::after {
        top: 0.3rem;
        left: 0;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
    .checkbox-control.is-medium .helper::after {
        top: 0.375rem;
    }
</style>