export const renderResult = (response) => {
    const results = document.querySelector("#results");
    const newResult = document.querySelector("div");

    newResult.innerHTML = `
    <p>${response.data.input}</p> 
     <p>${response.data.output}</p> 
    `;

    results.appendChild(newResult);

};