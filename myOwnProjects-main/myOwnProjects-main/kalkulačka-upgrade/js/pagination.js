export function setupPagination(historyPages) {
  const paginationBack = document.querySelector(".pagination-back");
  const paginationForward = document.querySelector(".pagination-forward");

  let currentPage = 0;

  function paginateResults(results, resultsPerPage) {
    const paginatedResults = [];
    for (let i = 0; i < results.length; i += resultsPerPage) {
      paginatedResults.push(results.slice(i, i + resultsPerPage));
    }
    return paginatedResults;
  }

  function updatePaginationButtons() {
    paginationBack.disabled = currentPage === 0;
    paginationForward.disabled = currentPage === historyPages.length - 1;
  }

  function updateHistoryPageDisplay() {
    historyPages.forEach((page, index) => {
      page.style.display = index === currentPage ? "block" : "none";
    });
  }

  paginationBack.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      updatePaginationButtons();
      updateHistoryPageDisplay();
    }
  });

  paginationForward.addEventListener("click", () => {
    if (currentPage < historyPages.length - 1) {
      currentPage++;
      updatePaginationButtons();
      updateHistoryPageDisplay();
    }
  });

  updatePaginationButtons();
  updateHistoryPageDisplay();
}
