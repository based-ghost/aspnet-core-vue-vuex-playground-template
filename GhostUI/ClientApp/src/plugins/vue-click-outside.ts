const DEFAULT_EVENTS: string[] = ['click', 'touchstart'];

const vClickOutside = {
  install(Vue) {
    Vue.directive('click-outside', {
      bind: function(el, binding, vNode) {
        if (typeof binding.value !== 'function') {
          const compName = vNode.component;
          const warnMsg = `[v-click-outside]: provided expression '${binding.value}' is not a function, but has to be ${compName ? `- Found in component '${compName}` : ''}`.trim();
          console.warn(warnMsg);
        }

        el.clickOutsideEvent = function (e) {
          e.stopPropagation();
          if (!(el === e.target || el.contains(e.target))) {
            binding.value(e);
          }
        }

        DEFAULT_EVENTS.forEach((type) => document.addEventListener(type, el.clickOutsideEvent));
      },

      unbind: function(el) {
        if (el.clickOutsideEvent) {
          DEFAULT_EVENTS.forEach((type) => document.removeEventListener(type, el.clickOutsideEvent));
        }
      }
    });
  }
};

export default vClickOutside;
