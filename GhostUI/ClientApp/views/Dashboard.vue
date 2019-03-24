<template>
  <div class="dashboard-wrapper">
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="is-flex is-horizontal-center">
          <img src="../assets/image/aspcore-vue.png" alt width="300">
        </div>
      </div>
    </section>
    <section class="container">
      <div class="card">
        <div class="card-content">
          <div class="column">
            <p class="title has-text-centered">Technology Stack</p>
            <hr>
            <div class="columns is-multiline">
              <div class="column dashboard-info is-half">
                <div class="content dashboard-content">
                  <ul>
                    <li>
                      <a
                        class="dashboard-link vue"
                        target="_blank"
                        rel="noopener"
                        href="https://vuejs.org/"
                      >Vue</a>
                      is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. Vue is also perfectly capable of powering sophisticated Single-Page Applications when combined with other libraries.
                    </li>
                    <li>
                      <a
                        class="dashboard-link vuex"
                        target="_blank"
                        rel="noopener"
                        href="https://vuex.vuejs.org/"
                      >Vuex</a>
                      serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.
                    </li>
                    <li>
                      <a
                        class="dashboard-link bulma"
                        target="_blank"
                        rel="noopener"
                        href="https://bulma.io/"
                      >Bulma</a>
                      is open source CSS framework based on Flexbox (with no JQuery dependency).
                    </li>
                  </ul>
                </div>
              </div>
              <div class="column dashboard-info is-half">
                <div class="content dashboard-content">
                  <ul>
                    <li>
                      <a
                        class="dashboard-link aspcore"
                        target="_blank"
                        rel="noopener"
                        href="https://www.asp.net/"
                      >ASP.NET Core</a>
                      is an open source web framework for building modern web apps and services with .NET. Creates websites based on HTML5, CSS, and JavaScript that are simple, fast, and can scale to millions of users.
                    </li>
                    <li>
                      <a
                        class="dashboard-link sass"
                        target="_blank"
                        rel="noopener"
                        href="https://sass-lang.com/"
                      >SASS</a>
                      is a CSS pre-processor extension to help provide more flexibility & maintainability to your style-sheets. Use nesting, variables, mixins, inheritance and more great features to make writing CSS a less arduous task.
                    </li>
                    <li>
                      <a
                        class="dashboard-link typescript"
                        target="_blank"
                        rel="noopener"
                        href="https://www.typescriptlang.org/"
                      >TypeScript</a>
                      is a typed superset of JavaScript that compiles to plain JavaScript
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Dashboard extends Vue {}
</script>