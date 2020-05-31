# ASP.NET Core 3.1 / Vue + Vuex + TypeScript + Hot Module Replacement (HMR)
This template is a SPA application built using ASP.NET Core 3.1 as the REST API server and Vue/Vuex/TypeScript as the web client (Bulma + SASS + vue-styled-components for UI styling). You can find a similar version using React + Redux (and associated libraries) here: [aspnet-core-react-redux-playground-template](https://github.com/based-ghost/aspnet-core-react-redux-playground-template)


![](https://j.gifs.com/oVKkEY.gif)


## General Overview
This template is vaguely based on the original Vue + TypeScript .NET Core SPA template that was offered in the past with earlier versions of the framework (Vue has been removed as an option from their starter templates for some reason). Using that as a base, this template greatly extends the functionality provided and also uses the latest versions of all referenced libraries/packages. Keep in mind that I use this project (or others like it) as a testing ground for varying libraries/packages and it is not meant to act as a stand-alone final solution - it is more of POC. For example, the login & logout processes are stubbed to simulate the actual process (no real authentication is happening, however, it is something I plan to add to this project in the near future). I plan on keeping this up to date, and the listed technology stack may be subject to change.

* Front-end bootstrapped using the [`Vue CLI App`](https://cli.vuejs.org)
* Server has the [`aspnetcore-vueclimiddleware`](https://github.com/EEParker/aspnetcore-vueclimiddleware) nuget package installed in order to execute the `npm run serve` ClientApp script automatically when you run the .NET project (browser is also configured to automatically launch with IIS, so there is no need to manually run your Vue front-end every time).

## Technology Stack Overview
- **Server**
  - ASP.NET Core 3.1
  - SignalR
  - [`aspnetcore-vueclimiddleware`](https://github.com/EEParker/aspnetcore-vueclimiddleware)
  - HealthChecks + [AspNetCore.HealthChecks.UI package](https://github.com/xabaril/AspNetCore.Diagnostics.HealthChecks) - this provides  a nicely formatted UI for viewing the results of the HealthCheck modules in use and is accessed on ```/health-ui``` (also, provide an option for viewing the raw JSON data that the UI package prettifies for you at ```/healthchecks-json```). Access this view in the application via the floating settings cog on right screen by clicking the "Health Checks" link.
  - API Documentation using Swagger UI - using package [NSwag.AspNetCore](http://NSwag.org) to prettify the specification output and display at ```/docs``` & [NSwag.MSBuild](http://NSwag.org) to handle automatic updates - so that when the project builds, the NSwag CLI will run and generate an updated API specification. Access this view in the application via the floating settings cog on right screen by clicking the "Swagger API" link.
  - Brotli/Gzip response compression (production build)
- **Client**
  - [`Vue`](https://vuejs.org/)
  - [`Vuex`](https://vuex.vuejs.org/)
  - [`Vue-router`](https://router.vuejs.org/)
  - [`TypeScript`](https://www.typescriptlang.org/)
  - [`Webpack`](https://github.com/webpack/webpack) for bundling of application assets and HMR (Hot Module Replacement)
  - [`Bulma CSS`](https://bulma.io/) + [`SASS`](https://github.com/sass/sass) + Font Awesome 5 (using fontawesome-svg-core)
  - [`Axios`](https://github.com/axios/axios) for REST endpoint requests
  - [`vue-svg-loader`](https://github.com/visualfanatic/vue-svg-loader) for fetching and displaying SVG images inline
  - [`vue-styled-components`](https://github.com/styled-components/vue-styled-components) - this is the Vue.js implementation of the popular React.js [styled-components](https://www.styled-components.com/). Write component-scoped CSS code in JavaScript via template literals - see example further down with the VCheckbox.render.tsx component.
  - [`vuex-module-decorators`](https://github.com/championswimmer/vuex-module-decorators) - a helpful package of decorators which allows you to write your vuex store modules in class-based syntax (inspired by vue-class-component). Also allows for easier namespacing and registration of modules into store at runtime after store is constructed - dynamic modules (I have all the modules configured this way in my project).
  - [`vue-snotify`](https://github.com/artemsky/vue-snotify) - a highly configurable toast notification library - comes hooked up to display login error & SignalR hub push notifications examples.
  - Two different loader components (spinner & authentication animation w/ callback for success/fail)
  - Babel integration to handle transformation of React-like JSX/TSX render function syntax - configured in package.json, but can be moved to a babelrc file. The app's VCheckbox.render.tsx & VDropdown.render.tsx components are live examples. This is a nice option to have for components that have very little HTML or for those that come from a React background and are comfortable with JSX syntax. Here is what the VCheckbox.render.tsx component looks like:
  
  Note: I wired up ```vue-styled-components``` for this component as well to fully demonstrate the scope of React's influence over Vue's ecosystem (check out the source code for VCheckbox.render.tsx to see how styled-components are implemented in Vue.js).
  
```TSX
import Vue, { VNode } from 'vue';
import styled from 'vue-styled-components';
import { Component, Prop } from 'vue-property-decorator';

const StyledSpan = styled.span`
  padding-left: 1.5rem;
`;

const StyledLabelWrapper = styled.label`
  display: flex;
  user-select: none;
  position: relative;
`;

const StyledInput = styled.input`
  /* ...CSS CODE */
  ...
`;

const StyledCheckIcon = styled.i`
  /* ...CSS CODE */
  ...
`;

@Component
export default class VCheckBox extends Vue {
  @Prop({ default: null }) public readonly id: string;
  @Prop({ default: null }) public readonly name: string;
  @Prop({ default: null }) public readonly label: string;
  @Prop({ default: false }) public readonly checked: boolean;
  @Prop({ default: false }) public readonly disabled: boolean;
  @Prop({ default: false }) public readonly readOnly: boolean;

  public render(): VNode {
    return (
      <StyledLabelWrapper>
        <StyledInput
          id={this.id}
          type='checkbox'
          name={this.name}
          value={this.checked}
          checked={this.checked}
          readOnly={this.readOnly}
          disabled={this.disabled}
          onChange={this.handleOnChange}
        />
        <StyledCheckIcon />
        {this.label && <StyledSpan>{this.label}</StyledSpan>}
      </StyledLabelWrapper>
    );
  }

  public handleOnChange(event: Event): void {
    this.$emit('checked', (event.target as HTMLInputElement).checked);
  }
}
```
    
- **Unit Testing**
  - Jest - configured in package.json and pointed to run all tests in any files under /ClientApp/tests. Run ```npm run test:unit``` to execute. Unit tests for components `VCheckBox.render.tsx` and `Spinner.vue` are included as examples.
  
## Setup
  - [Node.js version >= 8](https://nodejs.org/en/download/)
  - [.NET Core 3.1 SDK](https://dotnet.microsoft.com/download/dotnet-core/3.1)
  - Clone the repository and running ```npm install``` should properly restore all packages and dependencies - if the vendor.js & vendor-manifest.json did not get installed, run ```npm run webpack``` to execute the script added to accomplish this task.
  - A solution.sln file is added to act as an entry point to open the application in Visual Studio. Visual Studio 2017 and up and the [Vue.js Pack 2017](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.VuejsPack-18329) extension may need to be installed as well.
  - GhostUI/GhostUI.csproj acts as the entry point to open the application in Visual Studio Code.
