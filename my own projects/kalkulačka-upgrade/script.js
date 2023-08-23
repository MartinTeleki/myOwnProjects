"use strict";

const plus = document.querySelector(".btn--plus");
const minus = document.querySelector(".btn--minus");
const times = document.querySelector(".btn--times");
const divided = document.querySelector(".btn--divided");
const openBracket = document.querySelector(".btn--openBracket");
const closeBracket = document.querySelector(".btn--closeBracket");
const percent = document.querySelector(".btn--percent");
const dot = document.querySelector(".btn--dot");
const equals = document.querySelector(".btn--equals");

const zero = document.querySelector(".btn--zero");
const one = document.querySelector(".btn--one");
const two = document.querySelector(".btn--two");
const three = document.querySelector(".btn--three");
const four = document.querySelector(".btn--four");
const five = document.querySelector(".btn--five");
const six = document.querySelector(".btn--six");
const seven = document.querySelector(".btn--seven");
const eight = document.querySelector(".btn--eight");
const nine = document.querySelector(".btn--nine");

const backNumber = document.querySelector(".btn--back");
const deleteNumber = document.querySelector(".btn--delete");

const calculateResult = document.querySelector(".btn--result");
const displayResult = document.querySelector(".result");

const writeNumber = document.querySelector(".input--text-1");

const historyContainer = document.querySelector(".history");
const historyList = document.querySelector(".history-list");
const historyText = document.querySelector(".history-li");
const closeButton = document.querySelector(".btn--close");

const previousResults = [];
let firstDisplay = true;

console.log(previousResults);

closeButton.addEventListener("click", () => {});

const appendToHistory = (result) => {
  const listItem = document.createElement("li");
  listItem.classList.add("history-li");
  listItem.textContent = result;
  listItem.style.opacity = 0;
  historyList.appendChild(listItem);

  const delay = firstDisplay ? 700 : 350;
  firstDisplay = false;

  setTimeout(() => {
    listItem.style.opacity = 1;
  }, delay);
};

const performanceCalculation = () => {
  const text = writeNumber.value;
  //console.log("Text:", text);
  try {
    const result = eval(text);
    //console.log(result);

    const roundedResult = result.toFixed(2);
    displayResult.style.color = "black";
    displayResult.textContent = roundedResult;
    writeNumber.value = "";
    previousResults.push(displayResult.textContent);
    appendToHistory(roundedResult);
    historyContainer.style.opacity = 1;
  } catch (error) {
    //console.log("Chyba:", error);
    writeNumber.value = "";
    displayResult.style.color = "red";
    displayResult.textContent = "Error";
    console.log("Chyba při vyhodnocování výrazu:", error);
  }
};

calculateResult.addEventListener("click", () => {
  previousResults.splice(0, previousResults.length);
  historyList.innerHTML = "";
});

writeNumber.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    performanceCalculation();
  }
});

closeButton.addEventListener("click", () => {
  historyContainer.style.opacity = 0;
});

const appendSymbol = (symbol) => {
  writeNumber.value += symbol;
  writeNumber.focus();
};

backNumber.addEventListener("click", () => {
  writeNumber.value = writeNumber.value.slice(0, -1);
  writeNumber.focus();
});
deleteNumber.addEventListener("click", () => {
  writeNumber.value = "";
  writeNumber.focus();
});

percent.addEventListener("click", () => {
  appendSymbol("%");
});

dot.addEventListener("click", () => {
  appendSymbol(".");
});

equals.addEventListener("click", performanceCalculation);

plus.addEventListener("click", () => {
  appendSymbol("+");
});

minus.addEventListener("click", () => {
  appendSymbol("-");
});

times.addEventListener("click", () => {
  appendSymbol("*");
});

divided.addEventListener("click", () => {
  appendSymbol("/");
});

openBracket.addEventListener("click", () => {
  appendSymbol("(");
});

closeBracket.addEventListener("click", () => {
  appendSymbol(")");
});

zero.addEventListener("click", () => {
  appendSymbol("0");
});

one.addEventListener("click", () => {
  appendSymbol("1");
});

two.addEventListener("click", () => {
  appendSymbol("2");
});

three.addEventListener("click", () => {
  appendSymbol("3");
});

four.addEventListener("click", () => {
  appendSymbol("4");
});

five.addEventListener("click", () => {
  appendSymbol("5");
});

six.addEventListener("click", () => {
  appendSymbol("6");
});

seven.addEventListener("click", () => {
  appendSymbol("7");
});

eight.addEventListener("click", () => {
  appendSymbol("8");
});

nine.addEventListener("click", () => {
  appendSymbol("9");
});
