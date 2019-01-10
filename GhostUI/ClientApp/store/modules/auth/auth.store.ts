import { AuthApi } from '../../../api';
import { AuthState, AuthGetters, AuthActions, AuthMutations } from './types';
import { DefineGetters, DefineMutations, DefineActions } from 'vuex-type-helper';

const initialState = () => {
    return {
        token: '',
        status: '',
        userName: ''
    } as AuthState;
};

const getters: DefineGetters<AuthGetters, AuthState> = {
    authenticatedUserName: (state) => state.userName,
    isAuthenticated: (state) => !(state.token || '').isEmptyOrWhiteSpace() && (state.status || '').toLowerCase().trim() === 'success'
};

const actions: DefineActions<AuthActions, AuthState, AuthMutations, AuthGetters> = {
    clearAuthState: ({ commit }) => {
        commit('CLEAR_AUTH_STATE', {});
    },
    authRequest: ({ commit }, payload) => {
        return new Promise((resolve, reject) => {
            AuthApi.login(payload.credentials)
                .then(authUser => {
                    commit('AUTH_SUCCESS', { authUser })
                    resolve(authUser);
                })
                .catch(error => {
                    commit('AUTH_ERROR', error);                    
                    reject(error);
                });
        });
    },
    authLogout: () => {
        return new Promise((resolve, reject) => {
            AuthApi.logout()
                .then(() => {
                    resolve();
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
};

const mutations: DefineMutations<AuthMutations, AuthState> = {
    AUTH_SUCCESS: (state, { authUser }) => {
        state.status = authUser.status;
        state.token = authUser.token;
        state.userName = authUser.status;
    },
    AUTH_ERROR: (state) => {
        state.status = 'fail';
    },
    CLEAR_AUTH_STATE: (state) => {
        Object.assign(state, initialState());
    }
};

const authModule = {
    state: initialState(),
    getters,
    actions,
    mutations
};

export default authModule;