import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type Route = {
  readonly path: string;
  readonly showInNav?: boolean;
  readonly displayName: string;
  readonly meta: {
    readonly icon?: IconProp;
    readonly transitionName?: string;
  };
};

export type RoutesConfig = { [key: string]: Route };

export const RoutesConfig: RoutesConfig = {
  Login: {
    path: "/",
    showInNav: false,
    displayName: "Logout",
    meta: {
      transitionName: "fade",
      icon: "sign-out-alt"
    }
  },
  Form: {
    path: "/form",
    showInNav: true,
    displayName: "Form",
    meta: {
      transitionName: "pageSlideLeft",
      icon: "pencil-alt"
    }
  },
  Dashboard: {
    path: "/dashboard",
    showInNav: true,
    displayName: "Home",
    meta: {
      transitionName: "fade",
      icon: "home"
    }
  },
  FetchData: {
    path: "/fetchdata",
    showInNav: true,
    displayName: "Fetch",
    meta: {
      transitionName: "pageSlideRight",
      icon: "cloud"
    }
  }
};
