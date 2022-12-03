const categoryChoose = document.querySelector("select");
const categoryDisplay = document.querySelector("pre");

categoryChoose.addEventListener("change", () => {
  const category = categoryChoose.value;
  updateDisplay(category);
});

function updateDisplay(category) {
  category = category.replace(" ", "");
  category = category.toLowerCase();
  const url = `${category}.txt`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.text();
    })
    .then((text) => (categoryDisplay.textContent = text))
    .catch(
      (error) => (categoryDisplay.textContent = `Could not fetch category: ${error}`)
    );
}

updateDisplay("Category 1");
categoryChoose.value = "Category 1";