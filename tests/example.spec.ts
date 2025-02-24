import { test, expect } from '@playwright/test';

test('leyendo peliculas', async ({ page }) => {
  await page.goto('https://cinecenter.com.bo/');
  // espero a que cargue 20 segundos la pagina
  await page.waitForTimeout(20000);
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
  // obtenemos el compoentne span dodne esta el combobox de sucursales con clase
  const sucursal = await page.$('.e-input-value');
  // si el componente existe
  if (sucursal) {
    await sucursal.click();
    await page.waitForTimeout(2000);
  }
  await page.screenshot({ path: `cinecenter3.png` });

});