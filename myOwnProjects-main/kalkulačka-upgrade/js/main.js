// main.js
import { initializeCalculator } from "./calculatorModule.js";

import { initializeLogin } from "./login.js";
import { applyLabelEffect } from "./labelEffect.js";

const historyPages = document.querySelectorAll(".history-page");

initializeCalculator();
initializeLogin();
applyLabelEffect();

