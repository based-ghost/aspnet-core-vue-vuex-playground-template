﻿import { IDropdownOption } from '@/store/modules/form';

/**
 * Dropdown test data
 */
export const DROPDOWN_TEST_DATA: IDropdownOption[] = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
  { value: 4, label: 'Option 4' },
  { value: 5, label: 'Option 5' }
];

/**
 * HealthChecks/Swagger response path config
 */
export const nugetUrlConfig = Object.freeze<Record<string, string>>({
  HEALTH_UI: 'http://localhost:52530/healthchecks-ui',
  HEALTH_JSON: 'http://localhost:52530/healthchecks-json',
  SWAGGER_DOCS: 'http://localhost:52530/docs'
});
