import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHeart,
  faFile,
  faUser,
  faLock,
  faEye,
  faCog,
  faPlus,
  faMinus,
  faEyeSlash,
  faSignInAlt,
  faSignOutAlt,
  faAngleDoubleLeft,
  faAngleDoubleRight
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faMediumM,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faHeart,
  faFile,
  faUser,
  faLock,
  faCog,
  faEye,
  faPlus,
  faMinus,
  faEyeSlash,
  faSignInAlt,
  faSignOutAlt,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faGithub,
  faMediumM,
  faTwitter
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
