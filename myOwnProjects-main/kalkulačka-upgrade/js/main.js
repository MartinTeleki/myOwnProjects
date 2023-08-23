// main.js
import { initializeCalculator } from "./calculatorModule.js";
import { setupPagination } from "./pagination.js";
import { initializeLogin } from "./login.js"; 
import { applyLabelEffect } from "./labelEffect.js";

const historyPages = document.querySelectorAll(".history-page");
setupPagination(historyPages);
initializeCalculator();
initializeLogin(); 
applyLabelEffect();



