import { listOfBurgers } from "./List-Burgers.js";
const listBurgers = document.querySelector("#list-burgers");

// Showing the burgers in the layout
export const showBurgers = () => {
  listOfBurgers.forEach((burger) => {
    const newBurger = `
      <div class="burger-container" >
        <div>
          <img src="${burger.image}" alt="A burger picture"
            class="burger-image"
          >
        </div>
        <div class="px-2 rounded-lg md:rounded-l-none">
          <h2 class="burger-name">${burger.name} </h2>
          <p class=" burger-description">${burger.description}</p>
          <div class=" burger-price">$${burger.price}</div>
          <div class=" burger-punctuation">${burger.punctuation}</div>
        </div>
      </div>
    `;
    listBurgers.innerHTML += newBurger;
  });
};

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
