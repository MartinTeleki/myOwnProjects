import { RegistrationManager } from "./register.js";
import { applyLabelEffect } from "./labelEffect.js";
import { LoginManager } from "./login.js";
import { CalculatorEventManager } from "./eventListeners.js";
import { HistoryManager } from "./history.js";

document.addEventListener("DOMContentLoaded", () => {
  const historyList = document.querySelector(".history-list");

  const writeNumber = document.querySelector(".input--text-1");
  const displayResult = document.querySelector(".result");

  const historyManager = new HistoryManager(historyList);
  const calculatorEventManager = new CalculatorEventManager(
    historyManager,
    writeNumber,
    displayResult
  );

  calculatorEventManager._attachEventListeners();

  const historyPages = document.querySelectorAll(".history-page");
  const registrationManager = new RegistrationManager();
  const loginManager = new LoginManager();

  applyLabelEffect();
});
