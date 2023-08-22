export function attachEventListeners(
  historyManager,
  writeNumber,
  displayResult
) {
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

  buttons.forEach(({ element, symbol }) => {
    element.addEventListener("click", () => {
      if (symbol === "=") {
        performCalculation(historyManager, writeNumber, displayResult);
      } else {
        appendSymbol(symbol, writeNumber);
      }
    });
  });

  // Přidejte poslech klávesy Enter na celé stránce
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      performCalculation(historyManager, writeNumber, displayResult);
    }
  });

  function appendSymbol(symbol, writeNumber) {
    writeNumber.value += symbol;
    writeNumber.focus();
  }

  function performCalculation(historyMgr, writeNumber, displayResult) {
    try {
      const result = eval(writeNumber.value);
      const roundedResult = result.toFixed(2);
      displayResult.style.color = "black";
      displayResult.textContent = roundedResult;
      writeNumber.value = "";
      historyMgr.appendToHistory(roundedResult);
    } catch (error) {
      writeNumber.value = "";

      displayResult.style.color = "red";
      displayResult.textContent = "Error";
      console.log("Chyba při vyhodnocování výrazu:", error);
    }
  }
}
