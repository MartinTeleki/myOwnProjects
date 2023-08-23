import { HistoryManager } from "./history.js";
import { attachEventListeners } from "./eventListeners.js";

export function initializeCalculator() {
  // Select DOM elements
  const historyContainer = document.querySelector(".history");
  const historyList = document.querySelector(".history-list");
  const writeNumber = document.querySelector(".input--text-1");
  const calculateResult = document.querySelector(".btn--result");
  const displayResult = document.querySelector(".result");
  const historyItems = historyList.querySelectorAll(".history-div");

  const historyManager = new HistoryManager(historyList);

  const buttons = [
    { element: document.querySelector(".btn--plus"), symbol: "+" },
    { element: document.querySelector(".btn--minus"), symbol: "-" },
    { element: document.querySelector(".btn--times"), symbol: "*" },
    { element: document.querySelector(".btn--divided"), symbol: "/" },
    { element: document.querySelector(".btn--openBracket"), symbol: "(" },
    { element: document.querySelector(".btn--closeBracket"), symbol: ")" },
    { element: document.querySelector(".btn--percent"), symbol: "%" },
    { element: document.querySelector(".btn--dot"), symbol: "." },
    { element: document.querySelector(".btn--equals"), symbol: "=" },
    { element: document.querySelector(".btn--zero"), symbol: "0" },
    { element: document.querySelector(".btn--one"), symbol: "1" },
    { element: document.querySelector(".btn--two"), symbol: "2" },
    { element: document.querySelector(".btn--three"), symbol: "3" },
    { element: document.querySelector(".btn--four"), symbol: "4" },
    { element: document.querySelector(".btn--five"), symbol: "5" },
    { element: document.querySelector(".btn--six"), symbol: "6" },
    { element: document.querySelector(".btn--seven"), symbol: "7" },
    { element: document.querySelector(".btn--eight"), symbol: "8" },
    { element: document.querySelector(".btn--nine"), symbol: "9" },
  ];

  // Attach event listeners
  const closeButton = document.querySelector(".btn--close");
  closeButton.addEventListener("click", () => {
    historyContainer.style.opacity = 0;
    historyContainer.style.display = "none"
  });

  calculateResult.addEventListener("click", () => {
    historyManager.clearHistory();
    performanceCalculation(historyManager, writeNumber, displayResult);
    writeNumber.focus();

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

  historyItems.forEach((item) => {
    item.addEventListener("click", () => {
      const historyText = item.textContent;

      writeNumber.value = historyText;
      writeNumber.focus();

      // Aktualizujte event listenery
      updateEventListeners(historyManager, writeNumber, displayResult);
    });
  });

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

  function updateEventListeners(historyManager, writeNumber, displayResult) {
    // Odstraňte existující event listenery
    buttons.forEach(({ element }) => {
      element.removeEventListener("click", buttonClickHandler);
    });

    // Vytvořte nové event listenery s aktuálním obsahem textového pole
    buttons.forEach(({ element, symbol }) => {
      element.addEventListener("click", () => {
        buttonClickHandler(symbol);
      });
    });

    function buttonClickHandler(symbol) {
      if (symbol === "=") {
        performanceCalculation(historyManager, writeNumber, displayResult);
      } else {
        appendSymbol(symbol, writeNumber);
      }
    }
  }
}
