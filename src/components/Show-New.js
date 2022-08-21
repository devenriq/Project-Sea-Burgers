import { formAlert } from "./Sweet-Alert.js";
let buyButton;

const listBurgers = document.querySelector("#list-burgers");
// let buyButton = document.createElement("button");

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
  const burgerContainer = document.createElement("div");
  burgerContainer.classList.add("burger-container");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("md:w-1/2");
  const image = document.createElement("img");
  image.classList.add("burger-image");
  image.src = newBurger.image;

  const textContainer = document.createElement("div");
  textContainer.classList.add("md:w-1/2");
  textContainer.classList.add("container-text");
  textContainer.setAttribute("id", "container-text");

  const textTitle = document.createElement("h2");
  textTitle.classList.add("burger-name");
  const name = document.createTextNode(newBurger.name);
  textTitle.append(name);

  const textP = document.createElement("p");
  textP.classList.add("burger-description");
  const description = document.createTextNode(newBurger.description);
  textP.append(description);

  const burgerPrice = document.createElement("div");
  burgerPrice.classList.add("burger-price");
  const price = document.createTextNode(`$ ${newBurger.price}`);
  burgerPrice.append(price);

  const burgerCreator = document.createElement("div");
  burgerCreator.classList.add("burger-creator");
  const creator = document.createTextNode(newBurger.creator);
  burgerCreator.append(creator);

  buyButton = document.createElement("button");
  buyButton.classList.add("btn-buy");
  const buy = document.createTextNode("Buy");
  buyButton.append(buy);

  imgContainer.append(image);
  textContainer.append(textTitle, textP, burgerPrice, burgerCreator, buyButton);
  burgerContainer.append(imgContainer, textContainer);

  listBurgers.append(burgerContainer);
  buyButton.addEventListener("click", formAlert);
};
