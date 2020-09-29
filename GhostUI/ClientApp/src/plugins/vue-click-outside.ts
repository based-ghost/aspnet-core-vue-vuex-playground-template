export default {
  install(Vue) {
    Vue.directive('click-outside', {
      bind: function(el, binding, vNode) {
        if (typeof binding.value !== 'function') {
          const compName = vNode.component;
          const warnMsg = `[v-click-outside]: provided expression '${binding.value}' is not a function, but has to be ${compName ? `- Found in component '${compName}` : ''}`.trim();
          console.warn(warnMsg);
        }

        const bubble = binding.modifiers.bubble;

        const handler = (e) => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e);
          }
        };

        el.__vueClickOutside__ = handler;
        document.addEventListener('click', handler, true);
        document.addEventListener('touchstart', handler, true);
      },

      unbind: function(el) {
        if (!el.__vueClickOutside__) return;

        document.removeEventListener('click', el.__vueClickOutside__, true);
        document.removeEventListener('touchstart', el.__vueClickOutside__, true);
        el.__vueClickOutside__ = null;
      }
    });
  }
};
