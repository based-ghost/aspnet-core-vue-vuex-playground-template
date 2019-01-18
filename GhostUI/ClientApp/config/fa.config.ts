import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faHome,
    faCloud,
    faHeart,
    faFile,
    faUser,
    faLock,
    faEye,
    faCog,
    faPlus,
    faMinus,
    faEyeSlash,
    faPencilAlt,
    faSignInAlt,
    faSignOutAlt,
    faChevronLeft,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';

library.add(
    faHome,
    faCloud,
    faHeart,
    faFile,
    faUser,
    faLock,
    faCog,
    faEye,
    faPlus,
    faMinus,
    faEyeSlash,
    faPencilAlt,
    faSignInAlt,
    faSignOutAlt,
    faChevronLeft,
    faChevronRight
);

Vue.component('font-awesome-icon', FontAwesomeIcon);