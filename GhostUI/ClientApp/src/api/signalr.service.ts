import { EventBus } from '@/event-bus';
import { SIGNALR_CONFIG } from '../config';
import { HubConnection, HubConnectionBuilder, HubConnectionState, LogLevel } from '@microsoft/signalr';

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

  get connectionState(): HubConnectionState {
    return this._hubConnection?.state ?? HubConnectionState.Disconnected;
  }

  public async startConnection(): Promise<void> {
    try {
      await this._hubConnection?.start();
      console.assert(this.connectionState === HubConnectionState.Connected);
    } catch (e) {
      console.assert(this.connectionState === HubConnectionState.Disconnected);
      console.error(e);
      setTimeout(() => this.startConnection(), 5000);
    }
  }

  private createConnection(): void {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl(SIGNALR_CONFIG.baseUrl)
      .withAutomaticReconnect()
      .configureLogging(LogLevel.Information)
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

    this._hubConnection.on(SIGNALR_CONFIG.events.closeConnections, async (reason: string) => {
      try {
        await this._hubConnection.stop();
        this.hubToastMessage(`Hub closed (${reason})`);
      } catch (e) {
        console.error(e);
      }
    });
  }
}

export const SignalRApi = SignalRService.Instance;
