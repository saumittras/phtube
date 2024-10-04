console.log("connected script video");

// 1. Fetch, Load and Show Categories on html
const loadCategories = () => {
  const url = "https://openapi.programming-hero.com/api/phero-tube/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

// Create DisplayCategories
const displayCategories = (categories) => {
  const categoryContinor = document.getElementById("category");
  categories.forEach((item) => {
    console.log(item);

    // create a button
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;

    // add button to category section
    categoryContinor.append(button);
  });
};

loadCategories();
