/**
 * Panel de Pruebas de Integración DTEmite
 * Archivo JavaScript para el panel de pruebas de APIs REST y SOAP
 * 
 * Mejoras visuales aplicadas:
 * - Transiciones suaves y modernas
 * - Efectos hover mejorados
 * - Animaciones de carga más elegantes
 * - Feedback visual mejorado
 */

// Plantillas de documentos disponibles
const templates = {
  // === PLANTILLAS REST (JSON) ===
  factura: {
    type: 'rest',
    name: 'Factura Electrónica',
    data: {
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
            "MntNeto": "71553",
            "MntExe": "0",
            "TasaIVA": "19",
            "IVA": "13595",
            "MntTotal": "85148"
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
        ]
      },
      "Adicional": {
        "NodosA": [
          { "valor": "Vendedor: Juan Pérez" },
          { "valor": "Teléfono: +56 9 1234 5678" },
          { "valor": "Condición de pago: 30 días" }
        ]
      }
    }
  },
  nota_credito: {
    type: 'rest',
    name: 'Nota de Crédito',
    data: {
      "Sistema": {
        "nombre": "webbasico",
        "rut": "29282726-1",
        "usuario": "integrado_webbasico",
        "clave": "d2ViYmFzaWNvMjAyMQ=="
      },
      "Documento": {
        "Encabezado": {
          "IdDoc": {
            "TipoDTE": "61",
            "Folio": "0",
            "MntBruto": "2",
            "FchEmis": "2024-01-20",
            "FchVenc": "2024-01-20"
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
            "MntNeto": "71553",
            "MntExe": "0",
            "TasaIVA": "19",
            "IVA": "13595",
            "MntTotal": "85148"
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
          }
        ],
        "DscRcgGlobal": [],
        "Referencia": [
          {
            "NroLinRef": "1",
            "TpoDocRef": "33",
            "FolioRef": "41139",
            "FchRef": "2024-01-15",
            "CodRef": "1",
            "RazonRef": "Anula Documento Ref"
          }
        ]
      },
      "Adicional": {
        "NodosA": [
          { "valor": "Vendedor: Juan Pérez" },
          { "valor": "Condición de pago: 30 días" }
        ]
      }
    }
  },
  boleta: {
    type: 'rest',
    name: 'Boleta Electrónica',
    data: {
      "Sistema": {
        "nombre": "webbasico",
        "rut": "29282726-1",
        "usuario": "integrado_webbasico",
        "clave": "d2ViYmFzaWNvMjAyMQ=="
      },
      "Documento": {
        "Encabezado": {
          "IdDoc": {
            "TipoDTE": "39",
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
            "MntNeto": "71553",
            "MntExe": "0",
            "TasaIVA": "19",
            "IVA": "13595",
            "MntTotal": "85148"
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
        "Referencia": []
      },
      "Adicional": {
        "NodosA": [
          { "valor": "Vendedor: Juan Pérez" },
          { "valor": "Condición de pago: 30 días" }
        ]
      }
    }
  },
  
  // === PLANTILLAS SOAP (XML) ===
  soap_emision: {
    type: 'soap',
    name: 'SOAP - Emision (Integrar documentos)',
    method: 'Emision',
    data: {
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
            "MntNeto": "71553",
            "MntExe": "0",
            "TasaIVA": "19",
            "IVA": "13595",
            "MntTotal": "85148"
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
          }
        ],
        "DscRcgGlobal": [],
        "Referencia": []
      }
    }
  },
  soap_obtener_pdf: {
    type: 'soap',
    name: 'SOAP - ObtenerPDF (Obtener PDF específico)',
    method: 'ObtenerPDF',
    data: {
      "Sistema": {
        "nombre": "webbasico",
        "rut": "29282726-1",
        "usuario": "integrado_webbasico",
        "clave": "d2ViYmFzaWNvMjAyMQ=="
      },
      "Parametros": {
        "tipodte": "33",
        "foliodte": "1"
      }
    }
  },
  soap_obtener_xml: {
    type: 'soap',
    name: 'SOAP - ObtenerXml (Obtener XML específico)',
    method: 'ObtenerXml',
    data: {
      "Sistema": {
        "nombre": "webbasico",
        "rut": "29282726-1",
        "usuario": "integrado_webbasico",
        "clave": "d2ViYmFzaWNvMjAyMQ=="
      },
      "Parametros": {
        "tipodte": "33",
        "foliodte": "1"
      }
    }
  },
  soap_obtener_trazabilidad: {
    type: 'soap',
    name: 'SOAP - ObtenerTrazabilidad (Estado del documento)',
    method: 'ObtenerTrazabilidad',
    data: {
      "Sistema": {
        "nombre": "webbasico",
        "rut": "29282726-1",
        "usuario": "integrado_webbasico",
        "clave": "d2ViYmFzaWNvMjAyMQ=="
      },
      "Parametros": {
        "tipodte": "33",
        "foliodte": "1"
      }
    }
  },
  soap_obtener_pdf_credible: {
    type: 'soap',
    name: 'SOAP - ObtenerPDFCredible (PDF Credible)',
    method: 'ObtenerPDFCredible',
    data: {
      "Sistema": {
        "nombre": "webbasico",
        "rut": "29282726-1",
        "usuario": "integrado_webbasico",
        "clave": "d2ViYmFzaWNvMjAyMQ=="
      },
      "Parametros": {
        "tipodte": "33",
        "foliodte": "1"
      }
    }
  },
  soap_get_dte_compra: {
    type: 'soap',
    name: 'SOAP - get_DTEcompra (DTE de compra por fechas)',
    method: 'get_DTEcompra',
    data: {
      "Sistema": {
        "nombre": "webbasico",
        "rut": "29282726-1",
        "usuario": "integrado_webbasico",
        "clave": "d2ViYmFzaWNvMjAyMQ=="
      },
      "Parametros": {
        "fechaDesde": "2024-01-01",
        "fechaHasta": "2024-12-31"
      }
    }
  }
};

/**
 * Carga una plantilla de documento en el editor JSON/XML
 * @param {string} template - Nombre de la plantilla a cargar
 */
function loadTemplate(template = null) {
  const templateSelect = document.getElementById('documentTemplate');
  const selectedTemplate = template || templateSelect.value;
  const apiType = document.getElementById('apiType').value;
  
  if (selectedTemplate !== 'custom' && templates[selectedTemplate]) {
    const templateData = templates[selectedTemplate];
    
    // Actualizar el título del textarea según el tipo
    updateTextareaTitle(templateData.type);
    
    if (templateData.type === 'soap') {
      // Para SOAP Emision: mostrar XML DTE en formato documentación (Visor); otros métodos: payload completo
      const xmlContent = templateData.method === 'Emision'
        ? convertJsonToDteXml(templateData.data)
        : createSoapEnvelopeByMethod(templateData.data, templateData.method, templateData.data.Parametros || {});
      document.getElementById('jsonData').value = xmlContent;
      
      // Actualizar el método SOAP seleccionado
      const soapMethodSelect = document.getElementById('soapMethod');
      if (soapMethodSelect) {
        soapMethodSelect.value = templateData.method;
        updateSoapParamsVisibility();
      }
    } else {
      // Para REST, mostrar JSON
      document.getElementById('jsonData').value = JSON.stringify(templateData.data, null, 2);
    }
    
        templateSelect.value = selectedTemplate;
        
        // Re-inicializar bloques de código después de cargar plantilla
        setTimeout(function() {
          // Función simple para reinicializar bloques de código
          function reinitCodeBlocks() {
            $('.code-example').each(function(index) {
              var $codeExample = $(this);
              var $pre = $codeExample.find('pre');
              
              if ($pre.length > 0 && !$codeExample.hasClass('code-block-initialized')) {
                $codeExample.addClass('code-block-initialized');
                
                var $codeContent = $('<div class="code-content collapsed"></div>');
                $pre.contents().wrapAll($codeContent);
                
                var $toggleBtn = $('<button class="code-toggle-btn" title="Expandir código">+</button>');
                $codeExample.append($toggleBtn);
              }
            });
            
            // Re-agregar event listeners
            $('.code-toggle-btn').off('click').on('click', function(e) {
              e.preventDefault();
              var $btn = $(this);
              var $codeExample = $btn.closest('.code-example');
              var $codeContent = $codeExample.find('.code-content');
              
              if ($codeContent.hasClass('collapsed')) {
                $codeContent.removeClass('collapsed').addClass('expanded');
                $btn.html('−').attr('title', 'Contraer código');
              } else {
                $codeContent.removeClass('expanded').addClass('collapsed');
                $btn.html('+').attr('title', 'Expandir código');
              }
            });
          }
          
          reinitCodeBlocks();
        }, 100);
  }
}

/**
 * Actualiza el título del textarea según el tipo de contenido
 * @param {string} type - Tipo de contenido ('rest' o 'soap')
 */
function updateTextareaTitle(type) {
  const textareaLabel = document.querySelector('label[for="jsonData"]');
  if (textareaLabel) {
    if (type === 'soap') {
      textareaLabel.textContent = 'XML del Documento:';
    } else {
      textareaLabel.textContent = 'JSON del Documento:';
    }
  }
}

/**
 * Carga la plantilla de Factura Electrónica
 */
function loadFacturaTemplate() {
  loadTemplate('factura');
}

/**
 * Carga la plantilla de Nota de Crédito
 */
function loadNotaCreditoTemplate() {
  loadTemplate('nota_credito');
}

/**
 * Carga la plantilla de Boleta Electrónica
 */
function loadBoletaTemplate() {
  loadTemplate('boleta');
}

/**
 * Limpia el formulario y oculta el panel de respuesta
 */
function clearForm() {
  document.getElementById('jsonData').value = '';
  document.getElementById('responsePanel').style.display = 'none';
}

/**
 * Valida si el JSON ingresado es válido
 * @param {string} jsonString - Cadena JSON a validar
 * @returns {boolean} - True si es válido, false si no
 */
function validateJSON(jsonString) {
  try {
    JSON.parse(jsonString);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Muestra un mensaje de error al usuario con mejoras visuales
 * @param {string} message - Mensaje de error a mostrar
 */
function showError(message) {
  // Mejora visual: crear notificación personalizada en lugar de alert
  const errorNotification = document.createElement('div');
  errorNotification.className = 'error-notification';
  errorNotification.innerHTML = `
    <div class="error-content">
      <span class="error-icon">⚠️</span>
      <span class="error-message">Error: ${message}</span>
      <button class="error-close" onclick="this.parentElement.parentElement.remove()">×</button>
    </div>
  `;
  
  // Agregar estilos inline para la notificación
  errorNotification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
    color: white;
    padding: 16px 20px;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(220, 53, 69, 0.3);
    z-index: 10000;
    max-width: 400px;
    animation: slideInRight 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-family: 'Inter', sans-serif;
  `;
  
  errorNotification.querySelector('.error-content').style.cssText = `
    display: flex;
    align-items: center;
    gap: 12px;
  `;
  
  errorNotification.querySelector('.error-icon').style.cssText = `
    font-size: 18px;
  `;
  
  errorNotification.querySelector('.error-message').style.cssText = `
    flex: 1;
    font-weight: 500;
  `;
  
  errorNotification.querySelector('.error-close').style.cssText = `
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    padding: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background-color 0.2s ease;
  `;
  
  // Agregar hover effect al botón de cerrar
  errorNotification.querySelector('.error-close').addEventListener('mouseenter', function() {
    this.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
  });
  
  errorNotification.querySelector('.error-close').addEventListener('mouseleave', function() {
    this.style.backgroundColor = 'transparent';
  });
  
  document.body.appendChild(errorNotification);
  
  // Auto-remover después de 5 segundos
  setTimeout(() => {
    if (errorNotification.parentElement) {
      errorNotification.style.animation = 'slideOutRight 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      setTimeout(() => {
        if (errorNotification.parentElement) {
          errorNotification.remove();
        }
      }, 300);
    }
  }, 5000);
}

/**
 * Actualiza las credenciales en el JSON basándose en los campos del formulario
 * @param {Object} jsonData - Objeto JSON del documento
 * @returns {Object} - JSON actualizado con las credenciales
 */
function updateCredentials(jsonData) {
  const rut = document.getElementById('rut').value;
  const sistema = document.getElementById('sistema').value;
  const usuario = document.getElementById('usuario').value;
  const clave = document.getElementById('clave').value;
  
  if (jsonData.Sistema) {
    jsonData.Sistema.rut = rut;
    jsonData.Sistema.nombre = sistema;
    jsonData.Sistema.usuario = usuario;
    jsonData.Sistema.clave = clave;
  }
  
  return jsonData;
}

/**
 * Envía una petición a la API REST
 * @param {string} endpoint - URL del endpoint
 * @param {string} jsonData - Datos JSON a enviar
 * @returns {Promise<Response>} - Respuesta de la API
 */
async function sendRestRequest(endpoint, jsonData) {
  return await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: jsonData
  });
}

/**
 * Convierte un objeto JSON a formato XML SOAP
 * @param {Object} jsonData - Datos JSON a convertir
 * @returns {string} - XML SOAP envelope
 */
function createSoapEnvelope(jsonData) {
  const sistema = jsonData.Sistema || {};
  const documento = jsonData.Documento || {};
  
  // Escapar caracteres especiales XML
  const escapeXml = (text) => {
    if (!text) return '';
    return text.toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  };
  
  // Convertir documento a XML
  const documentoXml = convertJsonToXml(documento);
  
  return `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
  <soap:Header/>
  <soap:Body>
    <tem:Emision>
      <tem:Sistema>${escapeXml(sistema.nombre)}</tem:Sistema>
      <tem:rut>${escapeXml(sistema.rut)}</tem:rut>
      <tem:usuario>${escapeXml(sistema.usuario)}</tem:usuario>
      <tem:clave>${escapeXml(sistema.clave)}</tem:clave>
      <tem:xml>${escapeXml(documentoXml)}</tem:xml>
    </tem:Emision>
  </soap:Body>
</soap:Envelope>`;
}

/**
 * Convierte el JSON del documento al formato XML DTE (estructura según documentación)
 * @param {Object} jsonData - Objeto con Documento y Adicional
 * @returns {string} - XML DTE formateado (raíz DTE, Documento, Adicional)
 */
function convertJsonToDteXml(jsonData) {
  const doc = jsonData.Documento || {};
  const enc = doc.Encabezado || {};
  const idDoc = enc.IdDoc || {};
  const emisor = enc.Emisor || {};
  const receptor = enc.Receptor || {};
  const totales = enc.Totales || {};
  const detalleList = Array.isArray(doc.Detalle) ? doc.Detalle : [];
  const dscRcgList = Array.isArray(doc.DscRcgGlobal) ? doc.DscRcgGlobal : [];
  const refList = Array.isArray(doc.Referencia) ? doc.Referencia : [];
  const adicional = jsonData.Adicional || {};
  const nodosA = Array.isArray(adicional.NodosA) ? adicional.NodosA : [];
  const t = '\t';
  const esc = (v) => (v == null || v === '') ? '' : String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

  let out = '<DTE>\n';
  out += t + '<Documento>\n';
  out += t + t + '<Encabezado>\n';
  out += t + t + t + '<IdDoc>\n';
  out += t + t + t + t + '<TipoDTE>' + esc(idDoc.TipoDTE) + '</TipoDTE>\n';
  out += t + t + t + t + '<Folio>' + esc(idDoc.Folio) + '</Folio>\n';
  if (idDoc.MntBruto != null && idDoc.MntBruto !== '') out += t + t + t + t + '<MntBruto>' + esc(idDoc.MntBruto) + '</MntBruto>\n';
  out += t + t + t + t + '<FchEmis>' + esc(idDoc.FchEmis) + '</FchEmis>\n';
  out += t + t + t + t + '<FchVenc>' + esc(idDoc.FchVenc) + '</FchVenc>\n';
  if (idDoc.SucursalId != null && idDoc.SucursalId !== '') out += t + t + t + t + '<SucursalId>' + esc(idDoc.SucursalId) + '</SucursalId>\n';
  out += t + t + t + '</IdDoc>\n';
  out += t + t + t + '<Emisor>\n';
  out += t + t + t + t + '<RUTEmisor>' + esc(emisor.RUTEmisor) + '</RUTEmisor>\n';
  out += t + t + t + t + '<RznSocEmisor>' + esc(emisor.RznSocEmisor) + '</RznSocEmisor>\n';
  out += t + t + t + t + '<GiroEmisor>' + esc(emisor.GiroEmisor) + '</GiroEmisor>\n';
  out += t + t + t + t + '<DirOrigen>' + esc(emisor.DirOrigen) + '</DirOrigen>\n';
  out += t + t + t + t + '<CmnaOrigen>' + esc(emisor.CmnaOrigen) + '</CmnaOrigen>\n';
  out += t + t + t + t + '<CiudadOrigen>' + esc(emisor.CiudadOrigen) + '</CiudadOrigen>\n';
  if (emisor.Observacion != null && emisor.Observacion !== '') out += t + t + t + t + '<Observacion>' + esc(emisor.Observacion) + '</Observacion>\n';
  out += t + t + t + '</Emisor>\n';
  out += t + t + t + '<Receptor>\n';
  out += t + t + t + t + '<RUTRecep>' + esc(receptor.RUTRecep) + '</RUTRecep>\n';
  out += t + t + t + t + '<RznSocRecep>' + esc(receptor.RznSocRecep) + '</RznSocRecep>\n';
  if (receptor.GiroRecep != null && receptor.GiroRecep !== '') out += t + t + t + t + '<GiroRecep>' + esc(receptor.GiroRecep) + '</GiroRecep>\n';
  out += t + t + t + t + '<DirRecep>' + esc(receptor.DirRecep) + '</DirRecep>\n';
  out += t + t + t + t + '<CmnaRecep>' + esc(receptor.CmnaRecep) + '</CmnaRecep>\n';
  out += t + t + t + t + '<CiudadRecep>' + esc(receptor.CiudadRecep) + '</CiudadRecep>\n';
  out += t + t + t + t + '<CorreoRecep>' + esc(receptor.CorreoRecep) + '</CorreoRecep>\n';
  out += t + t + t + '</Receptor>\n';
  out += t + t + t + '<Totales>\n';
  out += t + t + t + t + '<MntNeto>' + esc(totales.MntNeto) + '</MntNeto>\n';
  out += t + t + t + t + '<MntExe>' + esc(totales.MntExe) + '</MntExe>\n';
  out += t + t + t + t + '<IVA>' + esc(totales.IVA) + '</IVA>\n';
  if (totales.TasaIVA != null && totales.TasaIVA !== '') out += t + t + t + t + '<TasaIVA>' + esc(totales.TasaIVA) + '</TasaIVA>\n';
  out += t + t + t + t + '<MntTotal>' + esc(totales.MntTotal) + '</MntTotal>\n';
  out += t + t + t + '</Totales>\n';
  out += t + t + '</Encabezado>\n';

  dscRcgList.forEach((dr) => {
    out += t + t + '<DscRcgGlobal>\n';
    out += t + t + t + '<NroLinDR>' + esc(dr.NroLinDR) + '</NroLinDR>\n';
    out += t + t + t + '<TpoMov>' + esc(dr.TpoMov) + '</TpoMov>\n';
    out += t + t + t + '<TpoValor>' + esc(dr.TpoValor) + '</TpoValor>\n';
    out += t + t + t + '<ValorDR>' + esc(dr.ValorDR) + '</ValorDR>\n';
    if (dr.GlosaDR != null && dr.GlosaDR !== '') out += t + t + t + '<GlosaDR>' + esc(dr.GlosaDR) + '</GlosaDR>\n';
    out += t + t + '</DscRcgGlobal>\n';
  });

  detalleList.forEach((d) => {
    out += t + t + '<Detalle>\n';
    out += t + t + t + '<NroLinDet>' + esc(d.NroLinDet) + '</NroLinDet>\n';
    if (d.UnmdItem != null && d.UnmdItem !== '') out += t + t + t + '<UnmItem>' + esc(d.UnmdItem) + '</UnmItem>\n';
    if (d.CdgItem && (d.CdgItem.TpoCodigo || d.CdgItem.VlrCodigo)) {
      out += t + t + t + '<CdgItem>\n';
      out += t + t + t + t + '<TpoCodigo>' + esc(d.CdgItem.TpoCodigo) + '</TpoCodigo>\n';
      out += t + t + t + t + '<VlrCodigo>' + esc(d.CdgItem.VlrCodigo) + '</VlrCodigo>\n';
      out += t + t + t + '</CdgItem>\n';
    }
    out += t + t + t + '<NmbItem>' + esc(d.NmbItem) + '</NmbItem>\n';
    if (d.DscItem != null && d.DscItem !== '') out += t + t + t + '<DscItem>' + esc(d.DscItem) + '</DscItem>\n';
    out += t + t + t + '<QtyItem>' + esc(d.QtyItem) + '</QtyItem>\n';
    out += t + t + t + '<PrcItem>' + esc(d.PrcItem) + '</PrcItem>\n';
    out += t + t + t + '<MontoItem>' + esc(d.MontoItem) + '</MontoItem>\n';
    out += t + t + '</Detalle>\n';
  });

  refList.forEach((r) => {
    out += t + t + '<Referencia>\n';
    out += t + t + t + '<NroLinRef>' + esc(r.NroLinRef) + '</NroLinRef>\n';
    out += t + t + t + '<TpoDocRef>' + esc(r.TpoDocRef) + '</TpoDocRef>\n';
    out += t + t + t + '<FolioRef>' + esc(r.FolioRef) + '</FolioRef>\n';
    out += t + t + t + '<FchRef>' + esc(r.FchRef) + '</FchRef>\n';
    if (r.CodRef != null && r.CodRef !== '') out += t + t + t + '<CodRef>' + esc(r.CodRef) + '</CodRef>\n';
    if (r.RazonRef != null && r.RazonRef !== '') out += t + t + t + '<RazonRef>' + esc(r.RazonRef) + '</RazonRef>\n';
    out += t + t + '</Referencia>\n';
  });

  out += t + '</Documento>\n';
  out += t + '<Adicional>\n';
  out += t + t + '<NodosA>\n';
  nodosA.forEach((n, i) => {
    const val = (n && n.valor != null) ? n.valor : (typeof n === 'string' ? n : '');
    const tag = 'A' + (i + 1);
    out += t + t + t + '<' + tag + '>' + esc(val) + '</' + tag + '>\n';
  });
  out += t + t + '</NodosA>\n';
  out += t + '</Adicional>\n';
  out += '</DTE>';
  return out;
}

/**
 * Convierte un objeto JSON a XML recursivamente
 * @param {Object} obj - Objeto JSON a convertir
 * @param {string} rootName - Nombre del elemento raíz
 * @returns {string} - XML resultante
 */
function convertJsonToXml(obj, rootName = 'Documento') {
  if (obj === null || obj === undefined) return '';
  
  if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean') {
    return escapeXml(obj.toString());
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => convertJsonToXml(item, 'item')).join('');
  }
  
  if (typeof obj === 'object') {
    let xml = '';
    for (const [key, value] of Object.entries(obj)) {
      if (Array.isArray(value)) {
        xml += `<${key}>${convertJsonToXml(value, key)}</${key}>`;
      } else if (typeof value === 'object' && value !== null) {
        xml += `<${key}>${convertJsonToXml(value, key)}</${key}>`;
      } else {
        xml += `<${key}>${escapeXml(value ? value.toString() : '')}</${key}>`;
      }
    }
    return xml;
  }
  
  return '';
}

/**
 * Escapa caracteres especiales XML
 * @param {string} text - Texto a escapar
 * @returns {string} - Texto escapado
 */
function escapeXml(text) {
  if (!text) return '';
  return text.toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Parsea una respuesta XML SOAP
 * @param {string} xmlResponse - Respuesta XML del servidor
 * @returns {Object} - Objeto parseado
 */
function parseSoapResponse(xmlResponse) {
  try {
    // Verificar si la respuesta es XML válido
    if (!xmlResponse.trim().startsWith('<')) {
      // No es XML, probablemente es un error de texto plano
      return {
        error: true,
        message: 'Respuesta no es XML válido',
        rawResponse: xmlResponse,
        type: 'text_response'
      };
    }
    
    // Crear un parser XML simple
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlResponse, 'text/xml');
    
    // Verificar si hay errores de parsing
    const parseError = xmlDoc.getElementsByTagName('parsererror')[0];
    if (parseError) {
      throw new Error('Error parsing XML: ' + parseError.textContent);
    }
    
    // Buscar el contenido de la respuesta SOAP
    const soapBody = xmlDoc.getElementsByTagName('soap:Body')[0];
    if (!soapBody) {
      throw new Error('No se encontró el cuerpo SOAP en la respuesta');
    }
    
    // Extraer el contenido de la respuesta
    const responseContent = soapBody.firstElementChild;
    if (!responseContent) {
      throw new Error('No se encontró contenido en la respuesta SOAP');
    }
    
    // Convertir XML a objeto
    return xmlToObject(responseContent);
    
  } catch (error) {
    console.error('Error parsing SOAP response:', error);
    return {
      error: true,
      message: error.message,
      rawResponse: xmlResponse,
      type: 'parse_error'
    };
  }
}

/**
 * Convierte un elemento XML a objeto JavaScript
 * @param {Element} xmlElement - Elemento XML a convertir
 * @returns {Object} - Objeto JavaScript
 */
function xmlToObject(xmlElement) {
  const result = {};
  
  // Si el elemento tiene atributos
  if (xmlElement.attributes && xmlElement.attributes.length > 0) {
    result['@attributes'] = {};
    for (let i = 0; i < xmlElement.attributes.length; i++) {
      const attr = xmlElement.attributes[i];
      result['@attributes'][attr.name] = attr.value;
    }
  }
  
  // Si el elemento tiene solo texto y no hijos
  if (xmlElement.children.length === 0) {
    return xmlElement.textContent || '';
  }
  
  // Procesar elementos hijos
  const children = xmlElement.children;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    const childName = child.tagName;
    const childValue = xmlToObject(child);
    
    if (result[childName]) {
      // Si ya existe, convertir a array
      if (!Array.isArray(result[childName])) {
        result[childName] = [result[childName]];
      }
      result[childName].push(childValue);
    } else {
      result[childName] = childValue;
    }
  }
  
  return result;
}

/**
 * Envía una petición SOAP real al servidor
 * @param {string} endpoint - URL del endpoint SOAP
 * @param {string} xmlData - Datos XML a enviar
 * @param {string} method - Método SOAP a usar (Emision, ObtenerPDF, ObtenerXml, etc.)
 * @param {Object} extraParams - Parámetros adicionales para métodos específicos
 * @returns {Promise<Response>} - Respuesta de la API
 */
async function sendSoapRequest(endpoint, xmlData, method = 'Emision', extraParams = {}) {
  try {
    console.log(`SOAP Request (${method}):`, xmlData);
    
    // Determinar SOAPAction según el método
    const soapActions = {
      'Emision': 'urn:Emision',
      'ObtenerPDF': 'urn:ObtenerPDF',
      'ObtenerXml': 'urn:ObtenerXml',
      'ObtenerTrazabilidad': 'urn:ObtenerTrazabilidad',
      'ObtenerPDFCredible': 'urn:ObtenerPDFCredible',
      'get_DTEcompra': 'urn:get_DTEcompra'
    };
    
    // Enviar petición SOAP con XML directo
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml; charset=utf-8',
        'SOAPAction': soapActions[method] || 'urn:Emision',
        'Accept': 'text/xml, application/xml'
      },
      body: xmlData
    });
    
    // Parsear respuesta SOAP
    const responseText = await response.text();
    console.log(`SOAP Response (${method}):`, responseText);
    
    // Crear objeto de respuesta personalizado
    const parsedResponse = parseSoapResponse(responseText);
    
    return {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      text: () => Promise.resolve(JSON.stringify(parsedResponse, null, 2)),
      soapResponse: parsedResponse,
      rawXml: responseText,
      method: method
    };
    
  } catch (error) {
    console.error(`SOAP Request Error (${method}):`, error);
    return {
      ok: false,
      status: 0,
      statusText: 'SOAP Error',
      text: () => Promise.resolve(`Error en petición SOAP (${method}): ${error.message}`),
      error: error.message,
      method: method
    };
  }
}

/**
 * Crea el XML correcto según el método específico (formato directo, no SOAP envelope)
 * @param {Object} jsonData - Datos JSON a convertir
 * @param {string} method - Método SOAP a usar
 * @param {Object} extraParams - Parámetros adicionales
 * @returns {string} - XML directo según la documentación
 */
function createSoapEnvelopeByMethod(jsonData, method, extraParams) {
  const sistema = jsonData.Sistema || {};
  
  // Escapar caracteres especiales XML
  const escapeXml = (text) => {
    if (!text) return '';
    return text.toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  };
  
  let xmlContent = '';
  
  switch (method) {
    case 'Emision':
      // Para Emision: Sistema, rut, usuario, clave, xml (contenido en formato DTE según documentación)
      const dteXml = convertJsonToDteXml(jsonData);
      xmlContent = `<sistema>${escapeXml(sistema.nombre)}</sistema>
<rut>${escapeXml(sistema.rut)}</rut>
<usuario>${escapeXml(sistema.usuario)}</usuario>
<clave>${escapeXml(sistema.clave)}</clave>
<xml>${escapeXml(dteXml)}</xml>`;
      break;
      
    case 'ObtenerPDF':
    case 'ObtenerXml':
    case 'ObtenerPDFCredible':
      // Para métodos de consulta: Sistema, rut, usuario, clave, tipodte, foliodte
      xmlContent = `<sistema>${escapeXml(sistema.nombre)}</sistema>
<rut>${escapeXml(sistema.rut)}</rut>
<usuario>${escapeXml(sistema.usuario)}</usuario>
<clave>${escapeXml(sistema.clave)}</clave>
<tipodte>${escapeXml(extraParams.tipodte || '')}</tipodte>
<foliodte>${escapeXml(extraParams.foliodte || '')}</foliodte>`;
      break;
      
    case 'ObtenerTrazabilidad':
      xmlContent = `<sistema>${escapeXml(sistema.nombre)}</sistema>
<rut>${escapeXml(sistema.rut)}</rut>
<usuario>${escapeXml(sistema.usuario)}</usuario>
<clave>${escapeXml(sistema.clave)}</clave>
<tipodte>${escapeXml(extraParams.tipodte || '')}</tipodte>
<foliodte>${escapeXml(extraParams.foliodte || '')}</foliodte>`;
      break;
      
    case 'get_DTEcompra':
      xmlContent = `<sistema>${escapeXml(sistema.nombre)}</sistema>
<rut>${escapeXml(sistema.rut)}</rut>
<usuario>${escapeXml(sistema.usuario)}</usuario>
<clave>${escapeXml(sistema.clave)}</clave>
<fechaDesde>${escapeXml(extraParams.fechaDesde || '')}</fechaDesde>
<fechaHasta>${escapeXml(extraParams.fechaHasta || '')}</fechaHasta>`;
      break;
      
    default:
      // Método por defecto (Emision) - formato DTE
      const defaultDteXml = convertJsonToDteXml(jsonData);
      xmlContent = `<sistema>${escapeXml(sistema.nombre)}</sistema>
<rut>${escapeXml(sistema.rut)}</rut>
<usuario>${escapeXml(sistema.usuario)}</usuario>
<clave>${escapeXml(sistema.clave)}</clave>
<xml>${escapeXml(defaultDteXml)}</xml>`;
  }
  
  return xmlContent;
}

/**
 * Construye el body SOAP para Emisión cuando el visor tiene XML DTE (formato documentación)
 * @param {string} dteXml - XML DTE completo (raíz DTE)
 * @param {string} sistema - Nombre sistema
 * @param {string} rut - RUT
 * @param {string} usuario - Usuario
 * @param {string} clave - Clave
 * @returns {string} - Body con sistema, rut, usuario, clave, xml (DTE escapado)
 */
function buildSoapEmisionBodyFromDteXml(dteXml, sistema, rut, usuario, clave) {
  return `<sistema>${escapeXml(sistema || '')}</sistema>
<rut>${escapeXml(rut || '')}</rut>
<usuario>${escapeXml(usuario || '')}</usuario>
<clave>${escapeXml(clave || '')}</clave>
<xml>${escapeXml(dteXml)}</xml>`;
}

/**
 * Muestra la respuesta de la API en el panel
 * @param {Response} response - Respuesta de la API
 * @param {string} responseText - Texto de la respuesta
 */
function displayResponse(response, responseText) {
  const responsePanel = document.getElementById('responsePanel');
  const responseContent = document.getElementById('responseContent');
  const apiType = document.getElementById('apiType').value;
  
  // Mejora visual: mostrar panel con animación
  responsePanel.style.display = 'block';
  responsePanel.style.opacity = '0';
  responsePanel.style.transform = 'translateY(20px)';
  
  // Aplicar clases de estado con mejoras visuales
  responsePanel.className = response.ok ? 'response-panel response-success' : 'response-panel response-error';
  
  // Mejora visual: animación de entrada
  setTimeout(() => {
    responsePanel.style.opacity = '1';
    responsePanel.style.transform = 'translateY(0)';
    responsePanel.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
  }, 50);
  
  // Mostrar información adicional para SOAP
  let displayText = `Status: ${response.status} ${response.statusText}\n\n`;
  
  if (apiType === 'soap' && response.soapResponse) {
    displayText += `Respuesta SOAP Parseada:\n${JSON.stringify(response.soapResponse, null, 2)}\n\n`;
    displayText += `XML Original:\n${response.rawXml || responseText}`;
  } else {
    displayText += responseText;
  }
  
  responseContent.textContent = displayText;
  
  // Mejora visual: scroll suave al panel de respuesta
  setTimeout(() => {
    responsePanel.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'nearest' 
    });
  }, 350);
}

/**
 * Función principal para enviar peticiones a la API
 */
async function sendRequest() {
  const apiType = document.getElementById('apiType').value;
  const endpoint = document.getElementById('endpoint').value;
  const dataString = document.getElementById('jsonData').value;
  const soapMethod = document.getElementById('soapMethod') ? document.getElementById('soapMethod').value : 'Emision';
  const sendBtn = document.getElementById('sendBtn');
  const loading = document.getElementById('loading');
  const responsePanel = document.getElementById('responsePanel');
  
  // Validaciones iniciales
  if (!dataString.trim()) {
    showError('Por favor, ingresa el contenido del documento');
    return;
  }
  
  // Mostrar loading con mejoras visuales
  sendBtn.disabled = true;
  sendBtn.textContent = 'Enviando...';
  sendBtn.classList.add('btn-loading');
  loading.style.display = 'block';
  loading.classList.add('loading-animation');
  responsePanel.style.display = 'none';
  
  try {
    let response;
    
    if (apiType === 'rest') {
      // Validar JSON para REST
      if (!validateJSON(dataString)) {
        showError('El JSON ingresado no es válido');
        return;
      }
      
      // Actualizar credenciales en el JSON
      let jsonData;
      try {
        jsonData = JSON.parse(dataString);
        jsonData = updateCredentials(jsonData);
      } catch (e) {
        showError('Error al procesar el JSON: ' + e.message);
        return;
      }
      
      const finalJsonData = JSON.stringify(jsonData);
      response = await sendRestRequest(endpoint, finalJsonData);
    } else {
      // Para SOAP: si el visor tiene XML DTE (Emision), envolver con credenciales del formulario
      let soapBody = dataString;
      if (soapMethod === 'Emision' && dataString.trim().startsWith('<DTE>')) {
        const sistema = document.getElementById('sistema') ? document.getElementById('sistema').value : '';
        const rut = document.getElementById('rut') ? document.getElementById('rut').value : '';
        const usuario = document.getElementById('usuario') ? document.getElementById('usuario').value : '';
        const clave = document.getElementById('clave') ? document.getElementById('clave').value : '';
        soapBody = buildSoapEmisionBodyFromDteXml(dataString, sistema, rut, usuario, clave);
      }
      response = await sendSoapRequest(endpoint, soapBody, soapMethod, {});
    }
    
    const responseText = await response.text();
    displayResponse(response, responseText);
    
  } catch (error) {
    const errorResponse = {
      ok: false,
      status: 0,
      statusText: 'Network Error'
    };
    displayResponse(errorResponse, `Error de conexión: ${error.message}`);
  } finally {
    // Ocultar loading con transición suave
    sendBtn.disabled = false;
    sendBtn.textContent = 'Enviar Petición';
    sendBtn.classList.remove('btn-loading');
    
    // Mejora visual: transición suave para el loading
    loading.style.opacity = '0';
    setTimeout(() => {
      loading.style.display = 'none';
      loading.style.opacity = '1';
      loading.classList.remove('loading-animation');
    }, 300);
  }
}

/**
 * Obtiene parámetros adicionales según el método SOAP seleccionado
 * @param {string} method - Método SOAP
 * @returns {Object} - Parámetros adicionales
 */
function getSoapExtraParams(method) {
  const params = {};
  
  switch (method) {
    case 'ObtenerPDF':
    case 'ObtenerXml':
    case 'ObtenerPDFCredible':
    case 'ObtenerTrazabilidad':
      params.tipodte = document.getElementById('tipodte') ? document.getElementById('tipodte').value : '33';
      params.foliodte = document.getElementById('foliodte') ? document.getElementById('foliodte').value : '1';
      break;
      
    case 'get_DTEcompra':
      params.fechaDesde = document.getElementById('fechaDesde') ? document.getElementById('fechaDesde').value : '2024-01-01';
      params.fechaHasta = document.getElementById('fechaHasta') ? document.getElementById('fechaHasta').value : '2024-12-31';
      break;
  }
  
  return params;
}

/**
 * Funciones específicas para cada método SOAP
 */

// Método Emision (por defecto)
async function testSoapEmision() {
  const jsonData = document.getElementById('jsonData').value;
  if (!jsonData.trim()) {
    alert('Por favor, ingresa el JSON del documento');
    return;
  }
  
  // Para Emision SOAP, necesitamos el documento completo
  // Si solo tenemos Sistema, necesitamos agregar un documento de ejemplo
  let dataToSend;
  try {
    const parsedData = JSON.parse(jsonData);
    
    if (parsedData.Sistema && !parsedData.Documento) {
      // Solo tenemos Sistema, agregar documento de ejemplo
      dataToSend = {
        Sistema: parsedData.Sistema,
        Documento: templates.factura.Documento // Usar documento de ejemplo
      };
    } else {
      // Ya tenemos documento completo
      dataToSend = parsedData;
    }
  } catch (e) {
    alert('Error al procesar el JSON: ' + e.message);
    return;
  }
  
  const endpoint = document.getElementById('endpoint').value;
  const response = await sendSoapRequest(endpoint, JSON.stringify(dataToSend), 'Emision');
  const responseText = await response.text();
  displayResponse(response, responseText);
}

// Método ObtenerPDF
async function testSoapObtenerPDF() {
  const tipodte = prompt('Ingresa el Tipo DTE:', '33');
  const foliodte = prompt('Ingresa el Folio DTE:', '1');
  
  if (!tipodte || !foliodte) return;
  
  // Para métodos de consulta, solo necesitamos Sistema
  const sistemaData = {
    Sistema: {
      nombre: document.getElementById('sistema').value,
      rut: document.getElementById('rut').value,
      usuario: document.getElementById('usuario').value,
      clave: document.getElementById('clave').value
    }
  };
  
  const endpoint = document.getElementById('endpoint').value;
  const extraParams = { tipodte, foliodte };
  
  const response = await sendSoapRequest(endpoint, JSON.stringify(sistemaData), 'ObtenerPDF', extraParams);
  const responseText = await response.text();
  displayResponse(response, responseText);
}

// Método ObtenerXml
async function testSoapObtenerXml() {
  const tipodte = prompt('Ingresa el Tipo DTE:', '33');
  const foliodte = prompt('Ingresa el Folio DTE:', '1');
  
  if (!tipodte || !foliodte) return;
  
  // Para métodos de consulta, solo necesitamos Sistema
  const sistemaData = {
    Sistema: {
      nombre: document.getElementById('sistema').value,
      rut: document.getElementById('rut').value,
      usuario: document.getElementById('usuario').value,
      clave: document.getElementById('clave').value
    }
  };
  
  const endpoint = document.getElementById('endpoint').value;
  const extraParams = { tipodte, foliodte };
  
  const response = await sendSoapRequest(endpoint, JSON.stringify(sistemaData), 'ObtenerXml', extraParams);
  const responseText = await response.text();
  displayResponse(response, responseText);
}

// Método ObtenerTrazabilidad
async function testSoapObtenerTrazabilidad() {
  const tipodte = prompt('Ingresa el Tipo DTE:', '33');
  const foliodte = prompt('Ingresa el Folio DTE:', '1');
  
  if (!tipodte || !foliodte) return;
  
  // Para métodos de consulta, solo necesitamos Sistema
  const sistemaData = {
    Sistema: {
      nombre: document.getElementById('sistema').value,
      rut: document.getElementById('rut').value,
      usuario: document.getElementById('usuario').value,
      clave: document.getElementById('clave').value
    }
  };
  
  const endpoint = document.getElementById('endpoint').value;
  const extraParams = { tipodte, foliodte };
  
  const response = await sendSoapRequest(endpoint, JSON.stringify(sistemaData), 'ObtenerTrazabilidad', extraParams);
  const responseText = await response.text();
  displayResponse(response, responseText);
}

// Método ObtenerPDFCredible
async function testSoapObtenerPDFCredible() {
  const tipodte = prompt('Ingresa el Tipo DTE:', '33');
  const foliodte = prompt('Ingresa el Folio DTE:', '1');
  
  if (!tipodte || !foliodte) return;
  
  // Para métodos de consulta, solo necesitamos Sistema
  const sistemaData = {
    Sistema: {
      nombre: document.getElementById('sistema').value,
      rut: document.getElementById('rut').value,
      usuario: document.getElementById('usuario').value,
      clave: document.getElementById('clave').value
    }
  };
  
  const endpoint = document.getElementById('endpoint').value;
  const extraParams = { tipodte, foliodte };
  
  const response = await sendSoapRequest(endpoint, JSON.stringify(sistemaData), 'ObtenerPDFCredible', extraParams);
  const responseText = await response.text();
  displayResponse(response, responseText);
}

// Método get_DTEcompra
async function testSoapGetDTEcompra() {
  const fechaDesde = prompt('Ingresa la fecha desde (YYYY-MM-DD):', '2024-01-01');
  const fechaHasta = prompt('Ingresa la fecha hasta (YYYY-MM-DD):', '2024-12-31');
  
  if (!fechaDesde || !fechaHasta) return;
  
  // Para métodos de consulta, solo necesitamos Sistema
  const sistemaData = {
    Sistema: {
      nombre: document.getElementById('sistema').value,
      rut: document.getElementById('rut').value,
      usuario: document.getElementById('usuario').value,
      clave: document.getElementById('clave').value
    }
  };
  
  const endpoint = document.getElementById('endpoint').value;
  const extraParams = { fechaDesde, fechaHasta };
  
  const response = await sendSoapRequest(endpoint, JSON.stringify(sistemaData), 'get_DTEcompra', extraParams);
  const responseText = await response.text();
  displayResponse(response, responseText);
}

/**
 * Alterna la visibilidad de los controles SOAP según el tipo de API seleccionado
 */
function toggleSoapMethods() {
  console.log('toggleSoapMethods called');
  
  const apiType = document.getElementById('apiType');
  const soapMethodsPanel = document.getElementById('soapMethodsPanel');
  const soapParamsPanel = document.getElementById('soapParamsPanel');
  
  if (!apiType || !soapMethodsPanel || !soapParamsPanel) {
    console.error('Elementos no encontrados:', {
      apiType: !!apiType,
      soapMethodsPanel: !!soapMethodsPanel,
      soapParamsPanel: !!soapParamsPanel
    });
    return;
  }
  
  const selectedApiType = apiType.value;
  console.log('API Type selected:', selectedApiType);
  
  // Actualizar el selector de plantillas según el tipo de API
  updateTemplateSelector(selectedApiType);
  
  if (selectedApiType === 'soap') {
    soapMethodsPanel.style.display = 'block';
    updateSoapParamsVisibility();
    console.log('SOAP panels shown');
    
    // Cambiar endpoint a SOAP
    const endpointInput = document.getElementById('endpoint');
    if (endpointInput) {
      endpointInput.value = 'http://api.dtemite.cl:8089/WSDTEIntegrado/WSDTEInt?wsdl';
    }
    
    // Cargar plantilla SOAP por defecto
    loadTemplate('soap_emision');
  } else {
    soapMethodsPanel.style.display = 'none';
    soapParamsPanel.style.display = 'none';
    console.log('SOAP panels hidden');
    
    // Cambiar endpoint a REST
    const endpointInput = document.getElementById('endpoint');
    if (endpointInput) {
      endpointInput.value = 'https://sistema.dtemite.cl/sistema/Backend/WsMaster/ApiIntegracionController.php/Api/Documento';
    }
    
    // Cargar plantilla REST por defecto
    loadTemplate('factura');
  }
}

/**
 * Actualiza el selector de plantillas según el tipo de API
 * @param {string} apiType - Tipo de API ('rest' o 'soap')
 */
function updateTemplateSelector(apiType) {
  const templateSelect = document.getElementById('documentTemplate');
  if (!templateSelect) return;
  
  // Limpiar opciones existentes
  templateSelect.innerHTML = '';
  
  if (apiType === 'soap') {
    // Agregar opciones SOAP
    const soapOptions = [
      { value: 'soap_emision', text: 'SOAP - Emision (Integrar documentos)' },
      { value: 'soap_obtener_pdf', text: 'SOAP - ObtenerPDF (Obtener PDF específico)' },
      { value: 'soap_obtener_xml', text: 'SOAP - ObtenerXml (Obtener XML específico)' },
      { value: 'soap_obtener_trazabilidad', text: 'SOAP - ObtenerTrazabilidad (Estado del documento)' },
      { value: 'soap_obtener_pdf_credible', text: 'SOAP - ObtenerPDFCredible (PDF Credible)' },
      { value: 'soap_get_dte_compra', text: 'SOAP - get_DTEcompra (DTE de compra por fechas)' },
      { value: 'custom', text: 'Personalizado' }
    ];
    
    soapOptions.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.value;
      optionElement.textContent = option.text;
      templateSelect.appendChild(optionElement);
    });
  } else {
    // Agregar opciones REST
    const restOptions = [
      { value: 'factura', text: 'Factura Electrónica' },
      { value: 'nota_credito', text: 'Nota de Crédito' },
      { value: 'boleta', text: 'Boleta Electrónica' },
      { value: 'custom', text: 'Personalizado' }
    ];
    
    restOptions.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.value;
      optionElement.textContent = option.text;
      templateSelect.appendChild(optionElement);
    });
  }
}

/**
 * Actualiza la visibilidad de los parámetros SOAP según el método seleccionado
 */
function updateSoapParamsVisibility() {
  console.log('updateSoapParamsVisibility called');
  
  const soapMethod = document.getElementById('soapMethod');
  const soapParamsPanel = document.getElementById('soapParamsPanel');
  
  if (!soapMethod || !soapParamsPanel) {
    console.error('Elementos SOAP no encontrados');
    return;
  }
  
  const selectedMethod = soapMethod.value;
  console.log('SOAP Method selected:', selectedMethod);
  
  // Métodos que requieren TipoDTE y FolioDTE
  const methodsWithTipoFolio = ['ObtenerPDF', 'ObtenerXml', 'ObtenerPDFCredible', 'ObtenerTrazabilidad'];
  
  // Métodos que requieren fechas
  const methodsWithDates = ['get_DTEcompra'];
  
  if (methodsWithTipoFolio.includes(selectedMethod)) {
    soapParamsPanel.style.display = 'block';
    // Mostrar solo campos de TipoDTE y FolioDTE
    const tipodte = document.getElementById('tipodte');
    const foliodte = document.getElementById('foliodte');
    const fechaDesde = document.getElementById('fechaDesde');
    const fechaHasta = document.getElementById('fechaHasta');
    
    if (tipodte) tipodte.style.display = 'block';
    if (foliodte) foliodte.style.display = 'block';
    if (fechaDesde) fechaDesde.style.display = 'none';
    if (fechaHasta) fechaHasta.style.display = 'none';
    
    // Mostrar/ocultar labels
    const tipodteLabel = document.querySelector('label[for="tipodte"]');
    const foliodteLabel = document.querySelector('label[for="foliodte"]');
    const fechaDesdeLabel = document.querySelector('label[for="fechaDesde"]');
    const fechaHastaLabel = document.querySelector('label[for="fechaHasta"]');
    
    if (tipodteLabel) tipodteLabel.style.display = 'block';
    if (foliodteLabel) foliodteLabel.style.display = 'block';
    if (fechaDesdeLabel) fechaDesdeLabel.style.display = 'none';
    if (fechaHastaLabel) fechaHastaLabel.style.display = 'none';
    
    console.log('Showing TipoDTE and FolioDTE fields');
  } else if (methodsWithDates.includes(selectedMethod)) {
    soapParamsPanel.style.display = 'block';
    // Mostrar solo campos de fechas
    const tipodte = document.getElementById('tipodte');
    const foliodte = document.getElementById('foliodte');
    const fechaDesde = document.getElementById('fechaDesde');
    const fechaHasta = document.getElementById('fechaHasta');
    
    if (tipodte) tipodte.style.display = 'none';
    if (foliodte) foliodte.style.display = 'none';
    if (fechaDesde) fechaDesde.style.display = 'block';
    if (fechaHasta) fechaHasta.style.display = 'block';
    
    // Mostrar/ocultar labels
    const tipodteLabel = document.querySelector('label[for="tipodte"]');
    const foliodteLabel = document.querySelector('label[for="foliodte"]');
    const fechaDesdeLabel = document.querySelector('label[for="fechaDesde"]');
    const fechaHastaLabel = document.querySelector('label[for="fechaHasta"]');
    
    if (tipodteLabel) tipodteLabel.style.display = 'none';
    if (foliodteLabel) foliodteLabel.style.display = 'none';
    if (fechaDesdeLabel) fechaDesdeLabel.style.display = 'block';
    if (fechaHastaLabel) fechaHastaLabel.style.display = 'block';
    
    console.log('Showing date fields');
  } else {
    soapParamsPanel.style.display = 'none';
    console.log('Hiding all parameter fields');
  }
}

/**
 * Inicializa el panel de pruebas cuando el documento está listo
 */
function initializePanel() {
  console.log('initializePanel called');
  
  // Verificar si el panel principal existe (no está oculto)
  const mainPanel = document.getElementById('panel-pruebas');
  if (!mainPanel) {
    console.log('Panel principal oculto, saltando inicialización');
    return;
  }
  
  // Esperar un poco más para asegurar que el DOM esté completamente cargado
  setTimeout(() => {
    // Agregar event listeners adicionales si es necesario
    const documentTemplate = document.getElementById('documentTemplate');
    if (documentTemplate) {
      documentTemplate.addEventListener('change', function() {
        loadTemplate();
      });
    }
    
    // Event listener para el selector de método SOAP
    const soapMethodSelect = document.getElementById('soapMethod');
    if (soapMethodSelect) {
      soapMethodSelect.addEventListener('change', updateSoapParamsVisibility);
      console.log('SOAP method event listener added');
    } else {
      console.error('soapMethodSelect not found');
    }
    
    // Event listener para el selector de tipo de API
    const apiTypeSelect = document.getElementById('apiType');
    if (apiTypeSelect) {
      apiTypeSelect.addEventListener('change', toggleSoapMethods);
      console.log('API type event listener added');
    } else {
      console.error('apiTypeSelect not found');
    }
    
    // Validación en tiempo real del contenido
    const jsonDataTextarea = document.getElementById('jsonData');
    if (jsonDataTextarea) {
      jsonDataTextarea.addEventListener('input', function() {
        const data = this.value;
        const apiType = document.getElementById('apiType').value;
        
        if (apiType === 'rest') {
          // Validar JSON para REST
          if (data.trim() && !validateJSON(data)) {
            this.style.borderColor = '#dc3545';
          } else {
            this.style.borderColor = '#ced4da';
          }
        } else {
          // Para SOAP, solo verificar que no esté vacío
          if (data.trim()) {
            this.style.borderColor = '#ced4da';
          } else {
            this.style.borderColor = '#dc3545';
          }
        }
      });
    }
    
    // Inicializar estado de controles SOAP
    toggleSoapMethods();
    console.log('Initial SOAP state set');
  }, 500);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded');
  initializePanel();
});

// También inicializar con jQuery si está disponible
if (typeof $ !== 'undefined') {
  $(document).ready(function() {
    console.log('jQuery Ready');
    initializePanel();
  });
}

// Función de prueba para verificar que todo funciona
function testSoapFunctionality() {
  console.log('=== TESTING SOAP FUNCTIONALITY ===');
  
  // Verificar elementos
  const elements = {
    apiType: document.getElementById('apiType'),
    soapMethodsPanel: document.getElementById('soapMethodsPanel'),
    soapParamsPanel: document.getElementById('soapParamsPanel'),
    soapMethod: document.getElementById('soapMethod'),
    documentTemplate: document.getElementById('documentTemplate')
  };
  
  console.log('Elements found:', elements);
  
  // Verificar funciones
  console.log('Functions available:', {
    toggleSoapMethods: typeof toggleSoapMethods,
    updateSoapParamsVisibility: typeof updateSoapParamsVisibility,
    initializePanel: typeof initializePanel,
    loadTemplate: typeof loadTemplate,
    updateTemplateSelector: typeof updateTemplateSelector
  });
  
  // Probar toggle
  if (elements.apiType) {
    console.log('Testing toggle...');
    elements.apiType.value = 'soap';
    toggleSoapMethods();
    
    setTimeout(() => {
      elements.apiType.value = 'rest';
      toggleSoapMethods();
      console.log('=== TEST COMPLETED ===');
    }, 1000);
  }
}

// Ejecutar test después de 2 segundos
setTimeout(testSoapFunctionality, 2000);

// Función adicional para probar las plantillas
function testTemplates() {
  console.log('=== TESTING TEMPLATES ===');
  
  // Probar plantillas REST
  console.log('REST Templates:');
  Object.keys(templates).forEach(key => {
    if (templates[key].type === 'rest') {
      console.log(`- ${key}: ${templates[key].name}`);
    }
  });
  
  // Probar plantillas SOAP
  console.log('SOAP Templates:');
  Object.keys(templates).forEach(key => {
    if (templates[key].type === 'soap') {
      console.log(`- ${key}: ${templates[key].name} (Method: ${templates[key].method})`);
    }
  });
  
  console.log('=== TEMPLATES TEST COMPLETED ===');
}

// Ejecutar test de plantillas después de 3 segundos
setTimeout(testTemplates, 3000);
