import { fizzBuzz } from "../core/fizzBuzz.js";
import { renderResult } from "../dom/renders.js";

export const handleFormSubmit = (event) => {
    event.preventDefault();
    const input = document.querySelector("#userInput");
    const value = parseInt(input.value);
    const result = fizzBuzz(isNaN(value) ? input.value : value);
    renderResult(result);
    input.value = "";
  };