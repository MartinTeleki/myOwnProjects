export class HistoryManager {
  constructor(historyListElement, maxResults = 10) {
    this.historyList = historyListElement;
    this.maxResults = maxResults;
    this.previousResults = [];
    this.resultCounter = 0;
  }

  appendToHistory(result) {
    const writeNumber = document.querySelector(".input--text-1");
    const historyContainer = document.querySelector(".history");
    this.resultNumberElement = document.querySelector(".result-number");

    if (this.previousResults.length >= this.maxResults) {
      return; // Pokud jsme již dosáhli limitu 10 výsledků, nepřidáváme další
    }

    this.previousResults.push(result);

    this.firstDisplay = true;
    const listItem = document.createElement("div");
    const resultNumber = this.previousResults.length;
    listItem.classList.add("history-div");

    listItem.textContent = `${resultNumber}. result: ${result}`;
    listItem.addEventListener("click", () => {
      // Při kliknutí na výsledek v historii se vepíše do textového pole
      writeNumber.value += result;
      writeNumber.focus();
    });
    historyContainer.style.opacity = 1;
    this.historyList.appendChild(listItem);

    const delay = this.firstDisplay ? 700 : 350;
    this.firstDisplay = false;

    setTimeout(() => {
      listItem.style.opacity = 1;
    }, delay);
  }

  clearHistory() {
    this.previousResults.splice(0, this.previousResults.length);
    this.historyList.textContent = "";
  }
}
