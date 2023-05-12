import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/index.html');
});

const OUTPUTS = {
  "Lead Acid": "Life Cycle: 200-300, Cell Voltage: 2V, Peak Load Current: 5C, Toxicity: Very high",
  "Li-ion Cobalt": "Life Cycle: 500-1000, Cell Voltage: 3.6V, Peak Load Current: >3C, Toxicity: Low",
  "NiMH": "Life Cycle: 300-500, Cell Voltage: 1.2V, Peak Load Current: 5C, Toxicity: Low",
  "NiCd": "Life Cycle: 1000, Cell Voltage: 1.2V, Peak Load Current: 20C, Toxicity: Very high"
}

Object.keys(OUTPUTS).forEach((key) => {
  test(`${key} output`, async ({ page }) => {
    await page.locator('#inp').fill(key);
    await page.locator('#btn').click();
    await expect(decodeHTMLEntities(await page.innerHTML('#result'))).toBe(decodeHTMLEntities(OUTPUTS[key]));
  });
});

function decodeHTMLEntities(text) {
  const entities = {
    'gt': '>'
  };

  Object.keys(entities).forEach((key) => {
    text = text.replace(new RegExp('&' + key + ';', 'g'), entities[key]);
  });

  return text;
}