// Importing elements to work with
import { listOfBurgers } from "./components/DB.js";
import { showBurgers } from "./components/Show-Default.js";
import {
  CreateNewBurger,
  addNewBurger,
  showNewBurgers,
} from "./components/Show-New.js";
import {
  convertTransactionObject,
  saveTransactionObj,
} from "./components/Storage-Management.js";

// taking the elements in html
const listBurgers = document.querySelector("#list-burgers");
const addBurgerButton = document.querySelector("#add-burger-button");
const modalContainer = document.querySelector("#modal-container");
const buttonSend = document.querySelector("#button-send");
const buttonCancel = document.querySelector("#button-cancel");

// Saving the new burger in the DOM
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
