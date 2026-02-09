# Análisis: cuándo dejó de funcionar el responsivo (rama main)

## Resumen

- **La regla que oculta el sidebar en móvil existe desde el primer commit** (`12c61d6` - Initial commit).
- **En la rama main nunca se eliminó esa regla.** No hay ningún commit que quite `@media(max-width: 992px) { .col-xs-3 { display: none } }`.
- El responsivo puede “verse mal” por:
  1. La columna de contenido (`.col-md-9`) en Bootstrap 3 **no tiene ancho definido por debajo de 992px**, así que no se fuerza a 100% cuando la columna del sidebar se oculta.
  2. Otros estilos (padding, márgenes, contenedores) que se añadieron después en `index.css` / `main.css` pueden estar reduciendo el ancho útil en móvil.

## Historial relevante

### `css/main.css`

| Commit     | Fecha (aprox.) | Cambio |
|-----------|----------------|--------|
| `12c61d6` | Oct 2025       | **Initial commit.** Incluye `@media(max-width: 992px) { .col-xs-3 { display: none } }` y `.sidebar { display: none }` con `display: block` a partir de 992px. |
| `f8d9925` | Oct 2025       | Ampliar menú lateral (ancho sidebar 213px → 280px, paddings). **No toca** la regla de 992px. |
| `7c759a2` | Oct 2025       | Comentar padding del sidebar. **No toca** la regla de 992px. |
| `d6601a2` | Oct 2025       | Mejorar interactividad y diseño del sidebar. **No toca** la regla de 992px. |
| `478b0f4` | Oct 2025       | Cambiar color principal a magenta. **No toca** la regla de 992px. |

En **ningún** commit posterior se elimina ni se cambia el `@media(max-width: 992px)` que oculta `.col-xs-3`.

### `index.html`

En todos los commits de main revisados, el layout se mantiene:

- Columna del sidebar: `<div class="col-xs-3">`
- Columna de contenido: `<div class="col-md-9" role="main">`

No hay en main un cambio a `col-xs-12 col-md-3` ni a clases tipo `docs-sidebar-col` que hicieran dejar de aplicar la regla `.col-xs-3 { display: none }`.

## Conclusión

- **No hay una versión concreta de main en la que “dejara de funcionar” el responsivo por quitar la regla de 992px:** esa regla sigue presente en todo el historial.
- Lo que puede fallar en móvil es:
  - Que la columna principal no se fuerce a **100% de ancho** cuando el sidebar está oculto (falta de reglas tipo `.docs-main-col { width: 100% }` o equivalente para el contenedor del contenido).
  - Que **padding/márgenes** del `.docs-content` o del `.container` dejen el contenido muy estrecho en pantallas pequeñas.
  - Que **títulos** (p. ej. “Introducción”) sigan usando el espacio de 60px del ancla y se partan o se vean mal.

Por tanto, el “arreglo” del responsivo no pasa por recuperar un commit anterior de main, sino por **mantener la regla actual** que oculta `.col-xs-3` y **añadir/ajustar** en móvil:

- Ancho 100% para la columna de contenido.
- Contenedores y contenido con `max-width: 100%` y `box-sizing: border-box`.
- Ajustes de padding/márgenes y, si se quiere, menú lateral en formato drawer con botón “Menú” (como en los cambios que habíamos hecho en sesiones anteriores).

## Cómo comprobar en una versión antigua

```bash
# Ver main.css en el primer commit
git show 12c61d6:css/main.css | tail -20

# Ver main.css en un commit reciente de main
git show 478b0f4:css/main.css | tail -20
```

En ambos casos se verá la misma regla `@media(max-width: 992px) { .col-xs-3 { display: none } }`.
