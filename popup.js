document.addEventListener('DOMContentLoaded', function() {
  // Botón de registro
  document.getElementById('registerButton').addEventListener('click', function() {
      chrome.tabs.create({ url: 'http://127.0.0.1:8000/create-profile/' });
  });

  // Botón de inicio de sesión
  document.getElementById('loginButton').addEventListener('click', function() {
    // Simulación de una respuesta exitosa sin hacer una solicitud fetch
    const simulatedResponse = { success: true }; // Simula una respuesta del servidor

    if (simulatedResponse.success) {
      // Oculta el botón "Iniciar sesión" y muestra el mensaje de bienvenida
      document.getElementById('loginButton').style.display = 'none';
      document.getElementById('welcomeMessage').style.display = 'block';
    } else {
      console.log("Error: Consulta fallida");
    }
  });

  // Botón de autocompletar campos
  document.getElementById('autofillButton').addEventListener('click', function() {
    console.log('Autocompletar campos presionado');
    // Lógica adicional para autocompletar campos
  });
});
