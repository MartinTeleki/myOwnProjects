import { initializeCalculator } from "./calculatorModule.js";
import { setupPagination } from "./pagination.js";

const historyPages = document.querySelectorAll(".history-page");
setupPagination(historyPages);
initializeCalculator();
