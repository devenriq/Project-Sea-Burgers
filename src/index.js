// taking the elements in html
const burgerGridContainer = document.querySelector("#list-burgers");
const addBurgerButton = document.querySelector("#add-burger-button");
const modalContainer = document.querySelector("#modal-container");
const buttonSend = document.querySelector("#button-send");

// List of burgers
const listOfBurgers = [
  {
    name: "burger",
    description: "This is a simple burger with fresh ingredients",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500&q=80 ",
    price: "$45",
    punctuation: "&starf;&starf;&starf;&starf;&starf;",
  },
  {
    name: "Chicken Sandwich",
    description: "This is a simple hamburg with fresh ingredients",
    image:
      "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/fc7c2a73e7a9bf14f3e3401bedcc090c4f421c67-1333x1333.png?w=320&q=40&fit=max&auto=format ",
    price: "$45",
    punctuation: "&starf;&starf;&starf;&starf;&starf;",
  },
  {
    name: "King Sandwich",
    description: "Made with the finest chicken available in the supermarket. ",
    image:
      "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/f9f27ec1e3dcf6a8f5078faaff8f9eba4f8b2796-1333x1333.png?w=320&q=40&fit=max&auto=format",

    price: "$45",
    punctuation: "&starf;&starf;&starf;&starf;&starf;",
  },
  {
    name: "Spicy King Sandwich",
    description: "This is a simple hamburg with fresh ingredients",
    image:
      " https://cdn.sanity.io/images/czqk28jt/prod_bk_us/a2f3e9d7c8aa2d142714abb32e0446a2935cee24-1333x1333.png?w=320&q=40&fit=max&auto=format",
    price: "$45",
    punctuation: "&starf;&starf;&starf;&starf;&starf;",
  },
];

//Create burgers
class CreateBurger {
  constructor(name, description, image, price, punctuation) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
    this.punctuation = punctuation;
  }
}

// Showing the burgers in the layout
const showBurgers = () => {
  listOfBurgers.forEach((burger) => {
    const stars = () => {
      return Math.floor(burger.punctuation);
    };

    newBurger = `
      <div class="burger-container" >
        <div>
          <img src="${burger.image}" alt="A burger picture"
            class="burger-image"
          >
        </div>
        <div class="px-2 rounded-lg md:rounded-l-none">
          <h2 class="burger-name">${burger.name} </h2>
          <p class=" burger-description">${burger.description}</p>
          <div class=" burger-price">${burger.price}</div>
          <div class=" burger-punctuation">${burger.punctuation}</div>
        </div>
      </div>

    `;
    burgerGridContainer.innerHTML += newBurger;
  });
};

// Creating a new burger
const createNewBurger = (e) => {
  e.preventDefault();
  const formName = document.querySelector("#form-name"),
    formBurgerName = document.querySelector("#form-burger-name"),
    formBurgerPrice = document.querySelector("#form-burger-price"),
    formBurgerDescription = document.querySelector("#form-burger-description");

  const burger = new CreateBurger(
    formName.value,
    formBurgerName.value,
    formBurgerDescription.value,
    formBurgerPrice.value
  );
  listOfBurgers.unshift(burger);
  showBurgers();
};

// Modal section
const openModal = () => {
  modalContainer.classList.remove("hidden");
};

const closeModal = () => {
  modalContainer.classList.add("hidden");
};

addBurgerButton.addEventListener("click", openModal);
buttonSend.addEventListener("click", closeModal);
buttonSend.addEventListener("click", createNewBurger);
// Launching the functions

// showBurgers();
