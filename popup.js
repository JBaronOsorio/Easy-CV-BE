document.getElementById('cvForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obtener los datos del formulario
    let cvData = {
      nombre: document.getElementById('nombre').value,
      apellido: document.getElementById('apellido').value,
      email: document.getElementById('email').value,
      experiencia: document.getElementById('experiencia').value,
      educacion: document.getElementById('educacion').value
    };
  
    // Guardar los datos en el almacenamiento local
    chrome.storage.local.set({cvData: cvData}, function() {
      document.getElementById('status').textContent = 'Datos guardados correctamente.';
    });
  });
  
