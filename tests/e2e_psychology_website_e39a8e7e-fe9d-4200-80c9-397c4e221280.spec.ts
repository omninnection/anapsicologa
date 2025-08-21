
import { test } from '@playwright/test';
import { expect } from '@playwright/test';

test('E2E_Psychology_Website_2025-08-20', async ({ page, context }) => {
  
    // Click element
    await page.click('button[data-hamburger-button]');

    // Navigate to URL
    await page.goto('http://localhost:5176');

    // Click element
    await page.click('button[data-hamburger-button]');

    // Click element
    await page.click('.md\\:hidden button[aria-label="Menu"]');

    // Click element
    await page.click('button[aria-label="Menu"]');

    // Take screenshot
    await page.screenshot({ path: 'mobile_menu_opened.png' });

    // Click element
    await page.click('button:has-text("Atividades")');

    // Take screenshot
    await page.screenshot({ path: 'activities_page.png' });

    // Click element
    await page.click('button:has-text("Contato")');

    // Take screenshot
    await page.screenshot({ path: 'contact_page.png' });

    // Fill input field
    await page.fill('input[name="name"]', 'João da Silva');

    // Fill input field
    await page.fill('input[name="email"]', 'joao.silva@email.com');

    // Fill input field
    await page.fill('input[name="phone"]', '(11) 99999-9999');

    // Fill input field
    await page.fill('textarea[name="message"]', 'Gostaria de agendar uma consulta para conhecer melhor o trabalho com psicologia junguiana.');

    // Take screenshot
    await page.screenshot({ path: 'contact_form_filled.png' });

    // Click element
    await page.click('button[type="submit"]');

    // Take screenshot
    await page.screenshot({ path: 'form_submitted.png' });
});