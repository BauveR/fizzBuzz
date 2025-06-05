export const renderResult = (response) => {
    const results = document.querySelector("#results");
    const newResult = document.querySelector("div");

    newResult.className = `alert ${
        response.status === "Invalid request" ? "alert-danger" : "alert-success"
      } `;
    
      newResult.innerHTML = `
            <p class=""><strong>Input:</strong> ${response.data.input}</p>
            <p class=""><strong>Output:</strong> ${response.data.output}</p>
          `;

    results.appendChild(newResult);

};