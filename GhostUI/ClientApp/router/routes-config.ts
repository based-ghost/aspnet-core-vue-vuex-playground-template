export const RoutesConfig = {
    Login: {
        path: '/',
        displayName: 'Logout',
        meta: {
            transitionName: 'fade',
            icon: 'sign-out-alt'
        }
    },
    Form: {
        path: '/form',
        displayName: 'Form',
        meta: {
            transitionName: 'pageSlideLeft',
            icon: 'pencil-alt'
        }
    },
    Dashboard: {
        path: '/dashboard',
        displayName: 'Dashboard',
        meta: {
            transitionName: 'fade',
            icon: 'home'
        }
    },
    FetchData: {
        path: '/fetchdata',
        displayName: 'Fetch Data',
        meta: {
            transitionName: 'pageSlideRight',
            icon: 'cloud'
        }
    }
};