# Análisis Completo del Flujo de la Página - Documentación DTEmite

## 📋 Índice
1. [Estructura General](#estructura-general)
2. [Carga de Recursos](#carga-de-recursos)
3. [Inicialización](#inicialización)
4. [Sistema de Navegación](#sistema-de-navegación)
5. [Componentes Interactivos](#componentes-interactivos)
6. [Flujo de Datos](#flujo-de-datos)
7. [Eventos y Listeners](#eventos-y-listeners)

---

## 🏗️ Estructura General

### HTML Base
- **Header fijo** (`navbar-fixed-top`): Navegación principal con menú horizontal
- **Sidebar** (`sidebar`): Navegación lateral con menú vertical
- **Contenido principal**: Secciones de documentación con clase `.docs-section`
- **Botones flotantes**: 
  - Botón "Volver al principio" (`#backToTop`)
  - Botón "Panel de Pruebas" (`#panelEnvioBtn`)
  - Botón "Visor JSON/XML" (`#jsonViewerBtn`)

### Estructura de Secciones
Cada sección tiene:
- `id` único (ej: `#encabezado`, `#detalles`)
- Clase `.docs-heading.section-title` para identificación
- Ejemplos de código con `highlight.js`
- Ejemplos JSON y XML

---

## 📦 Carga de Recursos

### Orden de Carga (en `<head>`)
1. **CSS:**
   - `bootstrap.min.css` - Framework Bootstrap
   - `railscasts.css` - Tema de sintaxis
   - `main.css` - Estilos principales
   - `index.css` - Estilos personalizados
   - Font Awesome - Iconos

2. **Scripts (al final del `<body>`):**
   ```html
   <script src="jquery.min.js"></script>          // 1. jQuery
   <script src="bootstrap.min.js"></script>        // 2. Bootstrap (incluye scrollspy)
   <script src="highlight.pack.js"></script>      // 3. Highlight.js
   <script src="main.js"></script>                // 4. Lógica principal
   <script src="panel-pruebas.js"></script>       // 5. Panel de pruebas
   <script src="modal-panel-envio.js"></script>  // 6. Modal de envío
   <script src="json-viewer.js"></script>         // 7. Visor JSON/XML
   ```

---

## 🚀 Inicialización

### 1. jQuery Ready (`main.js`)
```javascript
$(function() {
  // Inicializa scrollspy
  $body.scrollspy({ target: '.sidebar', offset: 80 });
  
  // Configura scroll suave
  // Inicializa popovers
  // Aplica highlight.js a bloques de código
});
```

### 2. DOMContentLoaded Events

**json-viewer.js:**
```javascript
function init() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSectionDetection);
  } else {
    initSectionDetection(); // Ya está listo
  }
}
```

**panel-pruebas.js:**
```javascript
document.addEventListener('DOMContentLoaded', function() {
  initializePanel();
});

$(document).ready(function() {
  initializePanel(); // Doble inicialización para compatibilidad
});
```

**modal-panel-envio.js:**
```javascript
document.addEventListener('DOMContentLoaded', function() {
  initializeShippingModal();
});
```

---

## 🧭 Sistema de Navegación

### ScrollSpy (Bootstrap + Custom)

#### 1. ScrollSpy de Bootstrap
- **Target:** `.sidebar`
- **Offset:** 80px
- **Funcionamiento:** Detecta automáticamente las secciones y marca como activo el item del menú correspondiente

#### 2. ScrollSpy Personalizado (`main.js`)
```javascript
$window.on('scroll', function() {
  // 1. Encuentra la sección actual basada en .docs-heading.section-title
  var currentSection = null;
  var sections = $('.docs-heading.section-title');
  
  sections.each(function() {
    var sectionTop = section.offset().top - 100;
    if (scrollTop >= sectionTop) {
      currentSection = section.attr('id');
    }
  });
  
  // 2. Actualiza sidebar
  $('.sidebar .nav li').removeClass('active');
  $('.sidebar .nav li a[href="#' + currentSection + '"]').parent().addClass('active');
  
  // 3. Actualiza navbar
  $('.navbar-nav > li').removeClass('active');
  // ... lógica para navbar y dropdowns
});
```

### Scroll Suave
```javascript
$('.sidebar a[href^="#"], .navbar-nav a[href^="#"]').click(function(e) {
  e.preventDefault();
  var targetOffset = targetElement.offset().top - 80;
  $('html, body').animate({
    scrollTop: targetOffset
  }, {
    duration: 1200,
    easing: 'easeInOutCubic'
  });
});
```

---

## 🎯 Componentes Interactivos

### 1. Visor JSON/XML (`json-viewer.js`)

#### Flujo de Apertura:
```
Usuario hace clic en botón { } 
  ↓
openJsonModal(getExampleJson())
  ↓
1. Genera JSON de ejemplo
2. Genera XML de ejemplo
3. Formatea ambos
4. Aplica highlight.js
5. Abre modal lateral derecho
6. detectCurrentSection() → Resalta sección activa
```

#### Sistema de Resaltado:
```javascript
// Mapeo de secciones
JSON_SECTION_MAP = {
  'encabezado': 'Documento.Encabezado',
  'detalles': 'Documento.Detalle',
  // ...
}

XML_SECTION_MAP = {
  'encabezado': 'Encabezado',
  'detalles': 'Detalle',
  // ...
}

// Detección automática
detectCurrentSection() {
  1. Busca item activo en sidebar
  2. Si está mapeado → highlightSection()
  3. Si NO está mapeado → clearHighlight()
  4. Si no hay item activo → busca por scroll
}
```

#### Event Listeners:
- **Scroll:** Detecta cambios de sección al hacer scroll
- **Clicks en menú:** Resalta sección correspondiente
- **MutationObserver:** Detecta cambios en sidebar (clase `active`)
- **Tabs:** Alterna entre JSON y XML

### 2. Panel de Pruebas (`panel-pruebas.js`)

#### Funcionalidad:
- Selector de tipo de documento (Factura, Nota de Crédito, etc.)
- Selector de método (REST, SOAP)
- Editor de JSON
- Botón de envío
- Visualización de respuesta

#### Flujo:
```
Usuario selecciona documento
  ↓
Carga template correspondiente
  ↓
Usuario edita JSON (opcional)
  ↓
Usuario hace clic en "Enviar"
  ↓
POST a API DTEmite
  ↓
Muestra respuesta
```

### 3. Modal de Envío (`modal-panel-envio.js`)

#### Funcionalidad:
- Selector de método de envío (CURL, NodeJS, Python, PHP, Java, Go)
- Ejemplos de código para cada método
- Funcionalidad de copiar código

#### Flujo:
```
Usuario hace clic en botón ⚙️
  ↓
Abre modal con selector de métodos
  ↓
Usuario selecciona método
  ↓
Muestra código de ejemplo
  ↓
Usuario puede copiar código
```

---

## 🔄 Flujo de Datos

### 1. Navegación → Resaltado JSON/XML

```
Usuario navega (scroll o click)
  ↓
ScrollSpy detecta sección activa
  ↓
Sidebar actualiza clase 'active'
  ↓
json-viewer.js detecta cambio (MutationObserver o scroll)
  ↓
detectCurrentSection()
  ↓
Si sección está mapeada:
  - highlightSection(sectionId)
  - Encuentra rango en JSON/XML
  - Aplica resaltado visual
Si NO está mapeada:
  - clearHighlight()
  - Scroll al inicio
```

### 2. Panel de Pruebas → API

```
Usuario selecciona template
  ↓
Carga JSON en editor
  ↓
Usuario edita (opcional)
  ↓
Usuario hace clic en "Enviar"
  ↓
POST a API DTEmite
  ↓
Recibe respuesta
  ↓
Muestra resultado
```

---

## 📡 Eventos y Listeners

### Eventos Globales

#### Scroll
- **main.js:** Actualiza ScrollSpy y menús activos
- **json-viewer.js:** Detecta cambios de sección para resaltado

#### Click
- **Navegación:** Scroll suave a secciones
- **Botones flotantes:** Abren modales/paneles
- **Menús:** Actualizan estado activo

#### DOMContentLoaded
- **main.js:** Inicializa ScrollSpy
- **json-viewer.js:** Inicializa detección de secciones
- **panel-pruebas.js:** Inicializa panel
- **modal-panel-envio.js:** Inicializa modal

### MutationObserver
- **json-viewer.js:** Detecta cambios en clase `active` del sidebar

### Keyboard
- **ESC:** Cierra modal JSON/XML

---

## 🎨 Estilos y Temas

### Highlight.js
- **Tema:** `railscasts.css`
- Se aplica automáticamente a todos los bloques `<pre><code>`

### Resaltado Personalizado
- **Clase:** `.json-highlighted-line`
- **Color:** Rosa (#de007e) con transparencia
- **Borde:** 3px sólido izquierdo
- **Animación:** `highlightPulse` (0.5s)

---

## 🔧 Configuraciones Importantes

### Offsets
- **ScrollSpy:** 80px
- **Scroll suave:** 80px (header fijo)
- **Detección de sección:** 100px (activación temprana)

### Timeouts
- **Scroll debounce:** 100ms
- **Click delay:** 300ms
- **Clear highlight reset:** 2000ms

### Mapeos
- **JSON:** Rutas con puntos (ej: `Documento.Encabezado`)
- **XML:** Etiquetas simples (ej: `Encabezado`)

---

## 🐛 Posibles Conflictos

### 1. Múltiples Inicializaciones
- Algunos scripts se inicializan tanto con `DOMContentLoaded` como con `jQuery.ready`
- **Solución:** Verificaciones de estado antes de inicializar

### 2. ScrollSpy Duplicado
- Bootstrap ScrollSpy + ScrollSpy personalizado
- **Solución:** Ambos funcionan en paralelo, el personalizado tiene prioridad

### 3. Highlight.js
- Se aplica automáticamente y también manualmente en json-viewer
- **Solución:** Verificaciones antes de aplicar

---

## 📊 Diagrama de Flujo Principal

```
PÁGINA CARGA
    ↓
Carga CSS y Scripts
    ↓
jQuery Ready
    ↓
Inicializa ScrollSpy
    ↓
Aplica Highlight.js
    ↓
Inicializa Componentes:
  - Panel de Pruebas
  - Modal de Envío
  - Visor JSON/XML
    ↓
LISTO PARA INTERACCIÓN

USUARIO NAVEGA
    ↓
Scroll Event
    ↓
ScrollSpy detecta sección
    ↓
Actualiza menús (sidebar + navbar)
    ↓
Si visor JSON está abierto:
  - Detecta sección activa
  - Resalta en JSON/XML
```

---

## ✅ Checklist de Funcionalidades

- [x] ScrollSpy automático
- [x] Scroll suave
- [x] Resaltado de código
- [x] Visor JSON/XML con resaltado dinámico
- [x] Panel de pruebas de API
- [x] Modal de ejemplos de código
- [x] Botón volver al principio
- [x] Popovers informativos
- [x] Responsive design
- [x] Navegación sidebar + navbar sincronizada

---

## 🚀 Mejoras Futuras Sugeridas

1. **Lazy Loading:** Cargar secciones bajo demanda
2. **Cache:** Guardar estado del visor JSON/XML
3. **Búsqueda:** Implementar búsqueda en documentación
4. **Historial:** Guardar historial de navegación
5. **Export:** Exportar JSON/XML resaltado
6. **Temas:** Selector de temas (claro/oscuro)

---

# 📚 Resumen de la Documentación

## 🎯 Propósito General

La documentación DTEmite v2.0 es una guía completa para la integración con el sistema de gestión de documentos tributarios electrónicos (DTE) de Chile. Proporciona toda la información necesaria para que desarrolladores externos puedan integrar sus aplicaciones con la plataforma DTEmite mediante APIs REST y SOAP.

---

## 📖 Contenido de la Documentación

### 1. **Introducción** (`#intro`)
- **Propósito:** Explicación general del formato JSON/XML para documentos electrónicos
- **Contenido:**
  - Formato de archivo con nodo raíz único (DTE)
  - Codificación ISO-8859-1 (ISO LATIN1)
  - Tabla de caracteres especiales y sus siglas de escape
  - Reglas importantes:
    - Campos con ubicación, tipo y máximo de caracteres definidos
    - Nombres de nodos "case sensitive" (sensibles a mayúsculas/minúsculas)
    - Ejemplo: `Caratula` ≠ `caratula`

### 2. **Encabezado del Documento** (`#encabezado`)
- **Descripción:** Estructura y campos del encabezado de un DTE
- **Componentes principales:**
  - **Sistema:** Credenciales de autenticación (nombre, RUT, usuario, clave)
  - **IdDoc:** Identificación del documento (TipoDTE, Folio, FchEmis, FchVenc, MntBruto)
  - **Emisor:** Información del emisor (RUT, Razón Social, Giro, Dirección, Comuna, Ciudad)
  - **Receptor:** Información del receptor (RUT, Razón Social, Correo, Dirección)
  - **Totales:** Totales del documento (MntNeto, MntExe, TasaIVA, IVA, MntTotal)
- **Ejemplos:** JSON y XML completos con todos los campos

### 3. **Detalles del Documento** (`#detalles`)
- **Descripción:** Estructura de los ítems/líneas de detalle del documento
- **Campos principales:**
  - `NroLinDet`: Número de línea de detalle
  - `CdgItem`: Código del ítem (TpoCodigo, VlrCodigo)
  - `NmbItem`: Nombre/descripción del ítem
  - `QtyItem`: Cantidad
  - `UnmdItem`: Unidad de medida
  - `PrcItem`: Precio unitario
  - `MontoItem`: Monto total de la línea
  - `DescuentoPct`, `DescuentoMonto`: Descuentos aplicados
  - `CodImpAdic`: Código de impuesto adicional
- **Ejemplos:** Múltiples líneas de detalle en JSON y XML

### 4. **Descuento/Recargo Global** (`#descuento`)
- **Descripción:** Aplicación de descuentos o recargos globales al documento
- **Campos:**
  - `NroLinDR`: Número de línea de descuento/recargo (1-20)
  - `TpoMov`: Tipo de movimiento (D: Descuento, R: Recargo)
  - `TpoValor`: Tipo de valor (%: Porcentaje, $: Monto)
  - `ValorDR`: Valor del descuento/recargo
  - `GlosaDR`: Especificación del descuento/recargo (máx. 45 caracteres)
  - `IndExeDR`: Indicador de exención (opcional)
- **Ejemplos:** JSON y XML con descuentos y recargos

### 5. **Referencias del Documento** (`#referencia`)
- **Descripción:** Referencias a otros documentos relacionados
- **Campos:**
  - `NroLinRef`: Número de referencia (1-20)
  - `TpoDocRef`: Tipo de documento referenciado (código SII)
  - `FolioRef`: Folio del documento referenciado
  - `FchRef`: Fecha del documento referenciado
  - `CodRef`: Código de referencia
  - `RazonRef`: Razón de la referencia (ej: "Anula documento", "ORDEN DE COMPRA")
- **Tabla de tipos de documentos:** Códigos SII para diferentes tipos de DTE
- **Ejemplos:** JSON y XML con referencias

### 6. **Ejemplos para Orden de Compra** (`#ejemplos`)
- **Descripción:** Ejemplos específicos para integración con órdenes de compra
- **Contenido:** Ejemplos JSON y XML mostrando cómo referenciar órdenes de compra en documentos

### 7. **Campos Adicionales** (`#campo_adicional`)
- **Descripción:** Campos personalizados adicionales para documentos impresos
- **Estructura:**
  - `Adicional` → `NodosA` → Array de objetos `valor`
  - Permite agregar información personalizada al documento
- **Ejemplos:** JSON y XML con campos adicionales

### 8. **Métodos y Parámetros** (`#funcionalidades`)
- **Descripción:** Documentación técnica de los métodos REST disponibles
- **Endpoint principal:**
  ```
  https://sistema.dtemite.cl/sistema/Backend/WsMaster/ApiIntegracionController.php/Api/Documento
  ```
- **Protocolo:** REST (Representational State Transfer)
- **Métodos HTTP:** POST, GET, PUT, DELETE (según funcionalidad)
- **Contenido:**
  - Descripción de cada método
  - Parámetros requeridos y opcionales
  - Formatos de request y response
  - Códigos de estado HTTP
  - Ejemplos de uso

---

## 🔌 APIs Disponibles

### 9. **API Emisión Documentos Electrónicos** (`#api_emision`)
- **Funcionalidad:** Emisión de documentos tributarios electrónicos (DTE)
- **Tipos de documentos soportados:**
  - Facturas Electrónicas (TipoDTE: 33)
  - Notas de Crédito (TipoDTE: 61)
  - Notas de Débito (TipoDTE: 56)
  - Guías de Despacho (TipoDTE: 52)
  - Y otros tipos según normativa SII
- **Características:**
  - Validación automática de datos
  - Generación de timbre electrónico
  - Envío automático al SII
  - Generación de PDF
  - Envío de email al receptor (opcional)
- **Ejemplos:** REST y SOAP con diferentes lenguajes de programación

### 10. **API Emisión Boletas de Honorarios (BHE)** (`#api_bhe`)
- **Funcionalidad:** Emisión específica de boletas de honorarios electrónicas
- **Características especiales:**
  - Formato específico para profesionales independientes
  - Retención de impuestos
  - Validaciones específicas para BHE
- **Ejemplos:** JSON y XML para boletas de honorarios

### 11. **API Aceptación y Rechazo Documentos de Compra** (`#api_aceptacion_rechazo`)
- **Funcionalidad:** Gestión de aceptación/rechazo de documentos de compra
- **Casos de uso:**
  - Aceptar documentos recibidos
  - Rechazar documentos con motivo
  - Consultar estado de aceptación
- **Flujo:** Proceso de aceptación/rechazo según normativa

### 12. **API Anulación Guías de Despacho Electrónicas** (`#api_anulacion_guias`)
- **Funcionalidad:** Anulación de guías de despacho electrónicas
- **Características:**
  - Anulación de guías emitidas
  - Validación de permisos
  - Generación de documentos de anulación
- **Ejemplos:** Request y response para anulación

### 13. **API Conciliación Bancaria** (`#api_conciliacion_bancaria`)
- **Funcionalidad:** Integración con sistemas bancarios para conciliación
- **Características:**
  - Consulta de movimientos bancarios
  - Conciliación automática
  - Reportes de conciliación
- **Uso:** Integración con sistemas contables

### 14. **API Consulta RCV desde SII** (`#api_consulta_rcv`)
- **Funcionalidad:** Consulta de información desde el Registro de Compras y Ventas (RCV) del SII
- **Características:**
  - Consulta de documentos recibidos
  - Validación de documentos
  - Información de contribuyentes
- **Autenticación:** Requiere credenciales SII

### 15. **Diccionario Response API RCV** (`#diccionario_rcv`)
- **Descripción:** Documentación completa de las respuestas de la API RCV
- **Contenido:**
  - Estructura de objetos de respuesta
  - Campos y tipos de datos
  - Códigos de estado
  - Mensajes de error
  - Ejemplos de respuestas exitosas y errores

### 16. **Diccionario API Ctas Ctes** (`#diccionario_ctas_ctes`)
- **Descripción:** Documentación de la API de Cuentas Corrientes
- **Funcionalidad:** Gestión de cuentas corrientes con clientes/proveedores
- **Contenido:**
  - Estructura de datos
  - Métodos disponibles
  - Ejemplos de uso

---

## 🛠️ Herramientas de Prueba

### Panel de Pruebas de Integración (`#panel_pruebas`)
- **Funcionalidad:** Interfaz web para probar las APIs
- **Características:**
  - Selector de tipo de documento (Factura, Nota de Crédito, etc.)
  - Selector de método (REST, SOAP)
  - Editor JSON integrado
  - Envío directo a la API
  - Visualización de respuestas
  - Manejo de errores
- **Templates disponibles:**
  - Factura Electrónica
  - Nota de Crédito
  - Nota de Débito
  - Guía de Despacho
  - Y otros tipos de documentos

### Modal de Ejemplos de Código
- **Funcionalidad:** Ejemplos de código para diferentes lenguajes
- **Lenguajes soportados:**
  - cURL
  - Node.js (Axios, Fetch, Request)
  - Python (requests, urllib)
  - PHP (cURL, Guzzle)
  - Java (HttpURLConnection, OkHttp)
  - Go (net/http)
- **Características:**
  - Código listo para usar
  - Funcionalidad de copiar
  - Ejemplos con diferentes métodos HTTP

---

## 📋 Tipos de Documentos Soportados

### Documentos Tributarios Electrónicos (DTE)
- **Factura Electrónica** (TipoDTE: 33)
- **Factura Exenta** (TipoDTE: 34)
- **Factura de Compra** (TipoDTE: 46)
- **Nota de Débito** (TipoDTE: 56)
- **Nota de Crédito** (TipoDTE: 61)
- **Guía de Despacho** (TipoDTE: 52)
- **Guía de Despacho Electrónica** (TipoDTE: 52)
- **Boleta de Honorarios** (BHE)
- Y otros según normativa SII

---

## 🔐 Autenticación y Seguridad

### Credenciales del Sistema
Cada request requiere:
- **nombre:** Nombre del sistema
- **rut:** RUT de la empresa
- **usuario:** Usuario de integración
- **clave:** Clave en Base64

### Seguridad
- Comunicación HTTPS
- Validación de credenciales
- Tokens de autenticación (según método)
- Rate limiting
- Validación de datos de entrada

---

## 📊 Formatos Soportados

### JSON
- Formato principal para APIs REST
- Codificación: UTF-8 o ISO-8859-1
- Estructura jerárquica con nodos anidados
- Validación de esquema

### XML
- Formato alternativo y para SOAP
- Codificación: ISO-8859-1
- Estructura con etiquetas XML
- Validación XSD

### SOAP
- Protocolo para servicios web
- WSDL disponible
- Envelope SOAP estándar
- Ejemplos para diferentes lenguajes

---

## 🎯 Casos de Uso Principales

1. **Emisión de Facturas Electrónicas**
   - Integración con sistemas de facturación
   - Generación automática de DTE
   - Envío al SII
   - Generación de PDF

2. **Gestión de Documentos de Compra**
   - Recepción de documentos
   - Aceptación/rechazo
   - Validación automática

3. **Conciliación Contable**
   - Integración con sistemas contables
   - Conciliación bancaria
   - Reportes automáticos

4. **Consultas al SII**
   - Validación de contribuyentes
   - Consulta de documentos
   - Información RCV

---

## 📝 Notas Importantes

### Validaciones
- Todos los campos tienen validaciones específicas
- Tipos de datos estrictos
- Longitudes máximas definidas
- Formatos de fecha específicos (YYYY-MM-DD)
- RUTs con formato chileno (12345678-9)

### Errores Comunes
- Nombres de nodos con mayúsculas/minúsculas incorrectas
- Campos requeridos faltantes
- Formatos de fecha incorrectos
- RUTs mal formateados
- Valores fuera de rango

### Mejores Prácticas
- Validar datos antes de enviar
- Manejar errores apropiadamente
- Implementar retry logic
- Logging de requests/responses
- Testing con datos de prueba

---

## 🔗 Recursos Adicionales

- **Sistema DTEmite:** https://sistema.dtemite.cl/Login
- **Documentación SII:** Referencias a normativa oficial
- **Ejemplos de código:** Disponibles en múltiples lenguajes
- **Panel de pruebas:** Interfaz web para testing

---

*Documento generado automáticamente - Análisis del flujo completo de la página DTEmite*

