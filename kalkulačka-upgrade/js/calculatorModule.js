import { HistoryManager } from "./history.js";
import { attachEventListeners } from "./eventListeners.js";

export function initializeCalculator() {
  // Select DOM elements
  const historyContainer = document.querySelector(".history");
  const historyList = document.querySelector(".history-list");
  const writeNumber = document.querySelector(".input--text-1");
  const calculateResult = document.querySelector(".btn--result");
  const displayResult = document.querySelector(".result");

  const historyManager = new HistoryManager(historyList);

  // Attach event listeners
  const closeButton = document.querySelector(".btn--close");
  closeButton.addEventListener("click", () => {
    historyContainer.style.opacity = 0;
  });

  calculateResult.addEventListener("click", () => {
    historyManager.clearHistory();
    performanceCalculation(historyManager, writeNumber, displayResult);
    //console.log(historyManager, writeNumber, displayResult);
  });

  displayResult.addEventListener("keydown", (e) => {
    e.preventDefault();
    handleEnterKey(e, historyManager, writeNumber, displayResult);
    console.log(e, historyManager, writeNumber, displayResult);
  });

  const backNumber = document.querySelector(".btn--back");
  backNumber.addEventListener("click", () => {
    handleBackNumber();
  });

  const deleteNumber = document.querySelector(".btn--delete");
  deleteNumber.addEventListener("click", () => {
    handleDeleteNumber();
  });

  // Attach other event listeners
  attachEventListeners(historyManager, writeNumber, displayResult);

  function performanceCalculation(historyMgr, writeNumber, displayResult) {
    try {
      const expression = writeNumber.value;
      if (expression.trim() === "") {
        return;
      }

      const vyhodnoť = new Function("return " + expression);
      const result = vyhodnoť();

      if (isNaN(result)) {
        throw new Error("Bad result");
      }

      const roundedResult = result.toFixed(2);
      displayResult.style.color = "black";
      displayResult.textContent = roundedResult;
      writeNumber.value = "";
      historyMgr.appendToHistory(roundedResult);
      displayResult.textContent = "";
    } catch (error) {
      writeNumber.value = "";
      displayResult.style.color = "red";
      displayResult.textContent = "Error";
      console.log("Mistake in expression", error);
    }
  }

  function handleEnterKey(e, historyMgr, writeNumber, displayResult) {
    if (e.key === "Enter") {
      console.log("Pressed key:", e.key);
      e.preventDefault();
      console.log("Enter key pressed"); // Přidáno pro ověření
      performanceCalculation(historyMgr, writeNumber, displayResult);
    }
  }

  function handleBackNumber() {
    writeNumber.value = writeNumber.value.slice(0, -1);
    writeNumber.focus();
  }

  function handleDeleteNumber() {
    writeNumber.value = "";
    writeNumber.focus();
  }
}
