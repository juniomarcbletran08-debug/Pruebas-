# IRONVAULT MARKET

Marketplace demostrativo de herramientas profesionales construido con React, TypeScript y Vite.

## Desarrollo

- `npm install`
- `npm run dev`
- `npm test`
- `npm run build`

## Cloudflare Pages

Build command: `npm run build`; output directory: `dist`. `wrangler.toml` define el directorio de salida para Pages.

## Funciones incluidas

- Catálogo adaptable con búsqueda, categorías y orden por precio/nombre.
- Fichas de producto con marca, modelo, referencia, características y precio referencial.
- Consulta por WhatsApp con datos del producto; no se procesan compras, pagos ni pedidos.
- Tema claro/oscuro, vista móvil y panel de demostración en `/admin`.
- Importación de PDF mediante PDF.js con borradores pendientes de revisión y aprobación.

## Limitaciones importantes antes de producción

El panel administrativo de esta versión es **solo demostrativo**: no tiene autenticación segura de servidor. Los productos se guardan en `localStorage`, no en una base compartida, por lo que no se sincronizan entre dispositivos. No introduzcas credenciales ni datos sensibles. Para producción hay que integrar autenticación de servidor y persistencia Cloudflare D1/R2 mediante Pages Functions, con secretos de entorno y migraciones.

PDF.js extrae texto embebido; el reconocimiento de campos es heurístico, no garantiza identificar correctamente marcas, modelos o precios, y requiere verificación manual. Los PDF escaneados requieren OCR, no incluido.

Las imágenes de catálogo son ilustrativas y las fichas/precios de ejemplo deben validarse antes de su uso comercial. No se ha confirmado un despliegue público.
