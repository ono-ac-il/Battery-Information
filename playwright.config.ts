import { defineConfig, devices } from '@playwright/test';

const port = process.env.port || 15000;
const localServer = 'http://127.0.0.1:' + port;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'dot',
  use: {
    baseURL: localServer,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],

  webServer: {
    command: 'npm run start',
    url: localServer,
    reuseExistingServer: !process.env.CI,
  },
});
