import Button from "../Button/Button.js";

const Filters = () => {
  const filters = document.createElement('div');
  filters.innerText = "Filters";

  filters.appendChild(Button("Add Deposit"))

  return filters;
}

export default Filters;