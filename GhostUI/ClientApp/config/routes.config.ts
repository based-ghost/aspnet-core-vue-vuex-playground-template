import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type Route = {
  readonly path: string;
  readonly displayName: string;
  readonly meta: {
    readonly icon?: IconProp;
    readonly showInNav?: boolean;
    readonly transitionName?: string;
  };
};

export type RoutesConfig = { [key: string]: Route };

export const RoutesConfig: RoutesConfig = {
  Login: {
    path: "/",
    displayName: "Logout",
    meta: {
      showInNav: false,
      transitionName: "fade",
      icon: "sign-out-alt"
    }
  },
  Form: {
    path: "/form",
    displayName: "Form",
    meta: {
      showInNav: true,
      transitionName: "pageSlideLeft",
      icon: "pencil-alt"
    }
  },
  Dashboard: {
    path: "/dashboard",
    displayName: "Home",
    meta: {
      showInNav: true,
      transitionName: "fade",
      icon: "home"
    }
  },
  FetchData: {
    path: "/fetchdata",
    displayName: "Fetch",
    meta: {
      showInNav: true,
      transitionName: "pageSlideRight",
      icon: "cloud"
    }
  }
};
