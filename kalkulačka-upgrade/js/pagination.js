export function setupPagination(historyPages) {
  const paginationBack = document.querySelector(".pagination-back");
  const paginationForward = document.querySelector(".pagination-forward");

  let currentPage = 0;

  function updatePaginationButtons() {
    paginationBack.disabled = currentPage === 0;
    paginationForward.disabled = currentPage === historyPages.length - 1;
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

  function updateHistoryPageDisplay() {
    historyPages.forEach((page, index) => {
      page.style.display = index === currentPage ? "block" : "none";
    });
  }

  updatePaginationButtons();
  updateHistoryPageDisplay();
}
