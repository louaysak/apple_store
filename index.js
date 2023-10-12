var imagepr = document.querySelector(".img");
var colorbg = document.querySelector(".container");

function phones(phone) {
  imagepr.src = phone;
}
function colors(color) {
  colorbg.style.background = color;
}
document.addEventListener("DOMContentLoaded", function () {
  var userStatusDiv = document.getElementById("user-status");
  var isLoggedIn = localStorage.getItem("isLoggedIn");
  var username = localStorage.getItem("username");
  var password = localStorage.getItem("password");
  if (isLoggedIn === "true") {
    var greetingMessage = document.createElement("p");
    greetingMessage.textContent = `Welcome, ${username}!`;
    var logoutButton = document.createElement("button");
    logoutButton.textContent = "Logout";
    logoutButton.addEventListener("click", function () {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      window.location.href = "login.html";
    });
    userStatusDiv.appendChild(greetingMessage);
    userStatusDiv.appendChild(logoutButton);
  } else {
    var loginButton = document.createElement("a");
    loginButton.textContent = "Login";
    loginButton.href = "login.html";
  }
});
