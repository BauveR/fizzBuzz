import { handleFormSubmit } from "./src/scripts/dom/handlers.js";

const init = () => {
    const form = document.querySelector("#fizzbuzz");
    form.addEventListener("submit", handleFormSubmit);
  };
  
  document.addEventListener("DOMContentLoaded", init);