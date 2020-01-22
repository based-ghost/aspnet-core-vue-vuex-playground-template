import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type Route = {
  readonly path: string;
  readonly name: string;
  readonly meta: {
    readonly icon?: IconProp;
    readonly showInNav?: boolean;
    readonly transitionName?: string;
  };
};

export type RoutesConfig = { [key: string]: Route };

export const RoutesConfig = Object.freeze<RoutesConfig>({
  Login: {
    path: "/",
    name: "Logout",
    meta: {
      showInNav: false,
      transitionName: "fade",
      icon: "sign-out-alt"
    }
  },
  Form: {
    path: "/form",
    name: "Form",
    meta: {
      showInNav: true,
      transitionName: "pageSlideLeft",
    }
  },
  Dashboard: {
    path: "/dashboard",
    name: "Home",
    meta: {
      showInNav: true,
      transitionName: "fade",
    }
  },
  FetchData: {
    path: "/fetchdata",
    name: "Fetch",
    meta: {
      showInNav: true,
      transitionName: "pageSlideRight",
    }
  }
});
