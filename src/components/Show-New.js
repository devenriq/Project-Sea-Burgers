const listBurgers = document.querySelector("#list-burgers");

// Create burgers
export class CreateNewBurger {
  constructor(userName, name, description, image, price) {
    this.userName = userName;
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
  }
}

// Creating a new burger
export const addNewBurger = (e) => {
  e.preventDefault();
  const formName = document.querySelector("#form-name"),
    formBurgerName = document.querySelector("#form-burger-name"),
    formBurgerPrice = document.querySelector("#form-burger-price"),
    formBurgerDescription = document.querySelector("#form-burger-description"),
    formBurgerImage = document.querySelector("#form-burger-image");

  const burger = new CreateNewBurger(
    formName.value,
    formBurgerName.value,
    formBurgerDescription.value,
    formBurgerImage.value,
    formBurgerPrice.value
  );

  showNewBurgers(burger);
};

// Showing the new burgers in the layout
export const showNewBurgers = (newBurger) => {
  newBurger = `
    <div class="burger-container" >
      <div class='md:w-1/2'>
        <img src="${newBurger.image}" alt="A burger picture"
          class="burger-image"
        >
      </div>
      <div class="px-2 rounded-lg md:w-1/2 md:rounded-l-none">
        <h2 class="burger-name">${newBurger.name} </h2>
        <p class=" burger-description">${newBurger.description}</p>
        <div class=" burger-price">$${newBurger.price}</div>
        <div class=" burger-creator">Proposed by: ${newBurger.userName}</div>
      </div>
    </div>
  `;
  listBurgers.innerHTML += newBurger;
};
