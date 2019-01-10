<template>
    <div class="dashboard-wrapper">
        <section class="hero is-dark">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">Welcome, User</h1>
                    <h2 class="subtitle">Check out some highlights from the technology stack below.</h2>
                </div>
            </div>
        </section>
        <section class="container is-fluid">
            <div class="card">
                <div class="card-content">
                    <div class="column">
                        <div class="bd-notification is-flex is-horizontal-center">
                            <img src="../../assets/image/react-redux-aspcore-logo.png" alt="" />
                        </div>
                        <div class="columns is-multiline is-mobile">
                            <div class="column dashboard-info is-half">
                                <div class="bd-notification">
                                    <div class="content dashboard-content">
                                        <ul>
                                            <li>
                                                <a class="dashboard-link react" target="_blank" rel="noopener" href="https://reactjs.org/">React</a>
                                                is an open-source JavaScript library that makes no assumptions about the rest of your technology stack. It allows you to build encapsulated components that mange their own state using JavaScript, instead of templates.
                                            </li>
                                            <li>
                                                <a class="dashboard-link redux" target="_blank" rel="noopener" href="https://redux.js.org/">Redux</a>
                                                centralizes your application"s state and logic and helps you write applications that behave consistently and are easy to test.
                                            </li>
                                            <li>
                                                <a class="dashboard-link bulma" target="_blank" rel="noopener" href="https://bulma.io/">Bulma</a>
                                                is open source CSS framework based on Flexbox (with no JQuery dependency).
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="column dashboard-info is-half">
                                <div class="bd-notification">
                                    <div class="content dashboard-content">
                                        <ul>
                                            <li>
                                                <a class="dashboard-link aspcore" target="_blank" rel="noopener" href="https://www.asp.net/">ASP.NET Core</a>
                                                is an open source web framework for building modern web apps and services with .NET. Creates websites based on HTML5, CSS, and JavaScript that are simple, fast, and can scale to millions of users.
                                            </li>
                                            <li>
                                                <a class="dashboard-link sass" target="_blank" rel="noopener" href="https://sass-lang.com/">SASS</a>
                                                is a CSS pre-processor extension to help provide more flexibility & maintainability to your style-sheets. Use nesting, variables, mixins, inheritance and more great features to make writing CSS a less arduous task.
                                            </li>
                                            <li>
                                                <a class="dashboard-link typescript" target="_blank" rel="noopener" href="https://www.typescriptlang.org/">TypeScript</a>
                                                is a typed superset of JavaScript that compiles to plain JavaScript
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts" src="./Dashboard.ts"></script>
