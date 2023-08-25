import { HistoryManager } from "./history.js";

export class CalculatorApp {
  constructor() {
    this._historyContainer = document.querySelector(".history");
    this._historyList = document.querySelector(".history-list");
    this._writeNumber = document.querySelector(".input--text-1");
    this._calculateResult = document.querySelector(".btn--result");
    this._displayResult = document.querySelector(".result");
    this._historyItems = this._historyList.querySelectorAll(".history-div");
    this._equals = document.querySelector(".btn--equals");
    this._inputText = document.querySelector(".input--text-1");
    this._backNumber = document.querySelector(".btn--back");
    this._deleteNumber = document.querySelector(".btn--delete");
    this._closeButton = document.querySelector(".btn--close");

    this._historyManager = new HistoryManager(this._historyList);

    this._buttons = [
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

    // this._initialize();
  }

  initialize() {
    this._setupEventListeners();
  }

  _setupEventListeners() {
    this._closeButton.addEventListener("click", () => {
      this._historyContainer.style.opacity = 0;
      this._historyContainer.style.display = "none";
      console.log("pes");
    });

    this._calculateResult.addEventListener("click", () => {
      this._historyManager._clearHistory();
      this._performanceCalculation();
      this._writeNumber.focus();
    });

    this._displayResult.addEventListener("keydown", (e) => {
      e.preventDefault();
      this._handleEnterKey(e);
    });

    this._backNumber.addEventListener("click", () => {
      this._handleBackNumber();
    });

    this._deleteNumber.addEventListener("click", () => {
      this._handleDeleteNumber();
    });

    this._historyItems.forEach((item) => {
      item.addEventListener("click", () => {
        const historyText = item.textContent;
        this._writeNumber.value = historyText;
        this._writeNumber.focus();
        this._updateEventListeners();
      });
    });

    this._equals.addEventListener("click", () => {
      if (this._inputText === "") {
        this._historyContainer.style.display = "none";
      } else {
        this._historyContainer.style.display = "block";
        this._historyContainer.style.opacity = 1;
      }
    });

    this._updateEventListeners();
  }

  _performanceCalculation() {
    try {
      const expression = this._writeNumber.value;
      if (expression.trim() === "") {
        return;
      }
      const vyhodnoť = new Function("return " + expression);
      const result = vyhodnoť();
      if (isNaN(result)) {
        throw new Error("Bad result");
      }
      const roundedResult = result.toFixed(2);
      this._displayResult.style.color = "black";
      this._displayResult.textContent = roundedResult;
      this._writeNumber.value = "";
      this._historyManager._appendToHistory(roundedResult);
      this._displayResult.textContent = "";
    } catch (error) {
      this._writeNumber.value = "";
      this._displayResult.style.color = "red";
      this._displayResult.textContent = "Error";
      console.log("Mistake in expression", error);
    }
  }

  _handleEnterKey(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      this._performanceCalculation();
    }
  }

  _handleBackNumber() {
    this._writeNumber.value = this._writeNumber.value.slice(0, -1);
    this._writeNumber.focus();
  }

  _handleDeleteNumber() {
    this._writeNumber.value = "";
    this._writeNumber.focus();
  }

  _updateEventListeners() {
    this._buttons.forEach(({ element }) => {
      element.removeEventListener("click", this._buttonClickHandler);
    });
  }
}

const calculatorApp = new CalculatorApp();
