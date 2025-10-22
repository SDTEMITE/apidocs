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
    expandIcon.textContent = '📕';
    expandBtn.title = 'Contraer código';
  } else {
    // Contraer
    codeContent.classList.add('collapsed');
    expandBtn.classList.remove('expanded');
    expandIcon.textContent = '📖';
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
    copyCodeBtn.addEventListener('click', function() {
      const codeDisplay = document.getElementById('shippingCodeDisplay');
      const codeText = codeDisplay.textContent;
      
      navigator.clipboard.writeText(codeText).then(() => {
        console.log('📋 Código copiado al portapapeles');
        
        // Feedback visual
        const originalText = this.textContent;
        this.textContent = '✅ Copiado!';
        this.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
        
        setTimeout(() => {
          this.textContent = originalText;
          this.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
        }, 2000);
      }).catch(err => {
        console.error('Error al copiar:', err);
        
        // Fallback para navegadores que no soportan clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = codeText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        // Feedback visual
        const originalText = this.textContent;
        this.textContent = '✅ Copiado!';
        setTimeout(() => {
          this.textContent = originalText;
        }, 2000);
      });
    });
  }
  
  
  // Inicializar código en estado contraído
  const codeContent = document.getElementById('shippingCodeContent');
  if (codeContent) {
    codeContent.classList.add('collapsed');
  }
  
  // Inicializar submétodos para CURL (método por defecto)
  updateSubMethods('curl');
  
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
    });
    
    subMethodsTabs.appendChild(button);
  });
  
  // Actualizar código con el primer submétodo por defecto
  if (subMethods.length > 0) {
    updateShippingCode(subMethods[0].key);
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
  
  // Actualizar submétodos
  updateSubMethods(method);
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
