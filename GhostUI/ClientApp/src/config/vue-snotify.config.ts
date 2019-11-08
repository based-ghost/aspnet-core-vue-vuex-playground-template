import { SnotifyPosition, SnotifyDefaults, SnotifyStyle } from "vue-snotify";

export const snotifyDefaults: SnotifyDefaults = {
  global: {
    newOnTop: true,
    maxAtPosition: 4,
    maxOnScreen: 4,
    oneAtTime: false,
    preventDuplicates: true
  },
  toast: {
    position: SnotifyPosition.centerTop,
    timeout: 2500,
    showProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true
  },
  type: {
    [SnotifyStyle.async]: {
      closeOnClick: true,
      pauseOnHover: true,
      timeout: 7500
    }
  }
};