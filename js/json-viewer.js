/**
 * JSON/XML Viewer - Visor JSON y XML con resaltado dinámico según sección del menú
 * 
 * Este módulo encapsula toda la lógica del visor JSON/XML, incluyendo:
 * - Mapeo entre secciones del menú y nodos del JSON/XML
 * - Resaltado dinámico de la parte del JSON/XML correspondiente
 * - Detección de navegación por scroll o click
 * - Soporte para alternar entre JSON y XML
 */

(function() {
  'use strict';

  /**
   * Mapeo entre secciones del menú (IDs) y rutas en el objeto JSON
   * Define la relación entre los IDs de las secciones y las rutas en el objeto JSON
   */
  const JSON_SECTION_MAP = {
    'encabezado': 'Documento.Encabezado',
    'detalles': 'Documento.Detalle',
    'descuento': 'Documento.DscRcgGlobal',
    'referencia': 'Documento.Referencia',
    'ejemplos': 'Documento.Referencia', // Ejemplo para Orden de Compra usa la misma lógica que Referencias
    'campo_adicional': 'Documento.Adicional'
  };

  /**
   * Mapeo entre secciones del menú (IDs) y etiquetas XML
   * Define la relación entre los IDs de las secciones y las etiquetas XML correspondientes
   */
  const XML_SECTION_MAP = {
    'encabezado': 'Encabezado',
    'detalles': 'Detalle',
    'descuento': 'DscRcgGlobal',
    'referencia': 'Referencia',
    'ejemplos': 'Referencia', // Ejemplo para Orden de Compra usa la misma lógica que Referencias
    'campo_adicional': 'Adicional'
  };

  /**
   * Estado del visor JSON/XML
   */
  let viewerState = {
    currentJson: null,
    formattedJson: null,
    currentXml: null,
    formattedXml: null,
    currentFormat: 'json', // 'json' o 'xml'
    currentSection: null,
    modal: null,
    jsonContent: null,
    xmlContent: null,
    jsonCodeElement: null,
    xmlCodeElement: null,
    isCleared: false // Flag para indicar que se debe mantener limpio
  };

  /**
   * Genera un JSON de ejemplo completo con todas las secciones del menú
   * Incluye: Sistema, Encabezado, Detalle, DscRcgGlobal, Referencia, Adicional
   */
  function getExampleJson() {
    return {
      "Sistema": {
        "nombre": "webbasico",
        "rut": "29282726-1",
        "usuario": "integrado_webbasico",
        "clave": "d2ViYmFzaWNvMjAyMQ=="
      },
      "Documento": {
        "Encabezado": {
          "IdDoc": {
            "TipoDTE": "33",
            "Folio": "0",
            "MntBruto": "2",
            "FchEmis": "2024-01-20",
            "FchVenc": "2024-01-26"
          },
          "Emisor": {
            "RUTEmisor": "29282726-1",
            "RznSocEmisor": "EMPRESA DE PRUEBA",
            "GiroEmisor": "DESARROLLO DE SISTEMAS",
            "DirOrigen": "Avenida del Software #11001101",
            "CmnaOrigen": "PROVIDENCIA",
            "CiudadOrigen": "SANTIAGO"
          },
          "Receptor": {
            "RUTRecep": "76399744-8",
            "CdgIntRecep": "1000215-220",
            "RznSocRecep": "CLIENTE DE PRUEBA",
            "CorreoRecep": "prueba@dtemite.cl",
            "DirRecep": "CALLE A 50",
            "CmnaRecep": "SANTIAGO",
            "CiudadRecep": "SANTIAGO"
          },
          "Totales": {
            "MntNeto": "10000",
            "MntExe": "0",
            "TasaIVA": "19",
            "IVA": "1900",
            "MntTotal": "11900"
          }
        },
        "Detalle": [
          {
            "NroLinDet": "1",
            "CdgItem": {
              "TpoCodigo": "INT1",
              "VlrCodigo": "WWW"
            },
            "NmbItem": "Descripción de producto WWW",
            "DscItem": "Serie ABC",
            "QtyItem": "2",
            "UnmdItem": "M3",
            "PrcItem": "45305",
            "MontoItem": "90610"
          },
          {
            "NroLinDet": "2",
            "CdgItem": {
              "TpoCodigo": "INT1",
              "VlrCodigo": "XXX"
            },
            "NmbItem": "Descripción de producto XXX",
            "QtyItem": "1",
            "UnmdItem": "M3",
            "PrcItem": "4000",
            "MontoItem": "4000"
          }
        ],
        "DscRcgGlobal": [
          {
            "NroLinDR": "1",
            "TpoMov": "D",
            "TpoValor": "%",
            "ValorDR": "10",
            "GlosaDR": "Descuento por volumen"
          }
        ],
        "Referencia": [
          {
            "NroLinRef": "1",
            "TpoDocRef": "801",
            "FolioRef": "4505421654",
            "FchRef": "2024-01-15",
            "CodRef": "0",
            "RazonRef": "ORDEN DE COMPRA"
          }
        ],
        "Adicional": {
          "NodosA": [
            {
              "valor": "Vendedor: Juan Pérez"
            },
            {
              "valor": "Teléfono: +56 9 1234 5678"
            },
            {
              "valor": "Condición de pago: 30 días"
            }
          ]
        }
      }
    };
  }

  /**
   * Genera un XML de ejemplo completo con todas las secciones del menú
   * Incluye: Encabezado, Detalle, DscRcgGlobal, Referencia, Adicional
   */
  function getExampleXml() {
    return `<Encabezado>
  <IdDoc>
    <TipoDTE>33</TipoDTE>
    <Folio>0</Folio>
    <MntBruto>2</MntBruto>
    <FchEmis>2024-01-20</FchEmis>
    <FchVenc>2024-01-26</FchVenc>
  </IdDoc>
  <Emisor>
    <RUTEmisor>29282726-1</RUTEmisor>
    <RznSoc>EMPRESA DE PRUEBA</RznSoc>
    <GiroEmis>DESARROLLO DE SISTEMAS</GiroEmis>
    <DirOrigen>Avenida del Software #11001101</DirOrigen>
    <CmnaOrigen>PROVIDENCIA</CmnaOrigen>
    <CiudadOrigen>SANTIAGO</CiudadOrigen>
  </Emisor>
  <Receptor>
    <RUTRecep>76399744-8</RUTRecep>
    <RznSocRecep>CLIENTE DE PRUEBA</RznSocRecep>
    <CorreoRecep>prueba@dtemite.cl</CorreoRecep>
    <DirRecep>CALLE A 50</DirRecep>
    <CmnaRecep>SANTIAGO</CmnaRecep>
    <CiudadRecep>SANTIAGO</CiudadRecep>
  </Receptor>
  <Totales>
    <MntNeto>10000</MntNeto>
    <MntExe>0</MntExe>
    <TasaIVA>19</TasaIVA>
    <IVA>1900</IVA>
    <MntTotal>11900</MntTotal>
  </Totales>
</Encabezado>
<Detalle>
  <NroLinDet>1</NroLinDet>
  <CdgItem>
    <TpoCodigo>INT1</TpoCodigo>
    <VlrCodigo>WWW</VlrCodigo>
  </CdgItem>
  <NmbItem>Descripción de producto WWW</NmbItem>
  <DscItem>Serie ABC</DscItem>
  <QtyItem>2</QtyItem>
  <UnmdItem>M3</UnmdItem>
  <PrcItem>45305</PrcItem>
  <MontoItem>90610</MontoItem>
</Detalle>
<Detalle>
  <NroLinDet>2</NroLinDet>
  <CdgItem>
    <TpoCodigo>INT1</TpoCodigo>
    <VlrCodigo>XXX</VlrCodigo>
  </CdgItem>
  <NmbItem>Descripción de producto XXX</NmbItem>
  <QtyItem>1</QtyItem>
  <UnmdItem>M3</UnmdItem>
  <PrcItem>4000</PrcItem>
  <MontoItem>4000</MontoItem>
</Detalle>
<DscRcgGlobal>
  <NroLinDR>1</NroLinDR>
  <TpoMov>D</TpoMov>
  <TpoValor>%</TpoValor>
  <ValorDR>10</ValorDR>
  <GlosaDR>Descuento por volumen</GlosaDR>
</DscRcgGlobal>
<Referencia>
  <NroLinRef>1</NroLinRef>
  <TpoDocRef>801</TpoDocRef>
  <FolioRef>4505421654</FolioRef>
  <FchRef>2024-01-15</FchRef>
  <CodRef>0</CodRef>
  <RazonRef>ORDEN DE COMPRA</RazonRef>
</Referencia>
<Adicional>
  <NodosA>
    <valor>Vendedor: Juan Pérez</valor>
    <valor>Teléfono: +56 9 1234 5678</valor>
    <valor>Condición de pago: 30 días</valor>
  </NodosA>
</Adicional>`;
  }


  /**
   * Obtiene el valor de un objeto usando una ruta de puntos (ej: "Documento.Encabezado")
   */
  function getValueByPath(obj, path) {
    const keys = path.split('.');
    let current = obj;
    
    for (let key of keys) {
      if (current === null || current === undefined) {
        return null;
      }
      current = current[key];
    }
    
    return current;
  }

  /**
   * Encuentra el rango de líneas en el JSON formateado que corresponde a una ruta
   * Usa un algoritmo basado en indentación y estructura
   */
  function findJsonRange(formattedJson, jsonPath, jsonObject) {
    const targetValue = getValueByPath(jsonObject, jsonPath);
    
    if (!targetValue) {
      return null;
    }

    const lines = formattedJson.split('\n');
    const pathParts = jsonPath.split('.');
    const searchKey = pathParts[pathParts.length - 1]; // Última parte de la ruta
    
    let startLine = -1;
    let endLine = -1;
    let startIndent = -1;
    let inTarget = false;
    let braceDepth = 0;
    let bracketDepth = 0;
    
    // Buscar la línea donde comienza la clave objetivo
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      const indent = line.length - line.trimStart().length;
      
      // Contar llaves y corchetes para determinar profundidad
      for (let char of line) {
        if (char === '{') braceDepth++;
        if (char === '}') braceDepth--;
        if (char === '[') bracketDepth++;
        if (char === ']') bracketDepth--;
      }
      
      // Buscar la clave objetivo con el contexto correcto
      if (startLine === -1) {
        // Buscar la clave exacta con comillas
        const keyPattern = new RegExp('"\\s*' + searchKey + '\\s*"\\s*:');
        if (keyPattern.test(trimmedLine)) {
          // Verificar contexto: debe estar dentro de "Documento"
          let contextValid = true;
          if (pathParts.length > 1) {
            // Verificar que estemos dentro del contexto correcto
            const parentKey = pathParts[pathParts.length - 2];
            let foundParent = false;
            let parentIndent = -1;
            
            // Buscar hacia atrás para encontrar el padre
            for (let j = i - 1; j >= 0; j--) {
              const prevLine = lines[j].trim();
              const prevIndent = lines[j].length - lines[j].trimStart().length;
              
              if (prevIndent < indent && prevLine.includes('"' + parentKey + '"')) {
                foundParent = true;
                parentIndent = prevIndent;
                break;
              }
            }
            
            contextValid = foundParent;
          }
          
          if (contextValid) {
            startLine = i;
            startIndent = indent;
            inTarget = true;
            continue;
          }
        }
      }
      
      // Si encontramos el inicio, buscar el final
      if (inTarget && startLine !== -1) {
        // El final es cuando la indentación vuelve al mismo nivel o menor
        // y encontramos una llave o corchete de cierre
        if (indent <= startIndent && (trimmedLine === '}' || trimmedLine === ']' || trimmedLine === '},' || trimmedLine === '],')) {
          // Verificar que no sea el inicio mismo
          if (i > startLine) {
            endLine = i;
            break;
          }
        }
      }
    }
    
    // Si no encontramos el final, buscar hasta el final del documento o siguiente clave del mismo nivel
    if (startLine !== -1 && endLine === -1) {
      for (let i = startLine + 1; i < lines.length; i++) {
        const line = lines[i];
        const indent = line.length - line.trimStart().length;
        const trimmedLine = line.trim();
        
        // Si encontramos una clave al mismo nivel o menor, ese es el final
        if (indent <= startIndent && trimmedLine && !trimmedLine.startsWith('//')) {
          const keyMatch = trimmedLine.match(/^"([^"]+)":/);
          if (keyMatch || trimmedLine === '}' || trimmedLine === ']' || trimmedLine === '},' || trimmedLine === '],') {
            endLine = i - 1;
            break;
          }
        }
      }
      
      // Si aún no encontramos el final, usar el final del documento
      if (endLine === -1) {
        endLine = lines.length - 1;
      }
    }
    
    return startLine !== -1 ? { start: startLine, end: endLine } : null;
  }

  /**
   * Encuentra el rango de líneas en el XML formateado que corresponde a una etiqueta
   */
  function findXmlRange(formattedXml, xmlTag) {
    if (!formattedXml || !xmlTag) {
      return null;
    }

    const lines = formattedXml.split('\n');
    const openingTag = '<' + xmlTag + '>';
    const closingTag = '</' + xmlTag + '>';
    const selfClosingTag = '<' + xmlTag + '/>';
    
    let startLine = -1;
    let endLine = -1;
    let depth = 0;
    let inTarget = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Buscar la primera etiqueta de apertura (no anidada)
      if (startLine === -1) {
        // Verificar si es la etiqueta de apertura principal
        if (trimmedLine.includes(openingTag) && !trimmedLine.includes('</')) {
          // Verificar que no esté dentro de otra etiqueta del mismo tipo
          const lineIndent = line.length - line.trimStart().length;
          // Si la indentación es mínima o es la primera ocurrencia, es la etiqueta principal
          if (lineIndent <= 2) {
            startLine = i;
            inTarget = true;
            depth = 1;
            // Si es auto-cerrada, el final es la misma línea
            if (trimmedLine.includes(selfClosingTag) || trimmedLine.includes('</' + xmlTag + '>')) {
              endLine = i;
              break;
            }
            continue;
          }
        }
      }
      
      // Si encontramos el inicio, buscar el cierre
      if (inTarget && startLine !== -1) {
        // Contar etiquetas anidadas del mismo tipo
        if (trimmedLine.includes(openingTag) && !trimmedLine.includes('</')) {
          depth++;
        }
        if (trimmedLine.includes(closingTag)) {
          depth--;
          if (depth === 0) {
            endLine = i;
            break;
          }
        }
      }
    }
    
    // Si no encontramos el final, buscar hasta el final del documento o siguiente etiqueta principal
    if (startLine !== -1 && endLine === -1) {
      const startIndent = lines[startLine].length - lines[startLine].trimStart().length;
      for (let i = startLine + 1; i < lines.length; i++) {
        const line = lines[i];
        const indent = line.length - line.trimStart().length;
        const trimmedLine = line.trim();
        
        // Si encontramos una etiqueta al mismo nivel o menor, ese es el final
        if (indent <= startIndent && trimmedLine && trimmedLine.startsWith('<') && !trimmedLine.startsWith('<!--')) {
          endLine = i - 1;
          break;
        }
      }
      
      // Si aún no encontramos el final, usar el final del documento
      if (endLine === -1) {
        endLine = lines.length - 1;
      }
    }
    
    return startLine !== -1 ? { start: startLine, end: endLine } : null;
  }

  /**
   * Limpia el resaltado y hace scroll al inicio del contenido
   */
  function clearHighlight() {
    if (!viewerState.modal || !viewerState.modal.classList.contains('json-viewer-open')) {
      return; // Modal no está abierto
    }

    // Marcar como limpiado para prevenir resaltado automático
    viewerState.isCleared = true;

    // Limpiar JSON
    if (viewerState.jsonCodeElement) {
      viewerState.jsonCodeElement.textContent = viewerState.formattedJson;
      viewerState.jsonCodeElement.className = 'lang-json';
      
      if (typeof hljs !== 'undefined' && hljs.highlightBlock) {
        try {
          hljs.highlightBlock(viewerState.jsonCodeElement);
        } catch (error) {
          console.warn('Error al aplicar resaltado de sintaxis JSON:', error);
        }
      }
    }

    // Limpiar XML
    if (viewerState.xmlCodeElement) {
      viewerState.xmlCodeElement.textContent = viewerState.formattedXml;
      viewerState.xmlCodeElement.className = 'lang-xml';
      
      if (typeof hljs !== 'undefined' && hljs.highlightBlock) {
        try {
          hljs.highlightBlock(viewerState.xmlCodeElement);
        } catch (error) {
          console.warn('Error al aplicar resaltado de sintaxis XML:', error);
        }
      }
    }

    // Scroll al inicio del contenido activo
    const activePanel = viewerState.currentFormat === 'json' 
      ? document.getElementById('jsonViewerPanel')
      : document.getElementById('xmlViewerPanel');
    
    if (activePanel) {
      activePanel.scrollTop = 0;
    }

    viewerState.currentSection = null;
    
    // El flag se reseteará desde detectCurrentSection() cuando sea necesario
  }

  /**
   * Resalta una sección específica del JSON en el modal
   */
  function highlightJsonSection(sectionId) {
    if (!viewerState.modal || !viewerState.modal.classList.contains('json-viewer-open')) {
      return; // Modal no está abierto
    }

    // Si está limpiado, resetear el flag para permitir resaltado
    if (viewerState.isCleared) {
      viewerState.isCleared = false;
    }

    const jsonPath = JSON_SECTION_MAP[sectionId];
    if (!jsonPath || !viewerState.formattedJson || !viewerState.currentJson) {
      return;
    }

    const range = findJsonRange(viewerState.formattedJson, jsonPath, viewerState.currentJson);
    if (!range) {
      console.warn('No se pudo encontrar el rango para:', jsonPath);
      return;
    }

    // Remover resaltados anteriores
    const codeElement = viewerState.jsonCodeElement;
    if (!codeElement) return;

    // Primero aplicar highlight.js al JSON completo
    codeElement.textContent = viewerState.formattedJson;
    codeElement.className = 'lang-json';
    
    if (typeof hljs !== 'undefined' && hljs.highlightBlock) {
      try {
        hljs.highlightBlock(codeElement);
      } catch (error) {
        console.warn('Error al aplicar resaltado de sintaxis:', error);
      }
    }
    
    // Obtener el HTML procesado por highlight.js
    let highlightedHtml = codeElement.innerHTML;
    
    // Dividir el HTML en líneas exactas (preservando el formato)
    const lines = viewerState.formattedJson.split('\n');
    const htmlLines = highlightedHtml.split('\n');
    
    // Crear nuevo HTML envolviendo solo las líneas que necesitan resaltado
    const newHtmlLines = htmlLines.map((htmlLine, index) => {
      const isHighlighted = index >= range.start && index <= range.end;
      
      if (isHighlighted && htmlLine.trim() !== '') {
        // Envolver solo el contenido sin modificar espacios
        return '<span class="json-highlighted-line">' + htmlLine + '</span>';
      }
      
      return htmlLine;
    });
    
    // Unir las líneas sin agregar espacios adicionales
    codeElement.innerHTML = newHtmlLines.join('\n');

    // Scroll a la sección resaltada
    const preElement = codeElement.parentElement;
    if (preElement) {
      const highlightedLines = codeElement.querySelectorAll('.json-highlighted-line');
      if (highlightedLines.length > 0) {
        highlightedLines[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

    viewerState.currentSection = sectionId;
  }

  /**
   * Resalta una sección específica del XML en el modal
   */
  function highlightXmlSection(sectionId) {
    if (!viewerState.modal || !viewerState.modal.classList.contains('json-viewer-open')) {
      return; // Modal no está abierto
    }

    // Si está limpiado, resetear el flag para permitir resaltado
    if (viewerState.isCleared) {
      viewerState.isCleared = false;
    }

    const xmlTag = XML_SECTION_MAP[sectionId];
    if (!xmlTag || !viewerState.formattedXml) {
      return;
    }

    const range = findXmlRange(viewerState.formattedXml, xmlTag);
    if (!range) {
      console.warn('No se pudo encontrar el rango XML para:', xmlTag);
      return;
    }

    // Remover resaltados anteriores
    const codeElement = viewerState.xmlCodeElement;
    if (!codeElement) return;

    // Primero aplicar highlight.js al XML completo
    codeElement.textContent = viewerState.formattedXml;
    codeElement.className = 'lang-xml';
    
    if (typeof hljs !== 'undefined' && hljs.highlightBlock) {
      try {
        hljs.highlightBlock(codeElement);
      } catch (error) {
        console.warn('Error al aplicar resaltado de sintaxis:', error);
      }
    }
    
    // Obtener el HTML procesado por highlight.js
    let highlightedHtml = codeElement.innerHTML;
    
    // Dividir el HTML en líneas exactas (preservando el formato)
    const lines = viewerState.formattedXml.split('\n');
    const htmlLines = highlightedHtml.split('\n');
    
    // Crear nuevo HTML envolviendo solo las líneas que necesitan resaltado
    const newHtmlLines = htmlLines.map((htmlLine, index) => {
      const isHighlighted = index >= range.start && index <= range.end;
      
      if (isHighlighted && htmlLine.trim() !== '') {
        // Envolver solo el contenido sin modificar espacios
        return '<span class="json-highlighted-line">' + htmlLine + '</span>';
      }
      
      return htmlLine;
    });
    
    // Unir las líneas sin agregar espacios adicionales
    codeElement.innerHTML = newHtmlLines.join('\n');

    // Scroll a la sección resaltada
    const preElement = codeElement.parentElement;
    if (preElement) {
      const highlightedLines = codeElement.querySelectorAll('.json-highlighted-line');
      if (highlightedLines.length > 0) {
        highlightedLines[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

    viewerState.currentSection = sectionId;
  }

  /**
   * Resalta una sección según el formato activo (JSON o XML)
   */
  function highlightSection(sectionId) {
    if (viewerState.currentFormat === 'json') {
      highlightJsonSection(sectionId);
    } else {
      highlightXmlSection(sectionId);
    }
  }

  /**
   * Escapa HTML para prevenir XSS
   */
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * Cambia entre formato JSON y XML en el visor
   */
  function switchViewerFormat(format) {
    if (!viewerState.modal || !viewerState.modal.classList.contains('json-viewer-open')) {
      return;
    }

    if (format !== 'json' && format !== 'xml') {
      return;
    }

    viewerState.currentFormat = format;

    // Actualizar tabs
    const tabs = document.querySelectorAll('.json-viewer-tab');
    tabs.forEach(tab => {
      if (tab.getAttribute('data-format') === format) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // Mostrar/ocultar paneles
    const jsonPanel = document.getElementById('jsonViewerPanel');
    const xmlPanel = document.getElementById('xmlViewerPanel');
    
    if (format === 'json') {
      if (jsonPanel) jsonPanel.style.display = 'block';
      if (xmlPanel) xmlPanel.style.display = 'none';
    } else {
      if (jsonPanel) jsonPanel.style.display = 'none';
      if (xmlPanel) xmlPanel.style.display = 'block';
    }

    // Si hay una sección activa, resaltarla en el nuevo formato
    if (viewerState.currentSection) {
      highlightSection(viewerState.currentSection);
    } else if (!viewerState.isCleared) {
      // Si no hay sección activa pero no está limpiado, detectar la sección actual
      detectCurrentSection();
    }
  }

  /**
   * Abre el modal del visor JSON/XML
   */
  function openJsonModal(jsonText) {
    console.log('🔍 Abriendo modal JSON/XML...', jsonText);
    
    // Inicializar referencias si no existen
    if (!viewerState.modal) {
      viewerState.modal = document.getElementById('jsonViewerModal');
    }
    if (!viewerState.jsonContent) {
      viewerState.jsonContent = document.getElementById('jsonViewerContent');
    }
    if (!viewerState.xmlContent) {
      viewerState.xmlContent = document.getElementById('xmlViewerContent');
    }
    
    if (!viewerState.modal) {
      console.error('❌ Modal no encontrado en el DOM');
      return;
    }
    
    if (!viewerState.jsonContent || !viewerState.xmlContent) {
      console.error('❌ Contenido del modal no encontrado');
      return;
    }
    
    console.log('✅ Modal encontrado:', viewerState.modal);
    console.log('✅ Contenido encontrado');
    
    try {
      // Parsear y formatear el JSON
      let jsonObject;
      let formattedJson;
      
      if (typeof jsonText === 'string') {
        jsonObject = JSON.parse(jsonText);
        formattedJson = JSON.stringify(jsonObject, null, 2);
      } else {
        jsonObject = jsonText;
        formattedJson = JSON.stringify(jsonText, null, 2);
      }
      
      // Guardar en el estado
      viewerState.currentJson = jsonObject;
      viewerState.formattedJson = formattedJson;
      
      // Generar XML de ejemplo
      const exampleXml = getExampleXml();
      viewerState.currentXml = exampleXml;
      viewerState.formattedXml = exampleXml;
      
      // Insertar el JSON formateado
      viewerState.jsonCodeElement = viewerState.jsonContent.querySelector('code');
      if (viewerState.jsonCodeElement) {
        viewerState.jsonCodeElement.textContent = formattedJson;
        console.log('✅ JSON insertado en el código');
      } else {
        console.error('❌ Elemento <code> JSON no encontrado');
        return;
      }
      
      // Insertar el XML formateado
      viewerState.xmlCodeElement = viewerState.xmlContent.querySelector('code');
      if (viewerState.xmlCodeElement) {
        viewerState.xmlCodeElement.textContent = exampleXml;
        console.log('✅ XML insertado en el código');
      } else {
        console.error('❌ Elemento <code> XML no encontrado');
        return;
      }
      
      // Aplicar resaltado de sintaxis si está disponible
      if (typeof hljs !== 'undefined' && hljs.highlightBlock) {
        try {
          // Resaltar JSON
          viewerState.jsonCodeElement.className = 'lang-json';
          hljs.highlightBlock(viewerState.jsonCodeElement);
          
          // Resaltar XML
          viewerState.xmlCodeElement.className = 'lang-xml';
          hljs.highlightBlock(viewerState.xmlCodeElement);
        } catch (highlightError) {
          console.warn('No se pudo aplicar resaltado de sintaxis:', highlightError);
        }
      }
      
      // Resetear el flag de limpieza al abrir el modal
      viewerState.isCleared = false;
      viewerState.currentFormat = 'json'; // Por defecto mostrar JSON
      
      // Asegurar que el tab JSON esté activo
      const jsonTab = document.querySelector('.json-viewer-tab[data-format="json"]');
      const xmlTab = document.querySelector('.json-viewer-tab[data-format="xml"]');
      if (jsonTab) jsonTab.classList.add('active');
      if (xmlTab) xmlTab.classList.remove('active');
      
      // Mostrar panel JSON por defecto
      const jsonPanel = document.getElementById('jsonViewerPanel');
      const xmlPanel = document.getElementById('xmlViewerPanel');
      if (jsonPanel) jsonPanel.style.display = 'block';
      if (xmlPanel) xmlPanel.style.display = 'none';
      
      // Abrir el modal con animación
      viewerState.modal.classList.add('json-viewer-open');
      console.log('✅ Clase json-viewer-open agregada');
      
      // Detectar la sección actual y resaltarla después de un pequeño delay
      // para asegurar que el DOM esté completamente actualizado
      setTimeout(function() {
        // Intentar detectar la sección actual
        detectCurrentSection();
        
        // Si no se encontró ninguna sección, intentar de nuevo después de más tiempo
        // para asegurar que el menú activo esté actualizado
        setTimeout(function() {
          if (!viewerState.currentSection && !viewerState.isCleared) {
            detectCurrentSection();
          }
        }, 200);
      }, 100);
      
    } catch (error) {
      console.error('❌ Error al formatear JSON:', error);
      if (viewerState.jsonCodeElement) {
        viewerState.jsonCodeElement.textContent = jsonText || 'Error: JSON inválido';
      }
    }
  }

  /**
   * Cierra el modal del visor JSON
   */
  function closeJsonModal() {
    if (viewerState.modal) {
      viewerState.modal.classList.remove('json-viewer-open');
      viewerState.currentSection = null;
    }
  }

  /**
   * Detecta la sección actual basándose en el scroll o el menú activo
   */
  function detectCurrentSection() {
    // Si se acaba de limpiar, no hacer nada
    if (viewerState.isCleared) {
      return;
    }
    
    let foundSection = false;
    let activeSectionId = null;
    
    // PRIMERO: Buscar el item activo en el sidebar (tiene prioridad)
    const activeLink = document.querySelector('.sidebar .nav li.active a');
    if (activeLink) {
      const href = activeLink.getAttribute('href');
      if (href && href.startsWith('#')) {
        activeSectionId = href.substring(1);
        
        // Si la sección activa está mapeada, resaltarla
        if (JSON_SECTION_MAP[activeSectionId] || XML_SECTION_MAP[activeSectionId]) {
          // Asegurarse de que no esté limpiado antes de resaltar
          viewerState.isCleared = false;
          highlightSection(activeSectionId);
          foundSection = true;
          return;
        } else {
          // Si la sección activa NO está mapeada, limpiar y mantener limpio
          clearHighlight();
          // Mantener el flag activo por más tiempo para evitar resaltado automático
          setTimeout(function() {
            viewerState.isCleared = false;
          }, 2000); // 2 segundos en lugar de 500ms
          return;
        }
      }
    }
    
    // SEGUNDO: Solo buscar por scroll si NO hay un menú activo no mapeado
    // Esto previene que se resalte el encabezado cuando se está en una sección no mapeada
    if (!foundSection && !activeSectionId) {
      const sections = document.querySelectorAll('.docs-heading.section-title');
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const offset = 150;
      
      for (let section of sections) {
        const sectionTop = section.offsetTop - offset;
        const sectionId = section.getAttribute('id');
        
        if (scrollTop >= sectionTop && (JSON_SECTION_MAP[sectionId] || XML_SECTION_MAP[sectionId])) {
          highlightSection(sectionId);
          foundSection = true;
          return;
        }
      }
    }
    
    // Si no se encontró ninguna sección mapeada y no hay menú activo, limpiar
    if (!foundSection && !activeSectionId) {
      clearHighlight();
      setTimeout(function() {
        viewerState.isCleared = false;
      }, 2000);
    }
  }

  /**
   * Inicializa los event listeners para detectar cambios de sección
   */
  function initSectionDetection() {
    // Detectar cambios en el scroll
    let scrollTimeout;
    window.addEventListener('scroll', function() {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function() {
        // Solo detectar si no está limpiado
        if (viewerState.modal && viewerState.modal.classList.contains('json-viewer-open') && !viewerState.isCleared) {
          detectCurrentSection();
        }
      }, 100);
    }, { passive: true });

    // Función para manejar clicks en menús
    function handleMenuClick(sectionId) {
      if (viewerState.modal && viewerState.modal.classList.contains('json-viewer-open')) {
          // Si la sección clickeada está mapeada, resaltarla
          if (JSON_SECTION_MAP[sectionId] || XML_SECTION_MAP[sectionId]) {
            viewerState.isCleared = false; // Permitir resaltado
            // Pequeño delay para asegurar que el DOM esté actualizado
            setTimeout(function() {
              highlightSection(sectionId);
            }, 100);
          } else {
          // Si NO está mapeada, limpiar y mantener limpio
          clearHighlight();
          setTimeout(function() {
            viewerState.isCleared = false;
          }, 2000);
        }
      }
    }
    
    // Detectar clicks en los enlaces del menú
    const menuLinks = document.querySelectorAll('.sidebar .nav a, .navbar-nav a');
    menuLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          const sectionId = href.substring(1);
          
          // Procesar inmediatamente si el modal está abierto
          handleMenuClick(sectionId);
          
          // También procesar después del scroll por si acaso
          setTimeout(function() {
            handleMenuClick(sectionId);
          }, 300); // Esperar a que el scroll termine
        }
      });
    });

    // Usar MutationObserver para detectar cambios en el menú activo
    const sidebar = document.querySelector('.sidebar .nav');
    if (sidebar) {
      const observer = new MutationObserver(function(mutations) {
        // Solo detectar si no está limpiado
        if (viewerState.modal && viewerState.modal.classList.contains('json-viewer-open') && !viewerState.isCleared) {
          detectCurrentSection();
        }
      });
      
      observer.observe(sidebar, {
        attributes: true,
        attributeFilter: ['class'],
        subtree: true,
        childList: false
      });
    }
  }

  /**
   * Inicializa el módulo
   */
  function init() {
    // Esperar a que el DOM esté listo
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        initSectionDetection();
      });
    } else {
      initSectionDetection();
    }

    // Cerrar modal con tecla ESC
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        closeJsonModal();
      }
    });
  }

  // Inicializar cuando el script se carga
  init();

  // Exponer funciones públicas
  window.openJsonModal = openJsonModal;
  window.closeJsonModal = closeJsonModal;
  window.getExampleJson = getExampleJson;
  window.getExampleXml = getExampleXml;
  window.highlightJsonSection = highlightJsonSection;
  window.highlightXmlSection = highlightXmlSection;
  window.highlightSection = highlightSection;
  window.switchViewerFormat = switchViewerFormat;
  window.clearHighlight = clearHighlight;

})();
