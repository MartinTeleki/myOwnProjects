// main.js
import { initializeCalculator } from "./calculatorModule.js";

import { initializeLogin } from "./login.js";
import { applyLabelEffect } from "./labelEffect.js";

// const historyPages = document.querySelectorAll(".history-page");

initializeCalculator();
initializeLogin();
applyLabelEffect();




const container1 = document.querySelector(".container-1");
const container2 = document.querySelector(".container-2");
const navLogin = document.querySelector(".nav-login")
const navRegister = document.querySelector(".nav-register")
const labels2 = document.querySelectorAll(".form-control-2 label")

navLogin.addEventListener("click", (e)=> {
  e.preventDefault()
  console.log("pes");
  container2.style.display = "none"
  container1.style.display = "block"
})

navRegister.addEventListener("click", (e)=> {
  e.preventDefault()
  console.log("pes");
  container1.style.display = "none"
  container2.style.display = "block"
})


labels2.forEach((label) => {
  label.innerHTML = label.textContent
    .split("")
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 70}ms">${letter}</span>`
    )
    .join("");
});
