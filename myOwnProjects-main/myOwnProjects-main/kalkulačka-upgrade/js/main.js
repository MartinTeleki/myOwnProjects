import { initializeCalculator } from "./calculatorModule.js";
import { setupPagination } from "./pagination.js";

const historyPages = document.querySelectorAll(".history-page");
setupPagination(historyPages);
initializeCalculator();

// const loginForm = document.querySelector(".login-form");
// const usernameInput = document.getElementById("username");
// const passwordInput = document.getElementById("password");

const container = document.querySelector(".container")
const container1 = document.querySelector(".container-1");
const nameInput = document.querySelector("#name")
const passwordInput = document.querySelector("#password")
const loginButton = document.querySelector(".btn-login")
const loginForm = document.querySelector(".form-control-1")
console.log(loginButton);
//console.log(loginButton);
const loginInfo = [
  { username: "martin", password: "pes" },
  { username: "jana", password: "kočka" },
  { username: "zdenda", password: "špaček" },
  { username: "tonda", password: "čáp" },
  // Další přihlašovací údaje
];

loginButton.addEventListener("click", (e) => {
  e.preventDefault()
  const username =nameInput.value.toLowerCase();
  const password = passwordInput.value;
  console.log(username, password);

  const validLogin = loginInfo.some(
    (info) => info.username === username && info.password === password
  );

  console.log(validLogin);

  if (validLogin) {
    loginForm.style.display = "none";
    container.style.display = "block";
    container.style.pointerEvents = "";
    container1.style.opacity = 0
    container.style.opacity = 1
    
  } else {
    alert("Invalid username or password");
  }
});

const labels = document.querySelectorAll(".form-control-1 label");

labels.forEach((label) => {
  label.innerHTML = label.textContent
    .split("")
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 70}ms">${letter}</span>`
    )
    .join("");
});
