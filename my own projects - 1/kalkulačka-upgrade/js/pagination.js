// class HistoryPagination {
//   constructor(results, itemsPerPage) {
//     this.results = results;
//     this.itemsPerPage = itemsPerPage;
//     this.currentPage = 1;
//     this.paginatedResults = this.paginateResults();
//     this.historyList = document.querySelector(".history-list");
//     this.prevButton = document.querySelector(".pagination-back");
//     this.nextButton = document.querySelector(".pagination-forward");
    
//     this.prevButton.addEventListener("click", this.prevPage.bind(this));
//     this.nextButton.addEventListener("click", this.nextPage.bind(this));
    
//     this.displayPage(this.paginatedResults[this.currentPage - 1]);
//   }

//   paginateResults() {
//     const paginatedResults = [];
//     for (let i = 0; i < this.results.length; i += this.itemsPerPage) {
//       paginatedResults.push(this.results.slice(i, i + this.itemsPerPage));
//     }
//     return paginatedResults;
//   }

//   displayPage(pageResults) {
//     this.historyList.innerHTML = "";
//     pageResults.forEach(result => {
//       const div = document.createElement("div");
//       div.textContent = result;
//       this.historyList.appendChild(div);
//     });
//   }

//   prevPage() {
//     if (this.currentPage > 1) {
//       this.currentPage--;
//       this.displayPage(this.paginatedResults[this.currentPage - 1]);
//     }
//   }

//   nextPage() {
//     if (this.currentPage < this.paginatedResults.length) {
//       this.currentPage++;
//       this.displayPage(this.paginatedResults[this.currentPage - 1]);
//     }
//   }
// }

// // Inicializace třídy s historickými výsledky
// const historyPagination = new HistoryPagination(yourResultsArray, itemsPerPage);
