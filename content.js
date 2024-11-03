// Función para auto-completar los campos
function autoFillForm(cvData) {
    // Ejemplos de posibles campos en la página de destino
    let nameField = document.querySelector('input[name="nombre"]');
    let emailField = document.querySelector('input[name="email"]');
    let experienceField = document.querySelector('textarea[name="experiencia"]');
  
    // Rellenar los campos si existen
    if (nameField) nameField.value = `${cvData.nombre} ${cvData.apellido}`;
    if (emailField) emailField.value = cvData.email;
    if (experienceField) experienceField.value = cvData.experiencia;
  }
  
  // Obtener los datos almacenados y rellenar el formulario
  chrome.storage.local.get('cvData', function(result) {
    if (result.cvData) {
      autoFillForm(result.cvData);
    }
  });
  