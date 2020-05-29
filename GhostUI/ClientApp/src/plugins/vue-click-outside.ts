export default {
  install(Vue) {
    Vue.directive('click-outside', {
      bind: function(el, binding, vNode) {
        if (typeof binding.value !== 'function') {
          const compName = vNode.context.name;
          let warnMsg = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`;

          if (compName) {
            warnMsg += ` - Found in component '${compName}'`;
          }

          console.warn(warnMsg);
        }

        const bubble = binding.modifiers.bubble;

        const handler = e => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e);
          }
        };

        el.__vueClickOutside__ = handler;
        document.addEventListener('click', handler);
      },

      unbind: function(el) {
        document.removeEventListener('click', el.__vueClickOutside__);
        el.__vueClickOutside__ = null;
      }
    });
  }
};
