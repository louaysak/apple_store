document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.getElementById("login-form");
  var messageDiv = document.getElementById("message");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email =document.getElementById("email").value;


    
    if (username && password) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", username);
      localStorage.setItem("password", password)

      messageDiv.innerHTML = "Login successful! Redirecting...";
      setTimeout(function () {
        window.location.href = "homepage.html";
      }, 2000); 
    } else {
      messageDiv.innerHTML = "Login failed. Please check your credentials.";
    }
  });
});
