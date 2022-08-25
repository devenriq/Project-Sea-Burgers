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
  /*
  defino un array. Si hay información en el objeto del local storage "dataBurger", lo parsea (lo
  convierte en código de JS). Si no, crea un array vacío que será manipulado más adelante
  */
  let transactionArray = JSON.parse(localStorage.getItem("dataBurger")) || [];

  /*
  Se añaden los datos necesarios para construir el objeto que se quiere renderizar mediante un
  .push (considerar que es un método para arrays)
  */
  transactionArray.push(convertTransactionObject());

  /*
  Se convierte el array inicial a formato JSON para que pueda ser almacenado en el storage. Se hace
  usando .stringify
  */
  let returnTransactionArray = JSON.stringify(transactionArray);

  /*
  Se captura el valor guardado en el paso anterior y se almacena en el local storage. Para mostrarlo,
  en el DOM hace falta una función que tenga ese propósito
  */
  localStorage.setItem("dataBurger", returnTransactionArray);
};
