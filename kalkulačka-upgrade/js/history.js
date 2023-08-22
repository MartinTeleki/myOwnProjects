export class HistoryManager {
  constructor(historyListElement) {
    this.historyList = historyListElement;
    this.previousResults = [];
    console.log(this.previousResults);
  }

  appendToHistory(result) {
    const writeNumber = document.querySelector(".input--text-1");
    const historyContainer = document.querySelector(".history");

    this.previousResults.push(result);
    this.firstDisplay = true;
    const listItem = document.createElement("div");
    listItem.classList.add("history-div");
    listItem.textContent = result;
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
