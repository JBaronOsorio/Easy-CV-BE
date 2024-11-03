// Simulación de interacción con la API de IA
function completarConIA(datosCV, callback) {
    // Aquí iría la llamada a la API real usando fetch u otro método
    let camposCompletados = {
      nombre: datosCV.nombre,
      email: datosCV.email,
      experiencia: datosCV.experiencia + " + Complementado con IA"
    };
    callback(camposCompletados);
  }
  
  // Mensaje desde el content script para completar el formulario
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'completarFormulario') {
      chrome.storage.local.get('cvData', function(result) {
        if (result.cvData) {
          completarConIA(result.cvData, (camposCompletados) => {
            sendResponse({ success: true, datos: camposCompletados });
          });
        } else {
          sendResponse({ success: false, error: 'Datos de CV no encontrados' });
        }
      });
      return true;  // Mantener el canal abierto para enviar la respuesta asíncrona
    }
  });
  