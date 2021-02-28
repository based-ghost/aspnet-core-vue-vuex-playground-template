import { EventBus } from '@/event-bus';
import { SIGNALR_CONFIG } from '../config';
import { HubConnection, HubConnectionBuilder, HubConnectionState } from '@microsoft/signalr';

/**
 * SignalR API abstraction layer communication.
 * Configures/manages hub connections (typescript singleton pattern).
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
    if (this._hubConnection.state === HubConnectionState.Disconnected) {
      this._hubConnection
        .start()
        .catch((e) => console.error(e));
    }
  }

  private createConnection(): void {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl(SIGNALR_CONFIG.baseUrl)
      .build();
  }

  private hubToastMessage(
    message: string,
    title: string = SIGNALR_CONFIG.messageTitle,
    delay: number = SIGNALR_CONFIG.messageDelay
  ): void {
    setTimeout(() => {
      EventBus.$snotify.info(message, title);
    }, delay);
  }

  private registerOnServerEvents(): void {
    this._hubConnection.on(SIGNALR_CONFIG.events.login, () => {
      this.hubToastMessage('A user has logged in');
    });

    this._hubConnection.on(SIGNALR_CONFIG.events.logout, () => {
      this.hubToastMessage('A user has logged out');
    });

    this._hubConnection.on(SIGNALR_CONFIG.events.closeConnections, (reason: string) => {
      this._hubConnection
        .stop()
        .then(() => {
          this.hubToastMessage(`Hub closed (${reason})`);
        });
    });
  }
}

export const SignalRApi = SignalRService.Instance;
