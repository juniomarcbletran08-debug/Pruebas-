# IRONVAULT MARKET — Demostración

Sitio de demostración de un catálogo prémium de herramientas, desarrollado con React, TypeScript y Vite. No es una tienda operativa.

## Ejecutar

- `npm install`
- `npm run dev`
- `npm test`
- `npm run build`

## Publicar en Cloudflare Pages

- Comando de compilación: `npm run build`
- Directorio de salida: `dist`
- `wrangler.toml` configura el directorio de salida.

## Funciones de demostración

- Catálogo adaptable con búsqueda, filtros por categoría y ordenación.
- Fichas con marcas, modelos, referencias, características y precios de ejemplo.
- Consulta por WhatsApp con datos del producto; no procesa transacciones.
- Tema claro/oscuro y navegación adaptable a móviles.
- Panel de demostración en `/admin` con gestión local de productos e importación de PDF mediante PDF.js.
- Los PDF con texto seleccionable pueden generar borradores; cada borrador requiere revisión y aprobación. Los PDF escaneados necesitan OCR, que no está incluido.

## Límites

Esta aplicación es exclusivamente demostrativa: no hay compras, pagos ni pedidos. Los productos, imágenes y precios son ejemplos que deben validarse y sustituirse antes de cualquier uso comercial. El panel no tiene autenticación real y guarda cambios en `localStorage`, por lo que los cambios son locales a cada navegador y no se sincronizan entre dispositivos. No introduzcas credenciales ni datos sensibles. La extracción PDF es heurística y puede requerir corrección manual.

No se considera publicada hasta verificar una URL activa de Cloudflare Pages.
