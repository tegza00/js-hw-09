const ingredientsList = document.querySelector("#ingredients");
const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];
const fragment = document.createDocumentFragment();
ingredients.forEach((ingredientText) => {
  const li = document.createElement("li");
  li.textContent = ingredientText;
  fragment.appendChild(li);
});
ingredientsList.appendChild(fragment);
