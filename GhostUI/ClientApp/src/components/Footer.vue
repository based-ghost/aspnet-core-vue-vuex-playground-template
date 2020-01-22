<template functional>
  <footer class="footer">
    <div class="buttons">
      <a
        target="_blank"
        aria-label="GitHub"
        class="button is-medium"
        rel="noopener noreferrer"
        href="https://github.com/based-ghost"
      >
        <font-awesome-icon :icon="['fab', 'github']"/>
      </a>
      <a
        aria-label="Twitter"
        class="button is-medium"
      >
        <font-awesome-icon :icon="['fab', 'twitter']"/>
      </a>
      <a
        aria-label="Medium"
        class="button is-medium"
      >
        <font-awesome-icon :icon="['fab', 'medium-m']"/>
      </a>
    </div>
    <div class="content">based-ghost LLC &copy; 2020</div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue { }
</script>