document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('registerButton').addEventListener('click', function() {
      // Redirect to signup page
      chrome.tabs.create({ url: 'http://127.0.0.1:8000/create-profile/' });
  });

  document.getElementById('loginButton').addEventListener('click', function() {
      // Redirect to login page
      chrome.tabs.create({ url: 'http://127.0.0.1:8000/create-profile/' });
  });
});
