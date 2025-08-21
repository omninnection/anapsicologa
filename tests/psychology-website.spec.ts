import { test, expect } from '@playwright/test';

test.describe('Psychology Website E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load homepage with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Ana/);
    
    // Verificar se elementos principais estão visíveis
    await expect(page.locator('text=Vamos conversar sobre você?')).toBeVisible();
    await expect(page.locator('text=Agendar Consulta')).toBeVisible();
  });

  test('should navigate through sections on mobile', async ({ page }) => {
    // Simular viewport mobile
    await page.setViewportSize({ width: 375, height: 812 });
    
    // Abrir menu mobile
    const menuButton = page.locator('button[aria-label="Menu"]');
    await expect(menuButton).toBeVisible();
    await menuButton.click();
    
    // Verificar se menu está aberto
    await expect(page.locator('text=Atividades')).toBeVisible();
    
    // Navegar para Atividades
    await page.locator('text=Atividades').click();
    await expect(page.locator('text=Explore seu mundo interior')).toBeVisible();
    
    // Navegar para Contato
    await page.locator('button[aria-label="Menu"]').click();
    await page.locator('text=Contato').click();
    await expect(page.locator('text=Vamos começar?')).toBeVisible();
  });

  test('should fill and submit contact form', async ({ page }) => {
    // Navegar para seção de contato
    await page.locator('text=Contato').first().click();
    
    // Preencher formulário
    await page.fill('input[name="name"]', 'João da Silva');
    await page.fill('input[name="email"]', 'joao.silva@email.com');
    await page.fill('input[name="phone"]', '(11) 99999-9999');
    await page.fill('textarea[name="message"]', 'Gostaria de agendar uma consulta.');
    
    // Submeter formulário
    await page.locator('button[type="submit"]').click();
    
    // Verificar mensagem de sucesso
    await expect(page.locator('text=Mensagem enviada com sucesso')).toBeVisible({ timeout: 10000 });
  });

  test('should have working phone links', async ({ page }) => {
    // Verificar link de telefone na home
    const phoneLink = page.locator('a[href="tel:+5511993758482"]');
    await expect(phoneLink).toBeVisible();
    
    // Verificar se o número está correto na página de contato
    await page.locator('text=Contato').first().click();
    await expect(page.locator('text=(11) 99375-8482')).toBeVisible();
  });

  test('should display activities section correctly', async ({ page }) => {
    // Navegar para atividades
    await page.locator('text=Atividades').first().click();
    
    // Verificar se todas as 5 atividades estão visíveis
    await expect(page.locator('text=Mandala Arquetípica')).toBeVisible();
    await expect(page.locator('text=Jornada do Herói')).toBeVisible();
    await expect(page.locator('text=Explorador de Arquétipos')).toBeVisible();
    await expect(page.locator('text=Constelação de Complexos')).toBeVisible();
    await expect(page.locator('text=Diário de Sonhos')).toBeVisible();
    
    // Verificar se a foto está sendo exibida
    await expect(page.locator('img[alt*="mandala"]')).toBeVisible();
  });

  test('should have responsive design', async ({ page }) => {
    // Testar desktop
    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(page.locator('.hidden.md\\:flex')).toBeVisible(); // Menu desktop
    
    // Testar mobile
    await page.setViewportSize({ width: 375, height: 812 });
    await expect(page.locator('button[aria-label="Menu"]')).toBeVisible(); // Menu mobile
  });

  test('should have accessibility features', async ({ page }) => {
    // Verificar se há textos alt em imagens
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      await expect(img).toHaveAttribute('alt');
    }
    
    // Verificar se botões têm aria-labels apropriados
    await expect(page.locator('button[aria-label="Menu"]')).toBeVisible();
    await expect(page.locator('button[aria-label="Voltar ao início"]')).toBeVisible();
  });
});