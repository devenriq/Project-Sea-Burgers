//Convert into transaction object
export const convertTransactionObject = () => {
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
export const saveTransactionObj = (obj) => {
  let transactionArray = JSON.parse(localStorage.getItem("dataBurger")) || [];
  transactionArray.push(convertTransactionObject());
  let returnTransactionArray = JSON.stringify(transactionArray);
  localStorage.setItem("dataBurger", returnTransactionArray);
};
