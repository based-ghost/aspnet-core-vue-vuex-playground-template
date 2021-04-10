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

        const bubble = binding.modifiers.bubble;

        const handlerFn = (e) => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e);
          }
        };

        el.__vueClickOutside__ = handlerFn;
        DEFAULT_EVENTS.forEach((type) => document.addEventListener(type, handlerFn));
      },

      unbind: function(el) {
        if (el.__vueClickOutside__) {
          DEFAULT_EVENTS.forEach((type) => document?.removeEventListener(type, el.__vueClickOutside__));
          el.__vueClickOutside__ = null;
        }
      }
    });
  }
};

export default vClickOutside;
