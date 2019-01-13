import { DropdownOption } from '../store/modules/form/types';

/**
 * Text that appears at bottom of all views/pages (footer)
 */
export const FOOTER_TEXT = '\u00A9 2019 based-ghost LLC';

/**
 * Dropdown test data
 */
export const DROPDOWN_TEST_DATA: DropdownOption[] = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
    { value: 4, label: 'Option 4' },
    { value: 5, label: 'Option 5' }
];

/**
 * HealthChecks/Swagger response path config
 */
export const spaNugetUrls = {
    health_ui: 'http://localhost:52530/healthchecks-ui',
    health_json: 'http://localhost:52530/healthchecks-json',
    swagger_docs: 'http://localhost:52530/docs'
};

/**
 * SIGNALR HUB defaults
 */
export const signalrService = {
    BASE_URL: '/hubs/users',
    CONNECTION_DELAY: 0,
    HUB_MESSAGE_DELAY: 3000,
    HUB_MESSAGE_TITLE: 'SignalR',
    LOGIN_USER_EVENT: 'UserLogin',
    LOGOUT_USER_EVENT: 'UserLogout',
    CLOSE_EVENT: 'CloseAllConnections'
};

/**
 * AuthController endpoints
 */
export const authService = {
    CONTROLLER_ID: 'Auth',
    LOGIN_RQ: 'Login',
    LOGOUT_RQ: 'Logout'
};

/**
 * SampleDataController endpoints
 */
export const sampleService = {
    CONTROLLER_ID: 'SampleData',
    GET_FORECASTS_RQ: 'GetWeatherForecasts'
};