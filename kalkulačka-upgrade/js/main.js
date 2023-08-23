// main.js
import { initializeCalculator } from "./calculatorModule.js";
import { RegistrationManager } from "./register.js";
import { applyLabelEffect } from "./labelEffect.js";
import { LoginManager } from "./login.js";

const historyPages = document.querySelectorAll(".history-page");
const registrationManager = new RegistrationManager();
const loginManager = new LoginManager()
initializeCalculator();

applyLabelEffect();

