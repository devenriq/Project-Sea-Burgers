//lis of burgers
const listOfBurgers = [
  {
    name: "burger",
    description: "This is a simple hamburg with fresh ingredients",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500&q=80 ",
    price: "$45",
    punctuation: "&starf;&starf;&starf;&starf;&starf;",
  },
  {
    name: "burger",
    description: "This is a simple hamburg with fresh ingredients",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500&q=80 ",
    price: "$45",
    punctuation: "&starf;&starf;&starf;&starf;&starf;",
  },
  {
    name: "burger",
    description: "This is a simple hamburg with fresh ingredients",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500&q=80 ",
    price: "$45",
    punctuation: "&starf;&starf;&starf;&starf;&starf;",
  },
  {
    name: "burger",
    description: "This is a simple hamburg with fresh ingredients",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500&q=80 ",
    price: "$45",
    punctuation: "&starf;&starf;&starf;&starf;&starf;",
  },
  {
    name: "burger",
    description: "This is a simple hamburg with fresh ingredients",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500&q=80 ",
    price: "$45",
    punctuation: "&starf;&starf;&starf;&starf;&starf;",
  },
];

//taking the elements in html
const burgerGridContainer = document.querySelector(".burger-grid-container");
const burgerContainer = document.querySelector(".burger-container");
const burgerName = document.querySelector(".burger-name");
const burgerDescription = document.querySelector(".burger-description");
const burgerPrice = document.querySelector(".burger-price");
const burgerPunctuation = document.querySelector("burger-punctuation");

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
  // console.log(newBurger);
});
