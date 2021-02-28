/**
 * SignalR hub defaults
 * "baseUrl" needs full url or else prerendering fails (can't normalize /hubs/users)
 */
export type SignalRConfig = {
  baseUrl: string;
  messageTitle: string;
  messageDelay: number;
  events: Record<'login' | 'logout' | 'closeConnections', string>;
};

export const SIGNALR_CONFIG: SignalRConfig = {
  messageDelay: 3000,
  baseUrl: '/hubs/users',
  messageTitle: 'SignalR',
  events: {
    login: 'UserLogin',
    logout: 'UserLogout',
    closeConnections: 'CloseAllConnections',
  },
};