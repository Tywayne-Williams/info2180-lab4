
document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.querySelector("#search-form");
    const queryInput = document.querySelector("#query");
    const resultDiv = document.querySelector("#result");

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const query = queryInput.value.trim();
        const url = "superheroes.php?query=" + encodeURIComponent(query);

        resultDiv.textContent = "Searching...";

        fetch(url)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("HTTP error: " + response.status);
                }
                return response.text();
            })
            .then(function (data) {
                resultDiv.innerHTML = data;
            })
            .catch(function (error) {
                resultDiv.textContent = "Error: " + error.message;
                console.error(error);
            });
    });
});
