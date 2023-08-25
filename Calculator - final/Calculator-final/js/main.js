import { RegistrationManager } from "./register.js";
import { _applyLabelEffect } from "./labelEffect.js";
import { LoginManager } from "./login.js";
import { CalculatorEventManager } from "./eventListeners.js";
import { HistoryManager } from "./history.js";
import { CalculatorApp } from "./calculatorModule.js";

document.addEventListener("DOMContentLoaded", () => {
  const historyList = document.querySelector(".history-list");
  const historyPages = document.querySelectorAll(".history-page");
  const writeNumber = document.querySelector(".input--text-1");
  const displayResult = document.querySelector(".result");

  const historyManager = new HistoryManager(historyList);
  const calculatorEventManager = new CalculatorEventManager(
    historyManager,
    writeNumber,
    displayResult
  );

  calculatorEventManager._attachEventListeners();

  const registrationManager = new RegistrationManager();
  const loginManager = new LoginManager();

  _applyLabelEffect();

  const calculatorApp = new CalculatorApp();
  calculatorApp.initialize();
});
