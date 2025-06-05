export const renderResult = (response) => {
  const results = document.querySelector("#results");
  const newResult = document.createElement("div");

  newResult.className = `alert ${
    response.status === "Invalid request"
  } `;

  newResult.innerHTML = `
        <p><strong>Input:</strong> ${response.data.input}</p>
        <p><strong>Output:</strong> ${response.data.output}</p>
      `;

  results.appendChild(newResult);
};