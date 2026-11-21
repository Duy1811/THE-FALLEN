import { expect, test } from '@playwright/test'

test('renders the M1 foundation page and reports browser capabilities', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { name: 'THE FALLEN' })).toBeVisible()
  await expect(page.getByText('Chưa có gameplay, nhân vật hay thế giới game')).toBeVisible()
  await expect(page.getByTestId('diagnostic-canvas')).toHaveCount(1)
  await expect(page.getByTestId('webgl2-status')).toHaveAttribute('data-state', /^(ready|unsupported|error|lost)$/)
  await expect(page.getByTestId('webgpu-status')).toHaveAttribute('data-state', /^(detected|unavailable)$/)
})

test('explains unsupported WebGL 2 without falling back to WebGL 1', async ({ page }) => {
  await page.addInitScript(() => {
    HTMLCanvasElement.prototype.getContext = () => null
  })
  await page.goto('/')

  await expect(page.getByTestId('webgl2-status')).toHaveAttribute('data-state', 'unsupported')
  await expect(page.getByRole('alert')).toContainText('WebGL 2 không khả dụng')
  await expect(page.getByTestId('webgpu-status')).toBeVisible()
})

test('does not require WebGPU for the diagnostic page', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'gpu', { configurable: true, value: undefined })
  })
  await page.goto('/')

  await expect(page.getByTestId('webgpu-status')).toHaveAttribute('data-state', 'unavailable')
  await expect(page.getByTestId('webgl2-status')).toHaveAttribute('data-state', /^(ready|unsupported|error|lost)$/)
})

test('fits iPhone-sized viewports and navigates to diagnostics', async ({ page }) => {
  await page.goto('/')

  for (const width of [430, 375, 320]) {
    await page.setViewportSize({ width, height: 932 })
    const sizes = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      content: document.documentElement.scrollWidth,
    }))
    expect(sizes.content, `horizontal overflow at ${width}px`).toBeLessThanOrEqual(sizes.viewport)
  }

  await page.getByRole('link', { name: /KIỂM TRA THIẾT BỊ/ }).first().click()
  await expect(page).toHaveURL(/#diagnostics$/)
  await expect(page.getByRole('heading', { name: /KIỂM TRA THIẾT BỊ/ })).toBeVisible()
})

test('initializes a real WebGL 2 renderer when the test browser exposes it', async ({ page }) => {
  await page.goto('/')
  const supported = await page.evaluate(() => {
    const canvas = document.createElement('canvas')
    return canvas.getContext('webgl2') !== null
  })
  test.skip(!supported, 'Headless browser has no working WebGL 2 context; physical device check remains required')

  await expect(page.getByTestId('webgl2-status')).toHaveAttribute('data-state', 'ready')
})
