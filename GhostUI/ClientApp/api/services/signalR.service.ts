import { EventBus } from '../../event-bus';
import { signalrService } from '../../config/constants';
import { HubConnection, HubConnectionBuilder, HubConnectionState } from '@aspnet/signalr';

/**
 * SignalR API abstraction layer communication - configures/manages hub connections
 */
class SignalRService {
    private _hubConnection: HubConnection;
    private static _signalRService: SignalRService;

    public static get Instance(): SignalRService {
        return this._signalRService || (this._signalRService = new this());
    }

    private constructor() {
        this.createConnection();
        this.registerOnServerEvents();
    }

    public startConnection(): void {
        if (this._hubConnection.state === HubConnectionState.Connected)
            return;

        setTimeout(() => {
            this._hubConnection.start().catch((error) => {
                console.error(error.toString());
            });
        }, signalrService.CONNECTION_DELAY);
    }

    private createConnection(): void {
        this._hubConnection = new HubConnectionBuilder()
            .withUrl(signalrService.BASE_URL)
            .build();
    }

    private registerOnServerEvents(): void {
        this._hubConnection.on(signalrService.LOGIN_USER_EVENT, () => {
            setTimeout(() => {
                EventBus.$snotify.info('A user has logged in', signalrService.HUB_MESSAGE_TITLE);
            }, signalrService.HUB_MESSAGE_DELAY);
        });

        this._hubConnection.on(signalrService.LOGOUT_USER_EVENT, () => {
            setTimeout(() => {
                EventBus.$snotify.info('A user has logged out', signalrService.HUB_MESSAGE_TITLE);
            }, signalrService.HUB_MESSAGE_DELAY);
        });

        this._hubConnection.on(signalrService.CLOSE_EVENT, (reason: string) => {
            this._hubConnection.stop().then(() => {
                setTimeout(() => {
                    EventBus.$snotify.info(`Hub closed (${reason})`, signalrService.HUB_MESSAGE_TITLE);
                }, signalrService.HUB_MESSAGE_DELAY);
            });
        });
    }
}

export const SignalRApi = SignalRService.Instance;