/**
 * Modal Panel de Pruebas de Envío - DTEmite
 * Archivo JavaScript para el modal de pruebas de envío con diferentes métodos
 * 
 * Funcionalidades:
 * - Modal con selector de métodos de envío (CURL, NodeJS, Python, PHP, Java, Go)
 * - Ejemplos de código para cada método
 * - Panel de pruebas de integración DTEmite
 * - Funcionalidad de copiar código
 */

// Ejemplos de código para cada método de envío - API DTEmite
const shippingCodeExamples = {
  curl: `curl -X POST 'https://sistema.dtemite.cl/sistema/Backend/WsMaster/ApiIntegracionController.php/Api/Documento' \\
-H 'Content-Type: application/json' \\
-H 'Accept: application/json' \\
-d '{
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
        "QtyItem": "1",
        "PrcItem": "11900",
        "MontoItem": "11900"
      }
    ]
  }
}'`,

  // NodeJS submétodos
  'nodejs_axios': `const axios = require('axios');

const sendDTEmiteRequest = async () => {
  try {
    const documentData = {
      Sistema: {
        nombre: "webbasico",
        rut: "29282726-1",
        usuario: "integrado_webbasico",
        clave: "d2ViYmFzaWNvMjAyMQ=="
      },
      Documento: {
        Encabezado: {
          IdDoc: {
            TipoDTE: "33",
            Folio: "0",
            MntBruto: "2",
            FchEmis: "2024-01-20",
            FchVenc: "2024-01-26"
          },
          Emisor: {
            RUTEmisor: "29282726-1",
            RznSocEmisor: "EMPRESA DE PRUEBA",
            GiroEmisor: "DESARROLLO DE SISTEMAS",
            DirOrigen: "Avenida del Software #11001101",
            CmnaOrigen: "PROVIDENCIA",
            CiudadOrigen: "SANTIAGO"
          },
          Receptor: {
            RUTRecep: "76399744-8",
            CdgIntRecep: "1000215-220",
            RznSocRecep: "CLIENTE DE PRUEBA",
            CorreoRecep: "prueba@dtemite.cl",
            DirRecep: "CALLE A 50",
            CmnaRecep: "SANTIAGO",
            CiudadRecep: "SANTIAGO"
          },
          Totales: {
            MntNeto: "10000",
            MntExe: "0",
            IVA: "1900",
            MntTotal: "11900"
          }
        },
        Detalle: [
          {
            NroLinDet: "1",
            CdgItem: {
              TpoCodigo: "INT1",
              VlrCodigo: "WWW"
            },
            NmbItem: "Descripción de producto WWW",
            QtyItem: "1",
            PrcItem: "11900",
            MontoItem: "11900"
          }
        ]
      }
    };

    const response = await axios.post(
      'https://sistema.dtemite.cl/sistema/Backend/WsMaster/ApiIntegracionController.php/Api/Documento',
      documentData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    );
    
    console.log('Respuesta DTEmite:', response.data);
  } catch (error) {
    console.error('Error DTEmite:', error.response?.data || error.message);
  }
};

sendDTEmiteRequest();`,

  'nodejs_native': `const https = require('https');

const sendDTEmiteRequest = () => {
  const documentData = JSON.stringify({
    Sistema: {
      nombre: "webbasico",
      rut: "29282726-1",
      usuario: "integrado_webbasico",
      clave: "d2ViYmFzaWNvMjAyMQ=="
    },
    Documento: {
      Encabezado: {
        IdDoc: {
          TipoDTE: "33",
          Folio: "0",
          MntBruto: "2",
          FchEmis: "2024-01-20",
          FchVenc: "2024-01-26"
        },
        Emisor: {
          RUTEmisor: "29282726-1",
          RznSocEmisor: "EMPRESA DE PRUEBA",
          GiroEmisor: "DESARROLLO DE SISTEMAS",
          DirOrigen: "Avenida del Software #11001101",
          CmnaOrigen: "PROVIDENCIA",
          CiudadOrigen: "SANTIAGO"
        },
        Receptor: {
          RUTRecep: "76399744-8",
          CdgIntRecep: "1000215-220",
          RznSocRecep: "CLIENTE DE PRUEBA",
          CorreoRecep: "prueba@dtemite.cl",
          DirRecep: "CALLE A 50",
          CmnaRecep: "SANTIAGO",
          CiudadRecep: "SANTIAGO"
        },
        Totales: {
          MntNeto: "10000",
          MntExe: "0",
          IVA: "1900",
          MntTotal: "11900"
        }
      },
      Detalle: [
        {
          NroLinDet: "1",
          CdgItem: {
            TpoCodigo: "INT1",
            VlrCodigo: "WWW"
          },
          NmbItem: "Descripción de producto WWW",
          QtyItem: "1",
          PrcItem: "11900",
          MontoItem: "11900"
        }
      ]
    }
  });

  const options = {
    hostname: 'sistema.dtemite.cl',
    path: '/sistema/Backend/WsMaster/ApiIntegracionController.php/Api/Documento',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Content-Length': Buffer.byteLength(documentData)
    }
  };

  const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      console.log('Respuesta DTEmite:', JSON.parse(data));
    });
  });

  req.on('error', (error) => {
    console.error('Error DTEmite:', error);
  });

  req.write(documentData);
  req.end();
};

sendDTEmiteRequest();`,

  'nodejs_request': `const request = require('request');

const sendDTEmiteRequest = () => {
  const documentData = {
    Sistema: {
      nombre: "webbasico",
      rut: "29282726-1",
      usuario: "integrado_webbasico",
      clave: "d2ViYmFzaWNvMjAyMQ=="
    },
    Documento: {
      Encabezado: {
        IdDoc: {
          TipoDTE: "33",
          Folio: "0",
          MntBruto: "2",
          FchEmis: "2024-01-20",
          FchVenc: "2024-01-26"
        },
        Emisor: {
          RUTEmisor: "29282726-1",
          RznSocEmisor: "EMPRESA DE PRUEBA",
          GiroEmisor: "DESARROLLO DE SISTEMAS",
          DirOrigen: "Avenida del Software #11001101",
          CmnaOrigen: "PROVIDENCIA",
          CiudadOrigen: "SANTIAGO"
        },
        Receptor: {
          RUTRecep: "76399744-8",
          CdgIntRecep: "1000215-220",
          RznSocRecep: "CLIENTE DE PRUEBA",
          CorreoRecep: "prueba@dtemite.cl",
          DirRecep: "CALLE A 50",
          CmnaRecep: "SANTIAGO",
          CiudadRecep: "SANTIAGO"
        },
        Totales: {
          MntNeto: "10000",
          MntExe: "0",
          IVA: "1900",
          MntTotal: "11900"
        }
      },
      Detalle: [
        {
          NroLinDet: "1",
          CdgItem: {
            TpoCodigo: "INT1",
            VlrCodigo: "WWW"
          },
          NmbItem: "Descripción de producto WWW",
          QtyItem: "1",
          PrcItem: "11900",
          MontoItem: "11900"
        }
      ]
    }
  };

  const options = {
    url: 'https://sistema.dtemite.cl/sistema/Backend/WsMaster/ApiIntegracionController.php/Api/Documento',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    json: documentData
  };

  request(options, (error, response, body) => {
    if (error) {
      console.error('Error DTEmite:', error);
    } else {
      console.log('Respuesta DTEmite:', body);
    }
  });
};

sendDTEmiteRequest();`,

  'nodejs_unirest': `const unirest = require('unirest');

const sendDTEmiteRequest = () => {
  unirest.post('https://sistema.dtemite.cl/sistema/Backend/WsMaster/ApiIntegracionController.php/Api/Documento')
    .headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
    .send({
      Sistema: {
        nombre: "webbasico",
        rut: "29282726-1",
        usuario: "integrado_webbasico",
        clave: "d2ViYmFzaWNvMjAyMQ=="
      },
      Documento: {
        Encabezado: {
          IdDoc: {
            TipoDTE: "33",
            Folio: "0",
            MntBruto: "2",
            FchEmis: "2024-01-20",
            FchVenc: "2024-01-26"
          },
          Emisor: {
            RUTEmisor: "29282726-1",
            RznSocEmisor: "EMPRESA DE PRUEBA",
            GiroEmisor: "DESARROLLO DE SISTEMAS",
            DirOrigen: "Avenida del Software #11001101",
            CmnaOrigen: "PROVIDENCIA",
            CiudadOrigen: "SANTIAGO"
          },
          Receptor: {
            RUTRecep: "76399744-8",
            CdgIntRecep: "1000215-220",
            RznSocRecep: "CLIENTE DE PRUEBA",
            CorreoRecep: "prueba@dtemite.cl",
            DirRecep: "CALLE A 50",
            CmnaRecep: "SANTIAGO",
            CiudadRecep: "SANTIAGO"
          },
          Totales: {
            MntNeto: "10000",
            MntExe: "0",
            IVA: "1900",
            MntTotal: "11900"
          }
        },
        Detalle: [
          {
            NroLinDet: "1",
            CdgItem: {
              TpoCodigo: "INT1",
              VlrCodigo: "WWW"
            },
            NmbItem: "Descripción de producto WWW",
            QtyItem: "1",
            PrcItem: "11900",
            MontoItem: "11900"
          }
        ]
      }
    })
    .end((response) => {
      if (response.error) {
        console.error('Error DTEmite:', response.error);
      } else {
        console.log('Respuesta DTEmite:', response.body);
      }
    });
};

sendDTEmiteRequest();`,

  // Python submétodos
  'python_requests': `import requests
import json

def send_dtemite_request():
    url = 'https://sistema.dtemite.cl/sistema/Backend/WsMaster/ApiIntegracionController.php/Api/Documento'
    
    document_data = {
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
                    "QtyItem": "1",
                    "PrcItem": "11900",
                    "MontoItem": "11900"
                }
            ]
        }
    }
    
    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    
    try:
        response = requests.post(url, json=document_data, headers=headers)
        response.raise_for_status()
        print("Respuesta DTEmite:", response.json())
    except requests.exceptions.RequestException as e:
        print("Error DTEmite:", e)

send_dtemite_request()`,

  'python_http': `import http.client
import json

def send_dtemite_request():
    conn = http.client.HTTPSConnection("sistema.dtemite.cl")
    
    document_data = {
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
                    "QtyItem": "1",
                    "PrcItem": "11900",
                    "MontoItem": "11900"
                }
            ]
        }
    }
    
    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    
    try:
        conn.request("POST", "/sistema/Backend/WsMaster/ApiIntegracionController.php/Api/Documento", 
                    json.dumps(document_data), headers)
        response = conn.getresponse()
        data = response.read()
        print("Respuesta DTEmite:", json.loads(data.decode('utf-8')))
    except Exception as e:
        print("Error DTEmite:", e)
    finally:
        conn.close()

send_dtemite_request()`,

  // PHP submétodos
  'php_curl': `<?php
function sendDTEmiteRequest() {
    $url = 'https://sistema.dtemite.cl/sistema/Backend/WsMaster/ApiIntegracionController.php/Api/Documento';
    
    $documentData = [
        'Sistema' => [
            'nombre' => 'webbasico',
            'rut' => '29282726-1',
            'usuario' => 'integrado_webbasico',
            'clave' => 'd2ViYmFzaWNvMjAyMQ=='
        ],
        'Documento' => [
            'Encabezado' => [
                'IdDoc' => [
                    'TipoDTE' => '33',
                    'Folio' => '0',
                    'MntBruto' => '2',
                    'FchEmis' => '2024-01-20',
                    'FchVenc' => '2024-01-26'
                ],
                'Emisor' => [
                    'RUTEmisor' => '29282726-1',
                    'RznSocEmisor' => 'EMPRESA DE PRUEBA',
                    'GiroEmisor' => 'DESARROLLO DE SISTEMAS',
                    'DirOrigen' => 'Avenida del Software #11001101',
                    'CmnaOrigen' => 'PROVIDENCIA',
                    'CiudadOrigen' => 'SANTIAGO'
                ],
                'Receptor' => [
                    'RUTRecep' => '76399744-8',
                    'CdgIntRecep' => '1000215-220',
                    'RznSocRecep' => 'CLIENTE DE PRUEBA',
                    'CorreoRecep' => 'prueba@dtemite.cl',
                    'DirRecep' => 'CALLE A 50',
                    'CmnaRecep' => 'SANTIAGO',
                    'CiudadRecep' => 'SANTIAGO'
                ],
                'Totales' => [
                    'MntNeto' => '10000',
                    'MntExe' => '0',
                    'IVA' => '1900',
                    'MntTotal' => '11900'
                ]
            ],
            'Detalle' => [
                [
                    'NroLinDet' => '1',
                    'CdgItem' => [
                        'TpoCodigo' => 'INT1',
                        'VlrCodigo' => 'WWW'
                    ],
                    'NmbItem' => 'Descripción de producto WWW',
                    'QtyItem' => '1',
                    'PrcItem' => '11900',
                    'MontoItem' => '11900'
                ]
            ]
        ]
    ];
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($documentData));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Accept: application/json'
    ]);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    
    if (curl_error($ch)) {
        echo "Error DTEmite: " . curl_error($ch);
    } else {
        echo "Respuesta DTEmite: " . $response;
    }
    
    curl_close($ch);
}

sendDTEmiteRequest();
?>`,

  'php_guzzle': `<?php
require_once 'vendor/autoload.php';

use GuzzleHttp\\Client;
use GuzzleHttp\\Exception\\RequestException;

function sendDTEmiteRequest() {
    $client = new Client();
    
    $documentData = [
        'Sistema' => [
            'nombre' => 'webbasico',
            'rut' => '29282726-1',
            'usuario' => 'integrado_webbasico',
            'clave' => 'd2ViYmFzaWNvMjAyMQ=='
        ],
        'Documento' => [
            'Encabezado' => [
                'IdDoc' => [
                    'TipoDTE' => '33',
                    'Folio' => '0',
                    'MntBruto' => '2',
                    'FchEmis' => '2024-01-20',
                    'FchVenc' => '2024-01-26'
                ],
                'Emisor' => [
                    'RUTEmisor' => '29282726-1',
                    'RznSocEmisor' => 'EMPRESA DE PRUEBA',
                    'GiroEmisor' => 'DESARROLLO DE SISTEMAS',
                    'DirOrigen' => 'Avenida del Software #11001101',
                    'CmnaOrigen' => 'PROVIDENCIA',
                    'CiudadOrigen' => 'SANTIAGO'
                ],
                'Receptor' => [
                    'RUTRecep' => '76399744-8',
                    'CdgIntRecep' => '1000215-220',
                    'RznSocRecep' => 'CLIENTE DE PRUEBA',
                    'CorreoRecep' => 'prueba@dtemite.cl',
                    'DirRecep' => 'CALLE A 50',
                    'CmnaRecep' => 'SANTIAGO',
                    'CiudadRecep' => 'SANTIAGO'
                ],
                'Totales' => [
                    'MntNeto' => '10000',
                    'MntExe' => '0',
                    'IVA' => '1900',
                    'MntTotal' => '11900'
                ]
            ],
            'Detalle' => [
                [
                    'NroLinDet' => '1',
                    'CdgItem' => [
                        'TpoCodigo' => 'INT1',
                        'VlrCodigo' => 'WWW'
                    ],
                    'NmbItem' => 'Descripción de producto WWW',
                    'QtyItem' => '1',
                    'PrcItem' => '11900',
                    'MontoItem' => '11900'
                ]
            ]
        ]
    ];
    
    try {
        $response = $client->post('https://sistema.dtemite.cl/sistema/Backend/WsMaster/ApiIntegracionController.php/Api/Documento', [
            'json' => $documentData,
            'headers' => [
                'Content-Type' => 'application/json',
                'Accept' => 'application/json'
            ]
        ]);
        
        echo "Respuesta DTEmite: " . $response->getBody();
    } catch (RequestException $e) {
        echo "Error DTEmite: " . $e->getMessage();
    }
}

sendDTEmiteRequest();
?>`,

  'php_http_request2': `<?php
require_once 'HTTP/Request2.php';

function sendDTEmiteRequest() {
    $request = new HTTP_Request2();
    $request->setUrl('https://sistema.dtemite.cl/sistema/Backend/WsMaster/ApiIntegracionController.php/Api/Documento');
    $request->setMethod(HTTP_Request2::METHOD_POST);
    
    $documentData = [
        'Sistema' => [
            'nombre' => 'webbasico',
            'rut' => '29282726-1',
            'usuario' => 'integrado_webbasico',
            'clave' => 'd2ViYmFzaWNvMjAyMQ=='
        ],
        'Documento' => [
            'Encabezado' => [
                'IdDoc' => [
                    'TipoDTE' => '33',
                    'Folio' => '0',
                    'MntBruto' => '2',
                    'FchEmis' => '2024-01-20',
                    'FchVenc' => '2024-01-26'
                ],
                'Emisor' => [
                    'RUTEmisor' => '29282726-1',
                    'RznSocEmisor' => 'EMPRESA DE PRUEBA',
                    'GiroEmisor' => 'DESARROLLO DE SISTEMAS',
                    'DirOrigen' => 'Avenida del Software #11001101',
                    'CmnaOrigen' => 'PROVIDENCIA',
                    'CiudadOrigen' => 'SANTIAGO'
                ],
                'Receptor' => [
                    'RUTRecep' => '76399744-8',
                    'CdgIntRecep' => '1000215-220',
                    'RznSocRecep' => 'CLIENTE DE PRUEBA',
                    'CorreoRecep' => 'prueba@dtemite.cl',
                    'DirRecep' => 'CALLE A 50',
                    'CmnaRecep' => 'SANTIAGO',
                    'CiudadRecep' => 'SANTIAGO'
                ],
                'Totales' => [
                    'MntNeto' => '10000',
                    'MntExe' => '0',
                    'IVA' => '1900',
                    'MntTotal' => '11900'
                ]
            ],
            'Detalle' => [
                [
                    'NroLinDet' => '1',
                    'CdgItem' => [
                        'TpoCodigo' => 'INT1',
                        'VlrCodigo' => 'WWW'
                    ],
                    'NmbItem' => 'Descripción de producto WWW',
                    'QtyItem' => '1',
                    'PrcItem' => '11900',
                    'MontoItem' => '11900'
                ]
            ]
        ]
    ];
    
    $request->setHeader([
        'Content-Type' => 'application/json',
        'Accept' => 'application/json'
    ]);
    
    $request->setBody(json_encode($documentData));
    
    try {
        $response = $request->send();
        echo "Respuesta DTEmite: " . $response->getBody();
    } catch (HTTP_Request2_Exception $e) {
        echo "Error DTEmite: " . $e->getMessage();
    }
}

sendDTEmiteRequest();
?>`,

  'php_pecl_http': `<?php
function sendDTEmiteRequest() {
    $documentData = [
        'Sistema' => [
            'nombre' => 'webbasico',
            'rut' => '29282726-1',
            'usuario' => 'integrado_webbasico',
            'clave' => 'd2ViYmFzaWNvMjAyMQ=='
        ],
        'Documento' => [
            'Encabezado' => [
                'IdDoc' => [
                    'TipoDTE' => '33',
                    'Folio' => '0',
                    'MntBruto' => '2',
                    'FchEmis' => '2024-01-20',
                    'FchVenc' => '2024-01-26'
                ],
                'Emisor' => [
                    'RUTEmisor' => '29282726-1',
                    'RznSocEmisor' => 'EMPRESA DE PRUEBA',
                    'GiroEmisor' => 'DESARROLLO DE SISTEMAS',
                    'DirOrigen' => 'Avenida del Software #11001101',
                    'CmnaOrigen' => 'PROVIDENCIA',
                    'CiudadOrigen' => 'SANTIAGO'
                ],
                'Receptor' => [
                    'RUTRecep' => '76399744-8',
                    'CdgIntRecep' => '1000215-220',
                    'RznSocRecep' => 'CLIENTE DE PRUEBA',
                    'CorreoRecep' => 'prueba@dtemite.cl',
                    'DirRecep' => 'CALLE A 50',
                    'CmnaRecep' => 'SANTIAGO',
                    'CiudadRecep' => 'SANTIAGO'
                ],
                'Totales' => [
                    'MntNeto' => '10000',
                    'MntExe' => '0',
                    'IVA' => '1900',
                    'MntTotal' => '11900'
                ]
            ],
            'Detalle' => [
                [
                    'NroLinDet' => '1',
                    'CdgItem' => [
                        'TpoCodigo' => 'INT1',
                        'VlrCodigo' => 'WWW'
                    ],
                    'NmbItem' => 'Descripción de producto WWW',
                    'QtyItem' => '1',
                    'PrcItem' => '11900',
                    'MontoItem' => '11900'
                ]
            ]
        ]
    ];
    
    $request = new HttpRequest('https://sistema.dtemite.cl/sistema/Backend/WsMaster/ApiIntegracionController.php/Api/Documento', HttpRequest::METH_POST);
    $request->setHeaders([
        'Content-Type' => 'application/json',
        'Accept' => 'application/json'
    ]);
    $request->setBody(json_encode($documentData));
    
    try {
        $response = $request->send();
        echo "Respuesta DTEmite: " . $response->getBody();
    } catch (HttpException $e) {
        echo "Error DTEmite: " . $e->getMessage();
    }
}

sendDTEmiteRequest();
?>`,

  // Java submétodos
  'java_okhttp': `import okhttp3.*;
import com.google.gson.Gson;
import java.io.IOException;

public class DTEmiteClient {
    private static final String URL = "https://sistema.dtemite.cl/sistema/Backend/WsMaster/ApiIntegracionController.php/Api/Documento";
    
    public static void main(String[] args) {
        sendDTEmiteRequest();
    }
    
    public static void sendDTEmiteRequest() {
        OkHttpClient client = new OkHttpClient();
        Gson gson = new Gson();
        
        DocumentData documentData = new DocumentData();
        
        RequestBody body = RequestBody.create(
            gson.toJson(documentData),
            MediaType.parse("application/json")
        );
        
        Request request = new Request.Builder()
            .url(URL)
            .post(body)
            .addHeader("Content-Type", "application/json")
            .addHeader("Accept", "application/json")
            .build();
        
        try (Response response = client.newCall(request).execute()) {
            if (response.isSuccessful()) {
                System.out.println("Respuesta DTEmite: " + response.body().string());
            } else {
                System.out.println("Error DTEmite: " + response.code() + " - " + response.message());
            }
        } catch (IOException e) {
            System.out.println("Error DTEmite: " + e.getMessage());
        }
    }
    
    static class DocumentData {
        Sistema sistema = new Sistema();
        Documento documento = new Documento();
    }
    
    static class Sistema {
        String nombre = "webbasico";
        String rut = "29282726-1";
        String usuario = "integrado_webbasico";
        String clave = "d2ViYmFzaWNvMjAyMQ==";
    }
    
    static class Documento {
        Encabezado encabezado = new Encabezado();
        Detalle[] detalle = {new Detalle()};
    }
    
    static class Encabezado {
        IdDoc idDoc = new IdDoc();
        Emisor emisor = new Emisor();
        Receptor receptor = new Receptor();
        Totales totales = new Totales();
    }
    
    static class IdDoc {
        String tipoDTE = "33";
        String folio = "0";
        String mntBruto = "2";
        String fchEmis = "2024-01-20";
        String fchVenc = "2024-01-26";
    }
    
    static class Emisor {
        String rutEmisor = "29282726-1";
        String rznSocEmisor = "EMPRESA DE PRUEBA";
        String giroEmisor = "DESARROLLO DE SISTEMAS";
        String dirOrigen = "Avenida del Software #11001101";
        String cmnaOrigen = "PROVIDENCIA";
        String ciudadOrigen = "SANTIAGO";
    }
    
    static class Receptor {
        String rutRecep = "76399744-8";
        String cdgIntRecep = "1000215-220";
        String rznSocRecep = "CLIENTE DE PRUEBA";
        String correoRecep = "prueba@dtemite.cl";
        String dirRecep = "CALLE A 50";
        String cmnaRecep = "SANTIAGO";
        String ciudadRecep = "SANTIAGO";
    }
    
    static class Totales {
        String mntNeto = "10000";
        String mntExe = "0";
        String iva = "1900";
        String mntTotal = "11900";
    }
    
    static class Detalle {
        String nroLinDet = "1";
        CdgItem cdgItem = new CdgItem();
        String nmbItem = "Descripción de producto WWW";
        String qtyItem = "1";
        String prcItem = "11900";
        String montoItem = "11900";
    }
    
    static class CdgItem {
        String tpoCodigo = "INT1";
        String vlrCodigo = "WWW";
    }
}`,

  'java_unirest': `import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import com.google.gson.Gson;

public class DTEmiteClient {
    public static void main(String[] args) {
        sendDTEmiteRequest();
    }
    
    public static void sendDTEmiteRequest() {
        Gson gson = new Gson();
        DocumentData documentData = new DocumentData();
        
        try {
            String response = Unirest.post("https://sistema.dtemite.cl/sistema/Backend/WsMaster/ApiIntegracionController.php/Api/Documento")
                .header("Content-Type", "application/json")
                .header("Accept", "application/json")
                .body(gson.toJson(documentData))
                .asString()
                .getBody();
            
            System.out.println("Respuesta DTEmite: " + response);
        } catch (UnirestException e) {
            System.out.println("Error DTEmite: " + e.getMessage());
        }
    }
    
    static class DocumentData {
        Sistema sistema = new Sistema();
        Documento documento = new Documento();
    }
    
    static class Sistema {
        String nombre = "webbasico";
        String rut = "29282726-1";
        String usuario = "integrado_webbasico";
        String clave = "d2ViYmFzaWNvMjAyMQ==";
    }
    
    static class Documento {
        Encabezado encabezado = new Encabezado();
        Detalle[] detalle = {new Detalle()};
    }
    
    static class Encabezado {
        IdDoc idDoc = new IdDoc();
        Emisor emisor = new Emisor();
        Receptor receptor = new Receptor();
        Totales totales = new Totales();
    }
    
    static class IdDoc {
        String tipoDTE = "33";
        String folio = "0";
        String mntBruto = "2";
        String fchEmis = "2024-01-20";
        String fchVenc = "2024-01-26";
    }
    
    static class Emisor {
        String rutEmisor = "29282726-1";
        String rznSocEmisor = "EMPRESA DE PRUEBA";
        String giroEmisor = "DESARROLLO DE SISTEMAS";
        String dirOrigen = "Avenida del Software #11001101";
        String cmnaOrigen = "PROVIDENCIA";
        String ciudadOrigen = "SANTIAGO";
    }
    
    static class Receptor {
        String rutRecep = "76399744-8";
        String cdgIntRecep = "1000215-220";
        String rznSocRecep = "CLIENTE DE PRUEBA";
        String correoRecep = "prueba@dtemite.cl";
        String dirRecep = "CALLE A 50";
        String cmnaRecep = "SANTIAGO";
        String ciudadRecep = "SANTIAGO";
    }
    
    static class Totales {
        String mntNeto = "10000";
        String mntExe = "0";
        String iva = "1900";
        String mntTotal = "11900";
    }
    
    static class Detalle {
        String nroLinDet = "1";
        CdgItem cdgItem = new CdgItem();
        String nmbItem = "Descripción de producto WWW";
        String qtyItem = "1";
        String prcItem = "11900";
        String montoItem = "11900";
    }
    
    static class CdgItem {
        String tpoCodigo = "INT1";
        String vlrCodigo = "WWW";
    }
}`,

  nodejs: `const axios = require('axios');

const sendDTEmiteRequest = async () => {
  try {
    const documentData = {
      Sistema: {
        nombre: "webbasico",
        rut: "29282726-1",
        usuario: "integrado_webbasico",
        clave: "d2ViYmFzaWNvMjAyMQ=="
      },
      Documento: {
        Encabezado: {
          IdDoc: {
            TipoDTE: "33",
            Folio: "0",
            MntBruto: "2",
            FchEmis: "2024-01-20",
            FchVenc: "2024-01-26"
          },
          Emisor: {
            RUTEmisor: "29282726-1",
            RznSocEmisor: "EMPRESA DE PRUEBA",
            GiroEmisor: "DESARROLLO DE SISTEMAS",
            DirOrigen: "Avenida del Software #11001101",
            CmnaOrigen: "PROVIDENCIA",
            CiudadOrigen: "SANTIAGO"
          },
          Receptor: {
            RUTRecep: "76399744-8",
            CdgIntRecep: "1000215-220",
            RznSocRecep: "CLIENTE DE PRUEBA",
            CorreoRecep: "prueba@dtemite.cl",
            DirRecep: "CALLE A 50",
            CmnaRecep: "SANTIAGO",
            CiudadRecep: "SANTIAGO"
          },
          Totales: {
            MntNeto: "10000",
            MntExe: "0",
            IVA: "1900",
            MntTotal: "11900"
          }
        },
        Detalle: [
          {
            NroLinDet: "1",
            CdgItem: {
              TpoCodigo: "INT1",
              VlrCodigo: "WWW"
            },
            NmbItem: "Descripción de producto WWW",
            QtyItem: "1",
            PrcItem: "11900",
            MontoItem: "11900"
          }
        ]
      }
    };

    const response = await axios.post(
      'https://sistema.dtemite.cl/sistema/Backend/WsMaster/ApiIntegracionController.php/Api/Documento',
      documentData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    );
    
    console.log('Respuesta DTEmite:', response.data);
  } catch (error) {
    console.error('Error DTEmite:', error.response?.data || error.message);
  }
};

sendDTEmiteRequest();`,

  python: `import requests
import json

def send_dtemite_request():
    url = 'https://sistema.dtemite.cl/sistema/Backend/WsMaster/ApiIntegracionController.php/Api/Documento'
    
    document_data = {
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
                    "QtyItem": "1",
                    "PrcItem": "11900",
                    "MontoItem": "11900"
                }
            ]
        }
    }
    
    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    
    try:
        response = requests.post(url, json=document_data, headers=headers)
        response.raise_for_status()
        print('Respuesta DTEmite:', response.json())
    except requests.exceptions.RequestException as e:
        print(f'Error DTEmite: {e}')

send_dtemite_request()`,

  php: `<?php
$url = 'https://sistema.dtemite.cl/sistema/Backend/WsMaster/ApiIntegracionController.php/Api/Documento';

$documentData = array(
    'Sistema' => array(
        'nombre' => 'webbasico',
        'rut' => '29282726-1',
        'usuario' => 'integrado_webbasico',
        'clave' => 'd2ViYmFzaWNvMjAyMQ=='
    ),
    'Documento' => array(
        'Encabezado' => array(
            'IdDoc' => array(
                'TipoDTE' => '33',
                'Folio' => '0',
                'MntBruto' => '2',
                'FchEmis' => '2024-01-20',
                'FchVenc' => '2024-01-26'
            ),
            'Emisor' => array(
                'RUTEmisor' => '29282726-1',
                'RznSocEmisor' => 'EMPRESA DE PRUEBA',
                'GiroEmisor' => 'DESARROLLO DE SISTEMAS',
                'DirOrigen' => 'Avenida del Software #11001101',
                'CmnaOrigen' => 'PROVIDENCIA',
                'CiudadOrigen' => 'SANTIAGO'
            ),
            'Receptor' => array(
                'RUTRecep' => '76399744-8',
                'CdgIntRecep' => '1000215-220',
                'RznSocRecep' => 'CLIENTE DE PRUEBA',
                'CorreoRecep' => 'prueba@dtemite.cl',
                'DirRecep' => 'CALLE A 50',
                'CmnaRecep' => 'SANTIAGO',
                'CiudadRecep' => 'SANTIAGO'
            ),
            'Totales' => array(
                'MntNeto' => '10000',
                'MntExe' => '0',
                'IVA' => '1900',
                'MntTotal' => '11900'
            )
        ),
        'Detalle' => array(
            array(
                'NroLinDet' => '1',
                'CdgItem' => array(
                    'TpoCodigo' => 'INT1',
                    'VlrCodigo' => 'WWW'
                ),
                'NmbItem' => 'Descripción de producto WWW',
                'QtyItem' => '1',
                'PrcItem' => '11900',
                'MontoItem' => '11900'
            )
        )
    )
);

$options = array(
    'http' => array(
        'header' => "Content-Type: application/json\\r\\n" .
                   "Accept: application/json\\r\\n",
        'method' => 'POST',
        'content' => json_encode($documentData)
    )
);

$context = stream_context_create($options);
$result = file_get_contents($url, false, $context);

if ($result === FALSE) {
    echo "Error en la petición DTEmite";
} else {
    echo "Respuesta DTEmite: " . $result;
}
?>`,

  java: `import java.io.*;
import java.net.*;
import java.nio.charset.StandardCharsets;
import com.google.gson.Gson;
import com.google.gson.JsonObject;

public class DTEmiteClient {
    public static void main(String[] args) throws IOException {
        String url = "https://sistema.dtemite.cl/sistema/Backend/WsMaster/ApiIntegracionController.php/Api/Documento";
        
        // Crear objeto JSON para DTEmite
        JsonObject documentData = new JsonObject();
        
        JsonObject sistema = new JsonObject();
        sistema.addProperty("nombre", "webbasico");
        sistema.addProperty("rut", "29282726-1");
        sistema.addProperty("usuario", "integrado_webbasico");
        sistema.addProperty("clave", "d2ViYmFzaWNvMjAyMQ==");
        
        JsonObject documento = new JsonObject();
        JsonObject encabezado = new JsonObject();
        
        JsonObject idDoc = new JsonObject();
        idDoc.addProperty("TipoDTE", "33");
        idDoc.addProperty("Folio", "0");
        idDoc.addProperty("MntBruto", "2");
        idDoc.addProperty("FchEmis", "2024-01-20");
        idDoc.addProperty("FchVenc", "2024-01-26");
        
        JsonObject emisor = new JsonObject();
        emisor.addProperty("RUTEmisor", "29282726-1");
        emisor.addProperty("RznSocEmisor", "EMPRESA DE PRUEBA");
        emisor.addProperty("GiroEmisor", "DESARROLLO DE SISTEMAS");
        emisor.addProperty("DirOrigen", "Avenida del Software #11001101");
        emisor.addProperty("CmnaOrigen", "PROVIDENCIA");
        emisor.addProperty("CiudadOrigen", "SANTIAGO");
        
        JsonObject receptor = new JsonObject();
        receptor.addProperty("RUTRecep", "76399744-8");
        receptor.addProperty("CdgIntRecep", "1000215-220");
        receptor.addProperty("RznSocRecep", "CLIENTE DE PRUEBA");
        receptor.addProperty("CorreoRecep", "prueba@dtemite.cl");
        receptor.addProperty("DirRecep", "CALLE A 50");
        receptor.addProperty("CmnaRecep", "SANTIAGO");
        receptor.addProperty("CiudadRecep", "SANTIAGO");
        
        JsonObject totales = new JsonObject();
        totales.addProperty("MntNeto", "10000");
        totales.addProperty("MntExe", "0");
        totales.addProperty("IVA", "1900");
        totales.addProperty("MntTotal", "11900");
        
        encabezado.add("IdDoc", idDoc);
        encabezado.add("Emisor", emisor);
        encabezado.add("Receptor", receptor);
        encabezado.add("Totales", totales);
        
        documento.add("Encabezado", encabezado);
        
        documentData.add("Sistema", sistema);
        documentData.add("Documento", documento);
        
        String jsonData = new Gson().toJson(documentData);
        
        HttpURLConnection connection = (HttpURLConnection) new URL(url).openConnection();
        connection.setRequestMethod("POST");
        connection.setRequestProperty("Content-Type", "application/json");
        connection.setRequestProperty("Accept", "application/json");
        connection.setDoOutput(true);
        
        try (OutputStream os = connection.getOutputStream()) {
            byte[] input = jsonData.getBytes(StandardCharsets.UTF_8);
            os.write(input, 0, input.length);
        }
        
        try (BufferedReader br = new BufferedReader(
                new InputStreamReader(connection.getInputStream(), StandardCharsets.UTF_8))) {
            StringBuilder response = new StringBuilder();
            String responseLine;
            while ((responseLine = br.readLine()) != null) {
                response.append(responseLine.trim());
            }
            System.out.println("Respuesta DTEmite: " + response.toString());
        }
    }
}`,

  go: `package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io"
    "net/http"
)

type DTEmiteDocument struct {
    Sistema struct {
        Nombre  string \`json:"nombre"\`
        RUT     string \`json:"rut"\`
        Usuario string \`json:"usuario"\`
        Clave   string \`json:"clave"\`
    } \`json:"Sistema"\`
    Documento struct {
        Encabezado struct {
            IdDoc struct {
                TipoDTE  string \`json:"TipoDTE"\`
                Folio    string \`json:"Folio"\`
                MntBruto string \`json:"MntBruto"\`
                FchEmis  string \`json:"FchEmis"\`
                FchVenc  string \`json:"FchVenc"\`
            } \`json:"IdDoc"\`
            Emisor struct {
                RUTEmisor     string \`json:"RUTEmisor"\`
                RznSocEmisor  string \`json:"RznSocEmisor"\`
                GiroEmisor    string \`json:"GiroEmisor"\`
                DirOrigen     string \`json:"DirOrigen"\`
                CmnaOrigen    string \`json:"CmnaOrigen"\`
                CiudadOrigen  string \`json:"CiudadOrigen"\`
            } \`json:"Emisor"\`
            Receptor struct {
                RUTRecep     string \`json:"RUTRecep"\`
                CdgIntRecep  string \`json:"CdgIntRecep"\`
                RznSocRecep  string \`json:"RznSocRecep"\`
                CorreoRecep  string \`json:"CorreoRecep"\`
                DirRecep     string \`json:"DirRecep"\`
                CmnaRecep    string \`json:"CmnaRecep"\`
                CiudadRecep  string \`json:"CiudadRecep"\`
            } \`json:"Receptor"\`
            Totales struct {
                MntNeto  string \`json:"MntNeto"\`
                MntExe   string \`json:"MntExe"\`
                IVA      string \`json:"IVA"\`
                MntTotal string \`json:"MntTotal"\`
            } \`json:"Totales"\`
        } \`json:"Encabezado"\`
        Detalle []struct {
            NroLinDet string \`json:"NroLinDet"\`
            CdgItem   struct {
                TpoCodigo string \`json:"TpoCodigo"\`
                VlrCodigo string \`json:"VlrCodigo"\`
            } \`json:"CdgItem"\`
            NmbItem   string \`json:"NmbItem"\`
            QtyItem   string \`json:"QtyItem"\`
            PrcItem   string \`json:"PrcItem"\`
            MontoItem string \`json:"MontoItem"\`
        } \`json:"Detalle"\`
    } \`json:"Documento"\`
}

func main() {
    apiURL := "https://sistema.dtemite.cl/sistema/Backend/WsMaster/ApiIntegracionController.php/Api/Documento"
    
    document := DTEmiteDocument{}
    document.Sistema.Nombre = "webbasico"
    document.Sistema.RUT = "29282726-1"
    document.Sistema.Usuario = "integrado_webbasico"
    document.Sistema.Clave = "d2ViYmFzaWNvMjAyMQ=="
    
    document.Documento.Encabezado.IdDoc.TipoDTE = "33"
    document.Documento.Encabezado.IdDoc.Folio = "0"
    document.Documento.Encabezado.IdDoc.MntBruto = "2"
    document.Documento.Encabezado.IdDoc.FchEmis = "2024-01-20"
    document.Documento.Encabezado.IdDoc.FchVenc = "2024-01-26"
    
    document.Documento.Encabezado.Emisor.RUTEmisor = "29282726-1"
    document.Documento.Encabezado.Emisor.RznSocEmisor = "EMPRESA DE PRUEBA"
    document.Documento.Encabezado.Emisor.GiroEmisor = "DESARROLLO DE SISTEMAS"
    document.Documento.Encabezado.Emisor.DirOrigen = "Avenida del Software #11001101"
    document.Documento.Encabezado.Emisor.CmnaOrigen = "PROVIDENCIA"
    document.Documento.Encabezado.Emisor.CiudadOrigen = "SANTIAGO"
    
    document.Documento.Encabezado.Receptor.RUTRecep = "76399744-8"
    document.Documento.Encabezado.Receptor.CdgIntRecep = "1000215-220"
    document.Documento.Encabezado.Receptor.RznSocRecep = "CLIENTE DE PRUEBA"
    document.Documento.Encabezado.Receptor.CorreoRecep = "prueba@dtemite.cl"
    document.Documento.Encabezado.Receptor.DirRecep = "CALLE A 50"
    document.Documento.Encabezado.Receptor.CmnaRecep = "SANTIAGO"
    document.Documento.Encabezado.Receptor.CiudadRecep = "SANTIAGO"
    
    document.Documento.Encabezado.Totales.MntNeto = "10000"
    document.Documento.Encabezado.Totales.MntExe = "0"
    document.Documento.Encabezado.Totales.IVA = "1900"
    document.Documento.Encabezado.Totales.MntTotal = "11900"
    
    document.Documento.Detalle = append(document.Documento.Detalle, struct {
        NroLinDet string \`json:"NroLinDet"\`
        CdgItem   struct {
            TpoCodigo string \`json:"TpoCodigo"\`
            VlrCodigo string \`json:"VlrCodigo"\`
        } \`json:"CdgItem"\`
        NmbItem   string \`json:"NmbItem"\`
        QtyItem   string \`json:"QtyItem"\`
        PrcItem   string \`json:"PrcItem"\`
        MontoItem string \`json:"MontoItem"\`
    }{
        NroLinDet: "1",
        CdgItem: struct {
            TpoCodigo string \`json:"TpoCodigo"\`
            VlrCodigo string \`json:"VlrCodigo"\`
        }{
            TpoCodigo: "INT1",
            VlrCodigo: "WWW",
        },
        NmbItem:   "Descripción de producto WWW",
        QtyItem:   "1",
        PrcItem:   "11900",
        MontoItem: "11900",
    })
    
    jsonData, err := json.Marshal(document)
    if err != nil {
        fmt.Printf("Error marshaling JSON: %v\\n", err)
        return
    }
    
    req, err := http.NewRequest("POST", apiURL, bytes.NewBuffer(jsonData))
    if err != nil {
        fmt.Printf("Error creating request: %v\\n", err)
        return
    }
    
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Accept", "application/json")
    
    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        fmt.Printf("Error making request: %v\\n", err)
        return
    }
    defer resp.Body.Close()
    
    body, err := io.ReadAll(resp.Body)
    if err != nil {
        fmt.Printf("Error reading response: %v\\n", err)
        return
    }
    
    fmt.Println("Respuesta DTEmite:", string(body))
}`,

  ruby: `require 'net/http'
require 'json'
require 'uri'

def send_dtemite_request
  url = URI('https://sistema.dtemite.cl/sistema/Backend/WsMaster/ApiIntegracionController.php/Api/Documento')
  
  document_data = {
    Sistema: {
      nombre: 'webbasico',
      rut: '29282726-1',
      usuario: 'integrado_webbasico',
      clave: 'd2ViYmFzaWNvMjAyMQ=='
    },
    Documento: {
      Encabezado: {
        IdDoc: {
          TipoDTE: '33',
          Folio: '0',
          MntBruto: '2',
          FchEmis: '2024-01-20',
          FchVenc: '2024-01-26'
        },
        Emisor: {
          RUTEmisor: '29282726-1',
          RznSocEmisor: 'EMPRESA DE PRUEBA',
          GiroEmisor: 'DESARROLLO DE SISTEMAS',
          DirOrigen: 'Avenida del Software #11001101',
          CmnaOrigen: 'PROVIDENCIA',
          CiudadOrigen: 'SANTIAGO'
        },
        Receptor: {
          RUTRecep: '76399744-8',
          CdgIntRecep: '1000215-220',
          RznSocRecep: 'CLIENTE DE PRUEBA',
          CorreoRecep: 'prueba@dtemite.cl',
          DirRecep: 'CALLE A 50',
          CmnaRecep: 'SANTIAGO',
          CiudadRecep: 'SANTIAGO'
        },
        Totales: {
          MntNeto: '10000',
          MntExe: '0',
          IVA: '1900',
          MntTotal: '11900'
        }
      },
      Detalle: [
        {
          NroLinDet: '1',
          CdgItem: {
            TpoCodigo: 'INT1',
            VlrCodigo: 'WWW'
          },
          NmbItem: 'Descripción de producto WWW',
          QtyItem: '1',
          PrcItem: '11900',
          MontoItem: '11900'
        }
      ]
    }
  }
  
  http = Net::HTTP.new(url.host, url.port)
  http.use_ssl = true
  
  request = Net::HTTP::Post.new(url)
  request['Content-Type'] = 'application/json'
  request['Accept'] = 'application/json'
  request.body = document_data.to_json
  
  begin
    response = http.request(request)
    puts "Respuesta DTEmite: #{response.body}"
  rescue => e
    puts "Error DTEmite: #{e.message}"
  end
end

send_dtemite_request`,

  powershell: `# PowerShell script para enviar documento a DTEmite
$uri = "https://sistema.dtemite.cl/sistema/Backend/WsMaster/ApiIntegracionController.php/Api/Documento"

$documentData = @{
    Sistema = @{
        nombre = "webbasico"
        rut = "29282726-1"
        usuario = "integrado_webbasico"
        clave = "d2ViYmFzaWNvMjAyMQ=="
    }
    Documento = @{
        Encabezado = @{
            IdDoc = @{
                TipoDTE = "33"
                Folio = "0"
                MntBruto = "2"
                FchEmis = "2024-01-20"
                FchVenc = "2024-01-26"
            }
            Emisor = @{
                RUTEmisor = "29282726-1"
                RznSocEmisor = "EMPRESA DE PRUEBA"
                GiroEmisor = "DESARROLLO DE SISTEMAS"
                DirOrigen = "Avenida del Software #11001101"
                CmnaOrigen = "PROVIDENCIA"
                CiudadOrigen = "SANTIAGO"
            }
            Receptor = @{
                RUTRecep = "76399744-8"
                CdgIntRecep = "1000215-220"
                RznSocRecep = "CLIENTE DE PRUEBA"
                CorreoRecep = "prueba@dtemite.cl"
                DirRecep = "CALLE A 50"
                CmnaRecep = "SANTIAGO"
                CiudadRecep = "SANTIAGO"
            }
            Totales = @{
                MntNeto = "10000"
                MntExe = "0"
                IVA = "1900"
                MntTotal = "11900"
            }
        }
        Detalle = @(
            @{
                NroLinDet = "1"
                CdgItem = @{
                    TpoCodigo = "INT1"
                    VlrCodigo = "WWW"
                }
                NmbItem = "Descripción de producto WWW"
                QtyItem = "1"
                PrcItem = "11900"
                MontoItem = "11900"
            }
        )
    }
} | ConvertTo-Json -Depth 10

$headers = @{
    "Content-Type" = "application/json"
    "Accept" = "application/json"
}

try {
    $response = Invoke-RestMethod -Uri $uri -Method Post -Body $documentData -Headers $headers
    Write-Host "Respuesta DTEmite: $($response | ConvertTo-Json -Depth 10)"
} catch {
    Write-Host "Error DTEmite: $($_.Exception.Message)"
}`
};

// Configuración de submétodos para cada lenguaje
const subMethodsConfig = {
  curl: [],
  nodejs: [
    { key: 'nodejs_axios', name: 'Axios', icon: '<i class="fas fa-rocket"></i>' },
    { key: 'nodejs_native', name: 'Native', icon: '<i class="fab fa-node-js"></i>' },
    { key: 'nodejs_request', name: 'Request', icon: '<i class="fas fa-download"></i>' },
    { key: 'nodejs_unirest', name: 'Unirest', icon: '<i class="fas fa-globe"></i>' }
  ],
  python: [
    { key: 'python_requests', name: 'Requests', icon: '<i class="fab fa-python"></i>' },
    { key: 'python_http', name: 'HTTP Client', icon: '<i class="fas fa-code"></i>' }
  ],
  php: [
    { key: 'php_curl', name: 'CURL', icon: '<i class="fab fa-linux"></i>' },
    { key: 'php_guzzle', name: 'Guzzle', icon: '<i class="fab fa-php"></i>' },
    { key: 'php_http_request2', name: 'HTTP Request2', icon: '<i class="fas fa-exchange-alt"></i>' },
    { key: 'php_pecl_http', name: 'PECL HTTP', icon: '<i class="fas fa-plug"></i>' }
  ],
  java: [
    { key: 'java_okhttp', name: 'OkHttp', icon: '<i class="fa-brands fa-java"></i>' },
    { key: 'java_unirest', name: 'Unirest', icon: '<i class="fa-brands fa-java"></i>' }
  ],
  go: [],
  ruby: [],
  powershell: []
};

/**
 * Alterna la expansión/contracción del código
 */
function toggleCodeExpansion() {
  const codeContent = document.getElementById('shippingCodeContent');
  const expandBtn = document.getElementById('expandCodeBtn');
  const expandIcon = document.querySelector('.expand-icon');
  
  if (codeContent.classList.contains('collapsed')) {
    // Expandir
    codeContent.classList.remove('collapsed');
    expandBtn.classList.add('expanded');
    expandIcon.textContent = '−';
    expandBtn.title = 'Contraer código';
  } else {
    // Contraer
    codeContent.classList.add('collapsed');
    expandBtn.classList.remove('expanded');
    expandIcon.textContent = '+';
    expandBtn.title = 'Expandir código';
  }
}

/**
 * Inicializa el modal de panel de pruebas de envío
 */
function initializeShippingModal() {
  console.log('🚀 Inicializando modal de panel de pruebas de envío...');
  
  const modalOverlay = document.getElementById('modalOverlay');
  const panelEnvioBtn = document.getElementById('panelEnvioBtn');
  const modalClose = document.getElementById('modalClose');
  const shippingTabs = document.querySelectorAll('.shipping-tab');
  const copyCodeBtn = document.getElementById('copyCodeBtn');
  
  // Abrir modal
  if (panelEnvioBtn) {
    panelEnvioBtn.addEventListener('click', function() {
      console.log('📦 Abriendo modal de panel de envío');
      modalOverlay.classList.add('show');
      document.body.style.overflow = 'hidden';
      
      // Inicializar panel de pruebas del modal
      initializeModalPanel();
      
      // Asegurar seleccionabilidad después de que el modal esté visible
      setTimeout(() => {
        ensureCodeSelectability();
        ensureCollapsedCodeSelectability();
        // APLICAR SOLUCIÓN DEFINITIVA
        if (typeof window.fixCodeSelectionNOW === 'function') {
          window.fixCodeSelectionNOW();
        }
        console.log('🔄 Seleccionabilidad aplicada después de abrir modal');
        
        // Resetear botón de copia al abrir el modal (por el código inicial del HTML)
        resetCopyButton();
        console.log('🔄 Botón de copia reseteado al abrir modal');
      }, 200);
    });
  }
  
  // Cerrar modal
  function closeModal() {
    console.log('❌ Cerrando modal de panel de envío');
    modalOverlay.classList.remove('show');
    document.body.style.overflow = '';
  }
  
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  
  // Cerrar modal al hacer clic en el overlay
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function(e) {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }
  
  // Cerrar modal con tecla ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('show')) {
      closeModal();
    }
  });
  
  // Cambiar método de envío
  if (shippingTabs.length > 0) {
    shippingTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const method = this.getAttribute('data-method');
        console.log('🔄 Cambiando método de envío a:', method);
        
        // Usar la nueva función que maneja submétodos
        switchShippingMethod(method);
      });
    });
  }
  
  // Copiar código
  if (copyCodeBtn) {
    console.log('🔧 Configurando botón de copia...');
    copyCodeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      console.log('📋 Botón de copia clickeado');
      
      const codeDisplay = document.getElementById('shippingCodeDisplay');
      if (!codeDisplay) {
        console.error('❌ No se encontró el elemento shippingCodeDisplay');
        return;
      }
      
      const codeText = codeDisplay.textContent || codeDisplay.innerText;
      console.log('📝 Texto a copiar:', codeText.substring(0, 100) + '...');
      
      // Feedback visual inmediato
      const originalIcon = this.innerHTML;
      this.innerHTML = '<i class="fas fa-copy"></i><span class="copy-indicator">✓</span>';
      this.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
      
      // SELECCIONAR AUTOMÁTICAMENTE EL TEXTO ANTES DE COPIAR
      console.log('🎯 Seleccionando texto automáticamente antes de copiar...');
      selectAllText(codeDisplay);
      
      // Intentar copiar con la API moderna
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(codeText).then(() => {
          console.log('✅ Código copiado al portapapeles con Clipboard API');
          console.log('📝 Texto seleccionado automáticamente para visualización');
        }).catch(err => {
          console.error('❌ Error con Clipboard API:', err);
          fallbackCopy(codeText);
        });
      } else {
        console.log('⚠️ Clipboard API no disponible, usando fallback');
        fallbackCopy(codeText);
      }
      
      // Restaurar botón después de 2 segundos
      setTimeout(() => {
        this.innerHTML = originalIcon;
        this.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
      }, 2000);
      
      // Función fallback para navegadores antiguos
      function fallbackCopy(text) {
        try {
          const textArea = document.createElement('textarea');
          textArea.value = text;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          textArea.style.top = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          
          const successful = document.execCommand('copy');
          document.body.removeChild(textArea);
          
          if (successful) {
            console.log('✅ Código copiado con fallback');
            console.log('📝 Texto seleccionado automáticamente para visualización');
          } else {
            console.error('❌ Fallback falló');
          }
        } catch (err) {
          console.error('❌ Error en fallback:', err);
        }
      }
    });
  } else {
    console.error('❌ No se encontró el botón de copia');
  }
  
  
  // Inicializar código en estado contraído
  const codeContent = document.getElementById('shippingCodeContent');
  if (codeContent) {
    codeContent.classList.add('collapsed');
  }
  
  // Inicializar submétodos para CURL (método por defecto)
  updateSubMethods('curl');
  
  // Asegurar que el código inicial sea seleccionable
  setTimeout(() => {
    ensureCodeSelectability();
    ensureCollapsedCodeSelectability();
  }, 100);
  
  console.log('✅ Modal de panel de pruebas de envío inicializado');
}

/**
 * Actualiza el código mostrado según el método seleccionado
 * @param {string} method - Método de envío seleccionado
 */
function updateShippingCode(method) {
  const methodName = document.querySelector('.method-name');
  const codeDisplay = document.getElementById('shippingCodeDisplay');
  
  if (methodName && codeDisplay) {
    // Actualizar nombre del método
    methodName.textContent = method.toUpperCase();
    
    // Actualizar código
    const code = shippingCodeExamples[method] || shippingCodeExamples.curl;
    codeDisplay.textContent = code;
    
    // Asegurar que el código sea seleccionable
    ensureCodeSelectability();
    
    // Aplicar seleccionabilidad también después de un pequeño delay
    setTimeout(() => {
      ensureCodeSelectability();
      ensureCollapsedCodeSelectability();
      console.log('🔄 Seleccionabilidad re-aplicada después de cambiar código');
      
      // Resetear estado del botón de copiar DESPUÉS de actualizar el código
      resetCopyButton();
    }, 50);
  }
}

/**
 * Asegura que el código sea completamente seleccionable
 */
function ensureCodeSelectability() {
  const codeDisplay = document.getElementById('shippingCodeDisplay');
  const codeContent = document.getElementById('shippingCodeContent');
  
  console.log('🔧 Asegurando seleccionabilidad del código...');
  
  if (codeDisplay) {
    console.log('📝 Aplicando estilos a shippingCodeDisplay');
    
    // Forzar estilos de selección con !important
    codeDisplay.style.setProperty('user-select', 'text', 'important');
    codeDisplay.style.setProperty('-webkit-user-select', 'text', 'important');
    codeDisplay.style.setProperty('-moz-user-select', 'text', 'important');
    codeDisplay.style.setProperty('-ms-user-select', 'text', 'important');
    codeDisplay.style.setProperty('cursor', 'text', 'important');
    codeDisplay.style.setProperty('pointer-events', 'auto', 'important');
    codeDisplay.style.setProperty('-webkit-touch-callout', 'default', 'important');
    
    // Aplicar a todos los elementos hijos
    const allElements = codeDisplay.querySelectorAll('*');
    console.log(`📋 Aplicando estilos a ${allElements.length} elementos hijos`);
    
    allElements.forEach((element, index) => {
      element.style.setProperty('user-select', 'text', 'important');
      element.style.setProperty('-webkit-user-select', 'text', 'important');
      element.style.setProperty('-moz-user-select', 'text', 'important');
      element.style.setProperty('-ms-user-select', 'text', 'important');
      element.style.setProperty('cursor', 'text', 'important');
      element.style.setProperty('pointer-events', 'auto', 'important');
      
      if (index < 3) { // Log solo los primeros 3 elementos
        console.log(`✅ Estilos aplicados a elemento ${index}:`, element.tagName);
      }
    });
    
    // Agregar atributos directamente
    codeDisplay.setAttribute('style', 
      codeDisplay.getAttribute('style') + 
      '; user-select: text !important; -webkit-user-select: text !important; cursor: text !important;'
    );
  }
  
  if (codeContent) {
    console.log('📝 Aplicando estilos a shippingCodeContent');
    
    codeContent.style.setProperty('user-select', 'text', 'important');
    codeContent.style.setProperty('-webkit-user-select', 'text', 'important');
    codeContent.style.setProperty('-moz-user-select', 'text', 'important');
    codeContent.style.setProperty('-ms-user-select', 'text', 'important');
    codeContent.style.setProperty('pointer-events', 'auto', 'important');
  }
  
  // Aplicar también con querySelector más específico
  const allCodeElements = document.querySelectorAll('#shippingCodeDisplay, #shippingCodeDisplay *, #shippingCodeContent, #shippingCodeContent *');
  console.log(`🎯 Aplicando estilos a ${allCodeElements.length} elementos específicos`);
  
  allCodeElements.forEach((element, index) => {
    element.style.setProperty('user-select', 'text', 'important');
    element.style.setProperty('-webkit-user-select', 'text', 'important');
    element.style.setProperty('-moz-user-select', 'text', 'important');
    element.style.setProperty('-ms-user-select', 'text', 'important');
    element.style.setProperty('cursor', 'text', 'important');
    element.style.setProperty('pointer-events', 'auto', 'important');
  });
  
  console.log('✅ Seleccionabilidad del código asegurada con métodos múltiples');
}

/**
 * Asegura que el código sea seleccionable incluso cuando está colapsado
 */
function ensureCollapsedCodeSelectability() {
  const codeContent = document.getElementById('shippingCodeContent');
  const codeDisplay = document.getElementById('shippingCodeDisplay');
  
  if (codeContent && codeContent.classList.contains('collapsed')) {
    console.log('🔧 Asegurando seleccionabilidad del código colapsado...');
    
    // Aplicar estilos específicos para estado colapsado
    if (codeDisplay) {
      codeDisplay.style.setProperty('user-select', 'text', 'important');
      codeDisplay.style.setProperty('-webkit-user-select', 'text', 'important');
      codeDisplay.style.setProperty('-moz-user-select', 'text', 'important');
      codeDisplay.style.setProperty('-ms-user-select', 'text', 'important');
      codeDisplay.style.setProperty('cursor', 'text', 'important');
      codeDisplay.style.setProperty('pointer-events', 'auto', 'important');
      codeDisplay.style.setProperty('position', 'relative', 'important');
      codeDisplay.style.setProperty('z-index', '2', 'important');
    }
    
    // Asegurar que el elemento code también sea seleccionable
    const codeElement = codeDisplay?.querySelector('code');
    if (codeElement) {
      codeElement.style.setProperty('user-select', 'text', 'important');
      codeElement.style.setProperty('-webkit-user-select', 'text', 'important');
      codeElement.style.setProperty('-moz-user-select', 'text', 'important');
      codeElement.style.setProperty('-ms-user-select', 'text', 'important');
      codeElement.style.setProperty('cursor', 'text', 'important');
      codeElement.style.setProperty('pointer-events', 'auto', 'important');
      codeElement.style.setProperty('position', 'relative', 'important');
      codeElement.style.setProperty('z-index', '3', 'important');
    }
    
    console.log('✅ Seleccionabilidad del código colapsado asegurada');
  }
}

/**
 * Resetea el estado del botón de copia a su estado original
 */
function resetCopyButton() {
  console.log('🔄 Reseteando estado del botón de copia...');
  
  const copyCodeBtn = document.getElementById('copyCodeBtn');
  if (copyCodeBtn) {
    // Resetear contenido del botón
    copyCodeBtn.innerHTML = '<i class="fas fa-copy"></i>';
    
    // Resetear estilos
    copyCodeBtn.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
    copyCodeBtn.style.transform = '';
    copyCodeBtn.style.boxShadow = '0 4px 12px rgba(40, 167, 69, 0.3)';
    
    // Remover cualquier indicador de copia
    const copyIndicator = copyCodeBtn.querySelector('.copy-indicator');
    if (copyIndicator) {
      copyIndicator.remove();
    }
    
    // Resetear título
    copyCodeBtn.title = 'Copiar código';
    
    // Limpiar cualquier selección de texto
    if (window.getSelection) {
      const selection = window.getSelection();
      selection.removeAllRanges();
    }
    
    console.log('✅ Botón de copia reseteado correctamente');
  } else {
    console.error('❌ No se encontró el botón de copia para resetear');
  }
}

/**
 * Actualiza los submétodos disponibles para el método seleccionado
 */
function updateSubMethods(method) {
  const subMethodsContainer = document.getElementById('subMethodsContainer');
  const subMethodsTabs = document.getElementById('subMethodsTabs');
  
  if (!subMethodsContainer || !subMethodsTabs) return;
  
  const subMethods = subMethodsConfig[method] || [];
  
  if (subMethods.length === 0) {
    // Ocultar contenedor de submétodos si no hay submétodos
    subMethodsContainer.style.display = 'none';
    // Actualizar código con el método principal
    updateShippingCode(method);
    
    // Resetear botón de copia después de actualizar código sin submétodos
    setTimeout(() => {
      resetCopyButton();
      console.log('🔄 Botón de copia reseteado después de actualizar código sin submétodos');
    }, 100);
    
    return;
  }
  
  // Mostrar contenedor de submétodos
  subMethodsContainer.style.display = 'block';
  
  // Limpiar submétodos existentes
  subMethodsTabs.innerHTML = '';
  
  // Crear botones para cada submétodo
  subMethods.forEach((subMethod, index) => {
    const button = document.createElement('button');
    button.className = `sub-method-tab ${index === 0 ? 'active' : ''}`;
    button.setAttribute('data-submethod', subMethod.key);
    button.innerHTML = `
      <span class="sub-method-icon">${subMethod.icon}</span>
      <span class="sub-method-text">${subMethod.name}</span>
    `;
    
    // Event listener para cambiar submétodo
    button.addEventListener('click', () => {
      // Remover clase active de todos los submétodos
      subMethodsTabs.querySelectorAll('.sub-method-tab').forEach(tab => {
        tab.classList.remove('active');
      });
      
      // Agregar clase active al submétodo seleccionado
      button.classList.add('active');
      
      // Actualizar código con el submétodo seleccionado
      updateShippingCode(subMethod.key);
      
      // Asegurar seleccionabilidad después de cambiar submétodo
      setTimeout(() => {
        ensureCodeSelectability();
        console.log('🔄 Seleccionabilidad aplicada después de cambiar submétodo');
        
        // Resetear botón de copia DESPUÉS de actualizar el código
        resetCopyButton();
        console.log('🔄 Botón de copia reseteado después de cambiar submétodo');
      }, 100);
    });
    
    subMethodsTabs.appendChild(button);
  });
  
  // Actualizar código con el primer submétodo por defecto
  if (subMethods.length > 0) {
    updateShippingCode(subMethods[0].key);
    
    // Resetear botón de copia después de actualizar código inicial
    setTimeout(() => {
      resetCopyButton();
      console.log('🔄 Botón de copia reseteado después de actualizar código inicial');
    }, 100);
  }
}

/**
 * Cambia el método de envío principal
 */
function switchShippingMethod(method) {
  // Remover clase active de todos los métodos
  document.querySelectorAll('.shipping-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Agregar clase active al método seleccionado
  const selectedTab = document.querySelector(`[data-method="${method}"]`);
  if (selectedTab) {
    selectedTab.classList.add('active');
  }
  
  // Resetear estado del botón de copiar
  resetCopyButton();
  
  // Actualizar submétodos
  updateSubMethods(method);
  
  // Resetear estado del botón de copiar DESPUÉS de actualizar todo
  setTimeout(() => {
    resetCopyButton();
    console.log('🔄 Botón de copia reseteado después de cambiar método principal');
  }, 100);
}

/**
 * Inicializa el panel de pruebas de integración dentro del modal
 */
function initializeModalPanel() {
  console.log('🔧 Inicializando panel de pruebas del modal...');
  
  // Sincronizar valores del panel principal con el modal
  syncPanelValues();
  
  // Configurar event listeners para el panel del modal
  setupModalPanelListeners();
  
  console.log('✅ Panel de pruebas del modal inicializado');
}

/**
 * Sincroniza los valores del panel principal con el modal
 */
function syncPanelValues() {
  const mainPanel = {
    apiType: document.getElementById('apiType'),
    endpoint: document.getElementById('endpoint'),
    rut: document.getElementById('rut'),
    sistema: document.getElementById('sistema'),
    usuario: document.getElementById('usuario'),
    clave: document.getElementById('clave'),
    documentTemplate: document.getElementById('documentTemplate'),
    jsonData: document.getElementById('jsonData')
  };
  
  const modalPanel = {
    apiType: document.getElementById('modalApiType'),
    endpoint: document.getElementById('modalEndpoint'),
    rut: document.getElementById('modalRut'),
    sistema: document.getElementById('modalSistema'),
    usuario: document.getElementById('modalUsuario'),
    clave: document.getElementById('modalClave'),
    documentTemplate: document.getElementById('modalDocumentTemplate'),
    jsonData: document.getElementById('modalJsonData')
  };
  
  // Sincronizar valores
  Object.keys(mainPanel).forEach(key => {
    if (mainPanel[key] && modalPanel[key]) {
      modalPanel[key].value = mainPanel[key].value;
    }
  });
}

/**
 * Configura los event listeners para el panel del modal
 */
function setupModalPanelListeners() {
  // Event listener para cambio de tipo de API
  const modalApiType = document.getElementById('modalApiType');
  if (modalApiType) {
    modalApiType.addEventListener('change', function() {
      toggleModalSoapMethods();
    });
  }
  
  // Event listener para cambio de método SOAP
  const modalSoapMethod = document.getElementById('modalSoapMethod');
  if (modalSoapMethod) {
    modalSoapMethod.addEventListener('change', function() {
      updateModalSoapParamsVisibility();
    });
  }
  
  // Event listener para cambio de plantilla
  const modalDocumentTemplate = document.getElementById('modalDocumentTemplate');
  if (modalDocumentTemplate) {
    modalDocumentTemplate.addEventListener('change', function() {
      loadModalTemplate();
    });
  }
  
  // Inicializar estado de controles SOAP
  toggleModalSoapMethods();
}

/**
 * Alterna la visibilidad de los controles SOAP en el modal
 */
function toggleModalSoapMethods() {
  const modalApiType = document.getElementById('modalApiType');
  const modalSoapMethodsPanel = document.getElementById('modalSoapMethodsPanel');
  const modalSoapParamsPanel = document.getElementById('modalSoapParamsPanel');
  
  if (!modalApiType || !modalSoapMethodsPanel || !modalSoapParamsPanel) {
    return;
  }
  
  const selectedApiType = modalApiType.value;
  
  // Actualizar el selector de plantillas según el tipo de API
  updateModalTemplateSelector(selectedApiType);
  
  if (selectedApiType === 'soap') {
    modalSoapMethodsPanel.style.display = 'block';
    updateModalSoapParamsVisibility();
    
    // Cambiar endpoint a SOAP
    const modalEndpoint = document.getElementById('modalEndpoint');
    if (modalEndpoint) {
      modalEndpoint.value = 'http://api.dtemite.cl:8089/WSDTEIntegrado/WSDTEInt?wsdl';
    }
    
    // Cargar plantilla SOAP por defecto
    loadModalTemplate('soap_emision');
  } else {
    modalSoapMethodsPanel.style.display = 'none';
    modalSoapParamsPanel.style.display = 'none';
    
    // Cambiar endpoint a REST
    const modalEndpoint = document.getElementById('modalEndpoint');
    if (modalEndpoint) {
      modalEndpoint.value = 'https://sistema.dtemite.cl/sistema/Backend/WsMaster/ApiIntegracionController.php/Api/Documento';
    }
    
    // Cargar plantilla REST por defecto
    loadModalTemplate('factura');
  }
}

/**
 * Actualiza el selector de plantillas en el modal según el tipo de API
 * @param {string} apiType - Tipo de API ('rest' o 'soap')
 */
function updateModalTemplateSelector(apiType) {
  const modalTemplateSelect = document.getElementById('modalDocumentTemplate');
  if (!modalTemplateSelect) return;
  
  // Limpiar opciones existentes
  modalTemplateSelect.innerHTML = '';
  
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
      modalTemplateSelect.appendChild(optionElement);
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
      modalTemplateSelect.appendChild(optionElement);
    });
  }
}

/**
 * Actualiza la visibilidad de los parámetros SOAP en el modal
 */
function updateModalSoapParamsVisibility() {
  const modalSoapMethod = document.getElementById('modalSoapMethod');
  const modalSoapParamsPanel = document.getElementById('modalSoapParamsPanel');
  
  if (!modalSoapMethod || !modalSoapParamsPanel) {
    return;
  }
  
  const selectedMethod = modalSoapMethod.value;
  
  // Métodos que requieren TipoDTE y FolioDTE
  const methodsWithTipoFolio = ['ObtenerPDF', 'ObtenerXml', 'ObtenerPDFCredible', 'ObtenerTrazabilidad'];
  
  // Métodos que requieren fechas
  const methodsWithDates = ['get_DTEcompra'];
  
  if (methodsWithTipoFolio.includes(selectedMethod)) {
    modalSoapParamsPanel.style.display = 'block';
    // Mostrar solo campos de TipoDTE y FolioDTE
    const modalTipodte = document.getElementById('modalTipodte');
    const modalFoliodte = document.getElementById('modalFoliodte');
    const modalFechaDesde = document.getElementById('modalFechaDesde');
    const modalFechaHasta = document.getElementById('modalFechaHasta');
    
    if (modalTipodte) modalTipodte.style.display = 'block';
    if (modalFoliodte) modalFoliodte.style.display = 'block';
    if (modalFechaDesde) modalFechaDesde.style.display = 'none';
    if (modalFechaHasta) modalFechaHasta.style.display = 'none';
  } else if (methodsWithDates.includes(selectedMethod)) {
    modalSoapParamsPanel.style.display = 'block';
    // Mostrar solo campos de fechas
    const modalTipodte = document.getElementById('modalTipodte');
    const modalFoliodte = document.getElementById('modalFoliodte');
    const modalFechaDesde = document.getElementById('modalFechaDesde');
    const modalFechaHasta = document.getElementById('modalFechaHasta');
    
    if (modalTipodte) modalTipodte.style.display = 'none';
    if (modalFoliodte) modalFoliodte.style.display = 'none';
    if (modalFechaDesde) modalFechaDesde.style.display = 'block';
    if (modalFechaHasta) modalFechaHasta.style.display = 'block';
  } else {
    modalSoapParamsPanel.style.display = 'none';
  }
}

/**
 * Carga una plantilla en el modal
 * @param {string} template - Nombre de la plantilla a cargar
 */
function loadModalTemplate(template = null) {
  const modalTemplateSelect = document.getElementById('modalDocumentTemplate');
  const selectedTemplate = template || modalTemplateSelect.value;
  const modalApiType = document.getElementById('modalApiType');
  
  if (selectedTemplate !== 'custom' && templates[selectedTemplate]) {
    const templateData = templates[selectedTemplate];
    
    // Actualizar el título del textarea según el tipo
    updateModalTextareaTitle(templateData.type);
    
    if (templateData.type === 'soap') {
      // Para SOAP, mostrar el XML que se enviará
      const xmlContent = createSoapEnvelopeByMethod(templateData.data, templateData.method, templateData.data.Parametros || {});
      document.getElementById('modalJsonData').value = xmlContent;
      
      // Actualizar el método SOAP seleccionado
      const modalSoapMethodSelect = document.getElementById('modalSoapMethod');
      if (modalSoapMethodSelect) {
        modalSoapMethodSelect.value = templateData.method;
        updateModalSoapParamsVisibility();
      }
    } else {
      // Para REST, mostrar JSON
      document.getElementById('modalJsonData').value = JSON.stringify(templateData.data, null, 2);
    }
    
    modalTemplateSelect.value = selectedTemplate;
  }
}

/**
 * Actualiza el título del textarea en el modal según el tipo de contenido
 * @param {string} type - Tipo de contenido ('rest' o 'soap')
 */
function updateModalTextareaTitle(type) {
  const modalTextareaLabel = document.querySelector('label[for="modalJsonData"]');
  if (modalTextareaLabel) {
    if (type === 'soap') {
      modalTextareaLabel.textContent = 'XML del Documento:';
    } else {
      modalTextareaLabel.textContent = 'JSON del Documento:';
    }
  }
}

/**
 * Limpia el formulario del modal
 */
function clearModalForm() {
  document.getElementById('modalJsonData').value = '';
  document.getElementById('modalResponsePanel').style.display = 'none';
}

/**
 * Envía una petición desde el modal
 */
async function sendModalRequest() {
  const modalApiType = document.getElementById('modalApiType').value;
  const modalEndpoint = document.getElementById('modalEndpoint').value;
  const modalDataString = document.getElementById('modalJsonData').value;
  const modalSoapMethod = document.getElementById('modalSoapMethod') ? document.getElementById('modalSoapMethod').value : 'Emision';
  const modalSendBtn = document.getElementById('modalSendBtn');
  const modalLoading = document.getElementById('modalLoading');
  const modalResponsePanel = document.getElementById('modalResponsePanel');
  
  // Validaciones iniciales
  if (!modalDataString.trim()) {
    showModalError('Por favor, ingresa el contenido del documento');
    return;
  }
  
  // Mostrar loading
  modalSendBtn.disabled = true;
  modalSendBtn.textContent = 'Enviando...';
  modalSendBtn.classList.add('btn-loading');
  modalLoading.style.display = 'block';
  modalLoading.classList.add('loading-animation');
  modalResponsePanel.style.display = 'none';
  
  try {
    let response;
    
    if (modalApiType === 'rest') {
      // Validar JSON para REST
      if (!validateJSON(modalDataString)) {
        showModalError('El JSON ingresado no es válido');
        return;
      }
      
      // Actualizar credenciales en el JSON
      let jsonData;
      try {
        jsonData = JSON.parse(modalDataString);
        jsonData = updateModalCredentials(jsonData);
      } catch (e) {
        showModalError('Error al procesar el JSON: ' + e.message);
        return;
      }
      
      const finalJsonData = JSON.stringify(jsonData);
      response = await sendRestRequest(modalEndpoint, finalJsonData);
    } else {
      // Para SOAP, usar el XML directamente
      response = await sendSoapRequest(modalEndpoint, modalDataString, modalSoapMethod, {});
    }
    
    const responseText = await response.text();
    displayModalResponse(response, responseText);
    
  } catch (error) {
    const errorResponse = {
      ok: false,
      status: 0,
      statusText: 'Network Error'
    };
    displayModalResponse(errorResponse, `Error de conexión: ${error.message}`);
  } finally {
    // Ocultar loading
    modalSendBtn.disabled = false;
    modalSendBtn.textContent = 'Enviar Petición';
    modalSendBtn.classList.remove('btn-loading');
    
    modalLoading.style.opacity = '0';
    setTimeout(() => {
      modalLoading.style.display = 'none';
      modalLoading.style.opacity = '1';
      modalLoading.classList.remove('loading-animation');
    }, 300);
  }
}

/**
 * Actualiza las credenciales en el JSON del modal
 * @param {Object} jsonData - Objeto JSON del documento
 * @returns {Object} - JSON actualizado con las credenciales
 */
function updateModalCredentials(jsonData) {
  const rut = document.getElementById('modalRut').value;
  const sistema = document.getElementById('modalSistema').value;
  const usuario = document.getElementById('modalUsuario').value;
  const clave = document.getElementById('modalClave').value;
  
  if (jsonData.Sistema) {
    jsonData.Sistema.rut = rut;
    jsonData.Sistema.nombre = sistema;
    jsonData.Sistema.usuario = usuario;
    jsonData.Sistema.clave = clave;
  }
  
  return jsonData;
}

/**
 * Muestra un mensaje de error en el modal
 * @param {string} message - Mensaje de error a mostrar
 */
function showModalError(message) {
  const errorNotification = document.createElement('div');
  errorNotification.className = 'error-notification';
  errorNotification.innerHTML = `
    <div class="error-content">
      <span class="error-icon">⚠️</span>
      <span class="error-message">Error: ${message}</span>
      <button class="error-close" onclick="this.parentElement.parentElement.remove()">×</button>
    </div>
  `;
  
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
 * Muestra la respuesta de la API en el panel del modal
 * @param {Response} response - Respuesta de la API
 * @param {string} responseText - Texto de la respuesta
 */
function displayModalResponse(response, responseText) {
  const modalResponsePanel = document.getElementById('modalResponsePanel');
  const modalResponseContent = document.getElementById('modalResponseContent');
  const modalApiType = document.getElementById('modalApiType').value;
  
  // Mostrar panel con animación
  modalResponsePanel.style.display = 'block';
  modalResponsePanel.style.opacity = '0';
  modalResponsePanel.style.transform = 'translateY(20px)';
  
  // Aplicar clases de estado
  modalResponsePanel.className = response.ok ? 'response-panel response-success' : 'response-panel response-error';
  
  // Animación de entrada
  setTimeout(() => {
    modalResponsePanel.style.opacity = '1';
    modalResponsePanel.style.transform = 'translateY(0)';
    modalResponsePanel.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
  }, 50);
  
  // Mostrar información adicional para SOAP
  let displayText = `Status: ${response.status} ${response.statusText}\n\n`;
  
  if (modalApiType === 'soap' && response.soapResponse) {
    displayText += `Respuesta SOAP Parseada:\n${JSON.stringify(response.soapResponse, null, 2)}\n\n`;
    displayText += `XML Original:\n${response.rawXml || responseText}`;
  } else {
    displayText += responseText;
  }
  
  modalResponseContent.textContent = displayText;
  
  // Scroll suave al panel de respuesta
  setTimeout(() => {
    modalResponsePanel.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'nearest' 
    });
  }, 350);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 DOM Content Loaded - Inicializando modal de panel de envío');
  initializeShippingModal();
});

// También inicializar con jQuery si está disponible
if (typeof $ !== 'undefined') {
  $(document).ready(function() {
    console.log('🚀 jQuery Ready - Inicializando modal de panel de envío');
    initializeShippingModal();
  });
}

// Función de prueba para verificar seleccionabilidad (disponible en consola)
window.testCodeSelection = function() {
  console.log('🧪 Probando seleccionabilidad del código...');
  
  const codeDisplay = document.getElementById('shippingCodeDisplay');
  const codeContent = document.getElementById('shippingCodeContent');
  
  if (!codeDisplay) {
    console.error('❌ No se encontró shippingCodeDisplay');
    return false;
  }
  
  if (!codeContent) {
    console.error('❌ No se encontró shippingCodeContent');
    return false;
  }
  
  console.log('✅ Elementos encontrados');
  console.log('📝 Contenido del código:', codeDisplay.textContent.substring(0, 100) + '...');
  
  // Aplicar seleccionabilidad
  ensureCodeSelectability();
  
  // Verificar estilos aplicados
  const computedStyle = window.getComputedStyle(codeDisplay);
  console.log('🎨 Estilos aplicados:');
  console.log('- user-select:', computedStyle.userSelect);
  console.log('- -webkit-user-select:', computedStyle.webkitUserSelect);
  console.log('- cursor:', computedStyle.cursor);
  console.log('- pointer-events:', computedStyle.pointerEvents);
  
  return true;
};

// Función para forzar seleccionabilidad (disponible en consola)
window.forceCodeSelection = function() {
  console.log('🔧 Forzando seleccionabilidad del código...');
  ensureCodeSelectability();
  
  // Aplicar también con CSS directo
  const style = document.createElement('style');
  style.textContent = `
    #shippingCodeDisplay, #shippingCodeDisplay *, #shippingCodeContent, #shippingCodeContent * {
      user-select: text !important;
      -webkit-user-select: text !important;
      -moz-user-select: text !important;
      -ms-user-select: text !important;
      cursor: text !important;
      pointer-events: auto !important;
    }
  `;
  document.head.appendChild(style);
  
  console.log('✅ Seleccionabilidad forzada');
};

// Función para diagnosticar problemas de selección (disponible en consola)
window.diagnoseSelection = function() {
  console.log('🔍 Diagnosticando problemas de selección...');
  
  const codeDisplay = document.getElementById('shippingCodeDisplay');
  const codeContent = document.getElementById('shippingCodeContent');
  
  if (!codeDisplay) {
    console.error('❌ No se encontró shippingCodeDisplay');
    return;
  }
  
  // Verificar estilos computados
  const computedStyle = window.getComputedStyle(codeDisplay);
  console.log('🎨 Estilos computados de shippingCodeDisplay:');
  console.log('- user-select:', computedStyle.userSelect);
  console.log('- -webkit-user-select:', computedStyle.webkitUserSelect);
  console.log('- -moz-user-select:', computedStyle.mozUserSelect);
  console.log('- -ms-user-select:', computedStyle.msUserSelect);
  console.log('- cursor:', computedStyle.cursor);
  console.log('- pointer-events:', computedStyle.pointerEvents);
  console.log('- position:', computedStyle.position);
  console.log('- z-index:', computedStyle.zIndex);
  
  // Verificar si hay elementos superpuestos
  const rect = codeDisplay.getBoundingClientRect();
  const elementsAtPoint = document.elementsFromPoint(rect.left + rect.width/2, rect.top + rect.height/2);
  console.log('📍 Elementos en el punto central del código:', elementsAtPoint.map(el => el.tagName + (el.id ? '#' + el.id : '') + (el.className ? '.' + el.className.split(' ').join('.') : '')));
  
  // Verificar si el elemento está visible
  console.log('👁️ Visibilidad del elemento:');
  console.log('- display:', computedStyle.display);
  console.log('- visibility:', computedStyle.visibility);
  console.log('- opacity:', computedStyle.opacity);
  console.log('- width:', computedStyle.width);
  console.log('- height:', computedStyle.height);
  
  // Verificar eventos
  console.log('🎯 Probando eventos de mouse...');
  codeDisplay.addEventListener('mousedown', function(e) {
    console.log('🖱️ mousedown detectado en código');
  });
  
  codeDisplay.addEventListener('mouseup', function(e) {
    console.log('🖱️ mouseup detectado en código');
  });
  
  codeDisplay.addEventListener('click', function(e) {
    console.log('🖱️ click detectado en código');
  });
  
  console.log('✅ Diagnóstico completado. Intenta seleccionar el código ahora.');
};

// SOLUCIÓN DEFINITIVA - Función que se ejecuta inmediatamente
window.fixCodeSelectionNOW = function() {
  console.log('🚨 APLICANDO SOLUCIÓN DEFINITIVA PARA SELECCIÓN...');
  
  // Crear CSS dinámico que sobrescriba TODO
  const style = document.createElement('style');
  style.id = 'force-code-selection';
  style.textContent = `
    /* SOLUCIÓN DEFINITIVA - Sobrescribir TODO */
    #shippingCodeDisplay,
    #shippingCodeDisplay *,
    #shippingCodeContent,
    #shippingCodeContent *,
    .modal-container #shippingCodeDisplay,
    .modal-container #shippingCodeDisplay *,
    .modal-container #shippingCodeContent,
    .modal-container #shippingCodeContent *,
    .modal-overlay #shippingCodeDisplay,
    .modal-overlay #shippingCodeDisplay *,
    .modal-overlay #shippingCodeContent,
    .modal-overlay #shippingCodeContent * {
      user-select: text !important;
      -webkit-user-select: text !important;
      -moz-user-select: text !important;
      -ms-user-select: text !important;
      cursor: text !important;
      pointer-events: auto !important;
      -webkit-touch-callout: default !important;
      -webkit-tap-highlight-color: transparent !important;
    }
    
    /* Forzar en estados colapsados */
    .shipping-code-content.collapsed #shippingCodeDisplay,
    .shipping-code-content.collapsed #shippingCodeDisplay *,
    .shipping-code-content.expanded #shippingCodeDisplay,
    .shipping-code-content.expanded #shippingCodeDisplay * {
      user-select: text !important;
      -webkit-user-select: text !important;
      -moz-user-select: text !important;
      -ms-user-select: text !important;
      cursor: text !important;
      pointer-events: auto !important;
    }
  `;
  
  // Remover estilo anterior si existe
  const existingStyle = document.getElementById('force-code-selection');
  if (existingStyle) {
    existingStyle.remove();
  }
  
  // Agregar nuevo estilo
  document.head.appendChild(style);
  
  // Aplicar estilos directamente a los elementos
  const codeDisplay = document.getElementById('shippingCodeDisplay');
  const codeContent = document.getElementById('shippingCodeContent');
  
  if (codeDisplay) {
    console.log('🔧 Aplicando estilos directos a shippingCodeDisplay');
    
    // Aplicar estilos con máxima prioridad
    codeDisplay.style.cssText += '; user-select: text !important; -webkit-user-select: text !important; -moz-user-select: text !important; -ms-user-select: text !important; cursor: text !important; pointer-events: auto !important;';
    
    // Aplicar a todos los elementos hijos
    const allElements = codeDisplay.querySelectorAll('*');
    allElements.forEach(element => {
      element.style.cssText += '; user-select: text !important; -webkit-user-select: text !important; -moz-user-select: text !important; -ms-user-select: text !important; cursor: text !important; pointer-events: auto !important;';
    });
    
    // Agregar eventos de mouse para forzar selección automática
    let isSelecting = false;
    let startPosition = 0;
    
    codeDisplay.addEventListener('mousedown', function(e) {
      console.log('🖱️ mousedown en código - iniciando selección');
      isSelecting = true;
      startPosition = e.clientX;
      e.preventDefault();
      e.stopPropagation();
    });
    
    codeDisplay.addEventListener('mousemove', function(e) {
      if (isSelecting) {
        console.log('🖱️ mousemove - seleccionando texto');
        e.preventDefault();
        e.stopPropagation();
      }
    });
    
    codeDisplay.addEventListener('mouseup', function(e) {
      if (isSelecting) {
        console.log('🖱️ mouseup en código - finalizando selección');
        isSelecting = false;
        e.preventDefault();
        e.stopPropagation();
        
        // Intentar seleccionar el texto completo si no hay selección
        setTimeout(() => {
          const selection = window.getSelection();
          if (selection.toString().length === 0) {
            console.log('📝 No hay selección, seleccionando texto completo');
            selectAllText(codeDisplay);
          }
        }, 10);
      }
    });
    
    codeDisplay.addEventListener('click', function(e) {
      console.log('🖱️ click en código - seleccionando todo');
      e.preventDefault();
      e.stopPropagation();
      selectAllText(codeDisplay);
    });
    
    codeDisplay.addEventListener('dblclick', function(e) {
      console.log('🖱️ doble click en código - seleccionando palabra');
      e.preventDefault();
      e.stopPropagation();
      selectWordAtPosition(codeDisplay, e);
    });
    
    codeDisplay.addEventListener('selectstart', function(e) {
      console.log('📝 selectstart en código');
      e.stopPropagation();
    });
  }
  
  if (codeContent) {
    console.log('🔧 Aplicando estilos directos a shippingCodeContent');
    codeContent.style.cssText += '; user-select: text !important; -webkit-user-select: text !important; -moz-user-select: text !important; -ms-user-select: text !important; pointer-events: auto !important;';
  }
  
  console.log('✅ SOLUCIÓN DEFINITIVA APLICADA');
  console.log('🎯 Ahora intenta seleccionar el código manualmente');
};

// Función para seleccionar todo el texto
function selectAllText(element) {
  console.log('📝 Seleccionando todo el texto...');
  
  if (window.getSelection) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
    
    console.log('✅ Texto seleccionado:', selection.toString().substring(0, 50) + '...');
    
    // Agregar efecto visual sutil
    element.style.transition = 'background-color 0.2s ease';
    element.style.backgroundColor = 'rgba(222, 0, 126, 0.1)';
    
    // Remover efecto después de un tiempo
    setTimeout(() => {
      element.style.backgroundColor = '';
    }, 1000);
    
  } else if (document.selection) {
    // Fallback para IE
    const range = document.body.createTextRange();
    range.moveToElementText(element);
    range.select();
  }
}

// Función para seleccionar una palabra en una posición específica
function selectWordAtPosition(element, event) {
  console.log('📝 Seleccionando palabra en posición...');
  
  if (window.getSelection) {
    const selection = window.getSelection();
    const range = document.createRange();
    
    // Intentar encontrar el texto en la posición del click
    const textNode = element.firstChild;
    if (textNode && textNode.nodeType === Node.TEXT_NODE) {
      const text = textNode.textContent;
      const clickX = event.clientX;
      const rect = element.getBoundingClientRect();
      const relativeX = clickX - rect.left;
      
      // Calcular posición aproximada en el texto
      const charWidth = rect.width / text.length;
      const charPosition = Math.floor(relativeX / charWidth);
      
      // Encontrar límites de la palabra
      let start = charPosition;
      let end = charPosition;
      
      // Buscar inicio de palabra
      while (start > 0 && /\S/.test(text[start - 1])) {
        start--;
      }
      
      // Buscar fin de palabra
      while (end < text.length && /\S/.test(text[end])) {
        end++;
      }
      
      // Crear rango de selección
      range.setStart(textNode, start);
      range.setEnd(textNode, end);
      selection.removeAllRanges();
      selection.addRange(range);
      
      console.log('✅ Palabra seleccionada:', text.substring(start, end));
    }
  }
}

// Función para hacer click automático y seleccionar todo (disponible en consola)
window.autoSelectCode = function() {
  console.log('🎯 Seleccionando código automáticamente...');
  
  const codeDisplay = document.getElementById('shippingCodeDisplay');
  if (codeDisplay) {
    // Simular click para activar selección automática
    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    
    codeDisplay.dispatchEvent(clickEvent);
    
    // También intentar selección directa
    setTimeout(() => {
      selectAllText(codeDisplay);
    }, 100);
    
    console.log('✅ Selección automática activada');
  } else {
    console.error('❌ No se encontró el elemento de código');
  }
};
