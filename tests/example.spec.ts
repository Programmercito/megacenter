import { test, expect } from '@playwright/test';

test('leyendo peliculas', async ({ page }) => {
  await page.goto('https://cinecenter.com.bo/');
  // espero a que cargue 20 segundos la pagina
  await page.waitForTimeout(5000);
  // guardo una captura 
  await page.screenshot({ path: `cinecenter.png` });
  // obetenemos el modal que tiene la clase modal-content
  const boton = await page.$('.btn-cerrar');
  // si el modal existe lo cerramos
  if (boton) {
    // intento hacer clic en el botón de cierre dentro del modal
    await boton.click();
    await page.waitForTimeout(2000);

  }
  // cargamos capturamos la pantalla
  await page.screenshot({ path: `cinecenter2.png` });

  const dropdown = page.locator('span[class="e-ddl e-lib e-input-group e-control-container e-control-wrapper background e-valid-input"]');
  if (dropdown) {
    console.log('dropdown encontrado', dropdown.innerHTML);

  } else {
    console.log('dropdown no encontrado');
  }
  await page.waitForTimeout(2000);
  // cargamos capturamos la pantalla
  await page.screenshot({ path: `cinecenter3.png` });


});