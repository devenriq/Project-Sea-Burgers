// taking the elements in html
const listBurgers = document.querySelector("#list-burgers");
const addBurgerButton = document.querySelector("#add-burger-button");
const modalContainer = document.querySelector("#modal-container");
const buttonSend = document.querySelector("#button-send");
const buttonCancel = document.querySelector("#button-cancel");

// List of burgers
const listOfBurgers = [
  {
    name: "burger",
    description: "This is a simple burger with fresh ingredients",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500&q=80 ",
    price: 35,
    punctuation: "&starf;&starf;&starf;&starf;&starf;",
  },
  {
    name: "Chicken Sandwich",
    description: "This is a simple burger with fresh ingredients",
    image:
      "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/fc7c2a73e7a9bf14f3e3401bedcc090c4f421c67-1333x1333.png?w=320&q=40&fit=max&auto=format ",
    price: 35,
    punctuation: "&starf;&starf;&starf;&starf;&starf;",
  },
  {
    name: "King Sandwich",
    description: "This is a simple burger with fresh ingredients",
    image:
      "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/f9f27ec1e3dcf6a8f5078faaff8f9eba4f8b2796-1333x1333.png?w=320&q=40&fit=max&auto=format",
    price: 35,
    punctuation: "&starf;&starf;&starf;&starf;&starf;",
  },
  {
    name: "Spicy King Sandwich",
    description: "This is a simple burger with fresh ingredients",
    image:
      " https://cdn.sanity.io/images/czqk28jt/prod_bk_us/a2f3e9d7c8aa2d142714abb32e0446a2935cee24-1333x1333.png?w=320&q=40&fit=max&auto=format",
    price: 35,
    punctuation: "&starf;&starf;&starf;&starf;&starf;",
  },
];

// Showing the burgers in the layout
const showBurgers = () => {
  listOfBurgers.forEach((burger) => {
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
        <div class=" burger-price">$${burger.price}</div>
        <div class=" burger-punctuation">${burger.punctuation}</div>
      </div>
    </div>
  `;
    listBurgers.innerHTML += newBurger;
  });
};

//Create burgers
class CreateNewBurger {
  constructor(userName, name, description, image, price) {
    this.userName = userName;
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
  }
}

// Creating a new burger
const addNewBurger = (e) => {
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
const showNewBurgers = (newBurger) => {
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

//Convert into transaction object
const convertTransactionObject = () => {
  const userName = document.querySelector("#form-name").value,
    name = document.querySelector("#form-burger-name").value,
    price = document.querySelector("#form-burger-price").value,
    description = document.querySelector("#form-burger-description").value,
    image = document.querySelector("#form-burger-image").value;
  return {
    userName,
    name,
    price,
    description,
    image,
  };
};

// Save in localStorage
const saveTransactionObj = (obj) => {
  let transactionArray = JSON.parse(localStorage.getItem("dataBurger")) || [];
  transactionArray.push(convertTransactionObject());
  let returnTransactionArray = JSON.stringify(transactionArray);
  localStorage.setItem("dataBurger", returnTransactionArray);
};

const preserveDom = () => {
  let transactionObjArr = JSON.parse(localStorage.getItem("dataBurger")) || [];
  transactionObjArr.forEach((dataBurger) => {
    showNewBurgers(dataBurger);
  });
};

// Modal section
const openModal = () => {
  modalContainer.classList.remove("hidden");
};

const closeModal = () => {
  modalContainer.classList.add("hidden");
};

// EventListeners

addBurgerButton.addEventListener("click", openModal);
buttonSend.addEventListener("click", closeModal);
buttonCancel.addEventListener("click", closeModal);
buttonSend.addEventListener("click", addNewBurger);
buttonSend.addEventListener("click", convertTransactionObject);
buttonSend.addEventListener("click", saveTransactionObj);
document.addEventListener("DOMContentLoaded", preserveDom);
// Launching the functions

showBurgers();
showBurgers();
showBurgers();
