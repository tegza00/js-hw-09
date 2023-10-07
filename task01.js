const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll("li.item");
const categoryCount = categoryItems.length;
console.log(`У списку ${categoryCount} категорії.`);
categoryItems.forEach((categoryItem) => {
  const categoryTitle = categoryItem.querySelector("h2");
  const categoryItemsCount = categoryItem.querySelectorAll("ul li").length;
  console.log(`Категорія ${categoryTitle.textContent}`);
  console.log(`Кількість елементів: ${categoryItemsCount}`);
});