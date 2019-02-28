import { DropdownOption } from '../store/modules/form/types';

/**
 * Global data consumed by App component - used by functional components via exposed parent prop
 */
export const sfcGlobalData = {
    FOOTER_TEXT: '\u00A9 2019 based-ghost LLC',
    VUE_ASPCORE_IMAGE: require('../assets/image/aspcore-vue.png')
};

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
    HEALTH_UI: 'http://localhost:52530/healthchecks-ui',
    HEALTH_JSON: 'http://localhost:52530/healthchecks-json',
    SWAGGER_DOCS: 'http://localhost:52530/docs'
};