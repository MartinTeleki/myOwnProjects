import { initializeCalculator } from "./calculatorModule.js";
import { setupPagination } from "./pagination.js";

const historyPages = document.querySelectorAll(".history-page");
setupPagination(historyPages);
initializeCalculator();

const loginForm = document.querySelector(".login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
// const loginButton = document.getElementById("login-button");
const container = document.querySelector(".container");

// const loginInfo = [
//   { username: "martin", password: "pes" },
//   { username: "jana", password: "kočka" },
//   { username: "zdenda", password: "špaček" },
//   { username: "tonda", password: "čáp" },
//   // Další přihlašovací údaje
// ];

// loginButton.addEventListener("click", () => {
//   const username = usernameInput.value.toLowerCase();
//   const password = passwordInput.value;
//   container.style.opacity = 1;

//   const validLogin = loginInfo.some(
//     (info) => info.username === username && info.password === password
//   );

//   if (validLogin) {
//     loginForm.style.display = "none";
//     container.style.display = "block";
//     container.style.pointerEvents = "";
//   } else {
//     alert("Invalid username or password");
//   }
// });

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
