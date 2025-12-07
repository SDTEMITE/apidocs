/**
 * JSON Viewer - Visor JSON con resaltado dinámico según sección del menú
 * 
 * Este módulo encapsula toda la lógica del visor JSON, incluyendo:
 * - Mapeo entre secciones del menú y nodos del JSON
 * - Resaltado dinámico de la parte del JSON correspondiente
 * - Detección de navegación por scroll o click
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
   * Estado del visor JSON
   */
  let viewerState = {
    currentJson: null,
    formattedJson: null,
    currentSection: null,
    modal: null,
    content: null,
    codeElement: null,
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
   * Limpia el resaltado y hace scroll al inicio del JSON
   */
  function clearHighlight() {
    if (!viewerState.modal || !viewerState.modal.classList.contains('json-viewer-open')) {
      return; // Modal no está abierto
    }

    const codeElement = viewerState.codeElement;
    if (!codeElement) return;

    // Marcar como limpiado para prevenir resaltado automático
    viewerState.isCleared = true;

    // Restaurar el JSON sin resaltados
    codeElement.textContent = viewerState.formattedJson;
    codeElement.className = 'lang-json';
    
    // Aplicar highlight.js sin resaltados
    if (typeof hljs !== 'undefined' && hljs.highlightBlock) {
      try {
        hljs.highlightBlock(codeElement);
      } catch (error) {
        console.warn('Error al aplicar resaltado de sintaxis:', error);
      }
    }

    // Scroll al inicio del JSON
    const preElement = codeElement.parentElement;
    if (preElement) {
      preElement.scrollTop = 0;
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
    const codeElement = viewerState.codeElement;
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
   * Escapa HTML para prevenir XSS
   */
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * Abre el modal del visor JSON
   */
  function openJsonModal(jsonText) {
    console.log('🔍 Abriendo modal JSON...', jsonText);
    
    // Inicializar referencias si no existen
    if (!viewerState.modal) {
      viewerState.modal = document.getElementById('jsonViewerModal');
    }
    if (!viewerState.content) {
      viewerState.content = document.getElementById('jsonViewerContent');
    }
    
    if (!viewerState.modal) {
      console.error('❌ Modal no encontrado en el DOM');
      return;
    }
    
    if (!viewerState.content) {
      console.error('❌ Contenido del modal no encontrado');
      return;
    }
    
    console.log('✅ Modal encontrado:', viewerState.modal);
    console.log('✅ Contenido encontrado:', viewerState.content);
    
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
      
      // Insertar el JSON formateado
      viewerState.codeElement = viewerState.content.querySelector('code');
      if (viewerState.codeElement) {
        viewerState.codeElement.textContent = formattedJson;
        console.log('✅ JSON insertado en el código');
      } else {
        console.error('❌ Elemento <code> no encontrado');
        return;
      }
      
      // Aplicar resaltado de sintaxis si está disponible
      if (typeof hljs !== 'undefined' && hljs.highlightBlock) {
        try {
          viewerState.codeElement.className = 'lang-json';
          hljs.highlightBlock(viewerState.codeElement);
        } catch (highlightError) {
          console.warn('No se pudo aplicar resaltado de sintaxis:', highlightError);
        }
      }
      
      // Resetear el flag de limpieza al abrir el modal
      viewerState.isCleared = false;
      
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
      if (viewerState.codeElement) {
        viewerState.codeElement.textContent = jsonText || 'Error: JSON inválido';
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
        if (JSON_SECTION_MAP[activeSectionId]) {
          // Asegurarse de que no esté limpiado antes de resaltar
          viewerState.isCleared = false;
          highlightJsonSection(activeSectionId);
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
        
        if (scrollTop >= sectionTop && JSON_SECTION_MAP[sectionId]) {
          highlightJsonSection(sectionId);
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
        if (JSON_SECTION_MAP[sectionId]) {
          viewerState.isCleared = false; // Permitir resaltado
          // Pequeño delay para asegurar que el DOM esté actualizado
          setTimeout(function() {
            highlightJsonSection(sectionId);
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
  window.highlightJsonSection = highlightJsonSection;
  window.clearHighlight = clearHighlight;

})();
