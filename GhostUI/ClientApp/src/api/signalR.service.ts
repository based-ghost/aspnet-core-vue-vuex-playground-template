import { EventBus } from '@/event-bus';
import { HubConnection, HubConnectionBuilder, HubConnectionState } from '@microsoft/signalr';

/**
 * SignalR hub defaults
 */
const _signalrConfig = {
  CONNECTION_DELAY: 0,
  HUB_MESSAGE_DELAY: 3000,
  BASE_URL: '/hubs/users',
  HUB_MESSAGE_TITLE: 'SignalR',
  LOGIN_USER_EVENT: 'UserLogin',
  LOGOUT_USER_EVENT: 'UserLogout',
  CLOSE_EVENT: 'CloseAllConnections'
};

/**
 * SignalR API abstraction layer communication - configures/manages hub connections
 */
class SignalRService {
  private _hubConnection: HubConnection;
  private static _signalRService: SignalRService;

  private constructor() {
    this.createConnection();
    this.registerOnServerEvents();
  }

  public static get Instance(): SignalRService {
    return this._signalRService || (this._signalRService = new this());
  }

  public startConnection(): void {
    if (this._hubConnection.state !== HubConnectionState.Connected) {
      setTimeout(() => {
        this._hubConnection.start()
          .catch(err => console.error(err));
      }, _signalrConfig.CONNECTION_DELAY);
    }
  }

  private createConnection(): void {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl(_signalrConfig.BASE_URL)
      .build();
  }

  private registerOnServerEvents(): void {
    this._hubConnection.on(_signalrConfig.LOGIN_USER_EVENT, () => {
      setTimeout(() => {
        EventBus.$snotify.info(
          'A user has logged in',
          _signalrConfig.HUB_MESSAGE_TITLE
        );
      }, _signalrConfig.HUB_MESSAGE_DELAY);
    });

    this._hubConnection.on(_signalrConfig.LOGOUT_USER_EVENT, () => {
      setTimeout(() => {
        EventBus.$snotify.info(
          'A user has logged out',
          _signalrConfig.HUB_MESSAGE_TITLE
        );
      }, _signalrConfig.HUB_MESSAGE_DELAY);
    });

    this._hubConnection.on(_signalrConfig.CLOSE_EVENT, (reason: string) => {
      this._hubConnection.stop().then(() => {
        setTimeout(() => {
          EventBus.$snotify.info(
            `Hub closed (${reason})`,
            _signalrConfig.HUB_MESSAGE_TITLE
          );
        }, _signalrConfig.HUB_MESSAGE_DELAY);
      });
    });
  }
}

export const SignalRApi = SignalRService.Instance;
