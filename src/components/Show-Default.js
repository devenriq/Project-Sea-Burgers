import { listOfBurgers } from "./DB.js";
import { formAlert } from "./Sweet-Alert.js";
let buyButton;

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

// Showing the burgers in the layout
export const showBurgers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        listOfBurgers.forEach((burger) => {
          const burgerContainer = document.createElement("div");
          burgerContainer.classList.add("burger-container");

          const imgContainer = document.createElement("div");
          imgContainer.classList.add("md:w-1/2");
          const image = document.createElement("img");
          image.classList.add("burger-image");
          image.src = burger.image;

          const textContainer = document.createElement("div");
          textContainer.classList.add("md:w-1/2");
          textContainer.classList.add("container-text");
          textContainer.setAttribute("id", "container-text");

          const textTitle = document.createElement("h2");
          textTitle.classList.add("burger-name");
          const name = document.createTextNode(burger.name);
          textTitle.append(name);

          const textP = document.createElement("p");
          textP.classList.add("burger-description");
          const description = document.createTextNode(burger.description);
          textP.append(description);

          const burgerPrice = document.createElement("div");
          burgerPrice.classList.add("burger-price");
          const price = document.createTextNode(`$ ${burger.price}`);
          burgerPrice.append(price);

          // const burgerPunctuation = document.createElement("div");
          // burgerPunctuation.classList.add("burger-punctuation");
          // const punctuation = document.createTextNode(`${burger.punctuation}`);
          // burgerPunctuation.append(punctuation);

          buyButton = document.createElement("button");
          buyButton.classList.add("btn-buy");
          const buy = document.createTextNode("Buy");
          buyButton.append(buy);

          imgContainer.append(image);
          textContainer.append(
            textTitle,
            textP,
            burgerPrice,
            // burgerPunctuation,
            buyButton
          );
          burgerContainer.append(imgContainer, textContainer);

          listBurgers.append(burgerContainer);
          buyButton.addEventListener("click", formAlert);

          // const newBurger = `

          // `;
          // listBurgers.innerHTML += newBurger;
        })
      );
    }, 2000);
  });
};
