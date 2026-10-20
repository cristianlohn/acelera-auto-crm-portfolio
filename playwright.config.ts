import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';

const listing = process.argv.includes('--list');
const configuredURL = process.env.E2E_BASE_URL;
if (!listing && (!configuredURL || process.env.E2E_ALLOW_MUTATIONS !== 'true')) {
  throw new Error('Set E2E_BASE_URL to an isolated sandbox and E2E_ALLOW_MUTATIONS=true. / Configure um sandbox isolado e autorize os dados de teste.');
}
const baseURL = configuredURL || 'http://127.0.0.1:3000';
if (!['http:', 'https:'].includes(new URL(baseURL).protocol)) throw new Error('Expected an HTTP(S) sandbox URL.');

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : 4,
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }], ['list']],
  use: {
    baseURL, actionTimeout: 10000, navigationTimeout: 30000,
    trace: 'on-first-retry', screenshot: 'only-on-failure', video: 'retain-on-failure',
  },
  projects: [
    { name: 'Desktop Chrome', use: { ...devices['Desktop Chrome'] } },
    { name: 'Mobile Chrome (Pixel 5)', use: { ...devices['Pixel 5'] } },
  ],
  // The CRM is started separately. No private app build, source imports or database teardown.
});
