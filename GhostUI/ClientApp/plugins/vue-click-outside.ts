export default {
    install(Vue) {
        Vue.directive('click-outside', {
            bind: function (el, binding, vNode) {
                if (typeof binding.value !== 'function') {
                    const compName = vNode.context.name;

                    const warn = compName
                        ? `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be - Found in component '${compName}'`
                        : `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`;

                    console.warn(warn);
                }

                const bubble = binding.modifiers.bubble;
                const handler = (e) => {
                    if (bubble || (!el.contains(e.target) && el !== e.target)) {
                        binding.value(e);
                    }
                };

                el.__vueClickOutside__ = handler;
                document.addEventListener('click', handler);
            },

            unbind: function (el, binding) {
                document.removeEventListener('click', el.__vueClickOutside__);
                el.__vueClickOutside__ = null;
            }
        });
    }
};