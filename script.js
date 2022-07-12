const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Brogues",
    price: 195,
    colors: [
      {
        code: "brown",
        img: "./img/brogues.png",
      },
      {
        code: "black",
        img: "./img/brogues2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 345,
    colors: [
      {
        code: "red",
        img: "./img/air jodans.png",
      },
      {
        code: "blue",
        img: "./img/air jordans2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Fila",
    price: 129.87,
    colors: [
      {
        code: "silver",
        img: "./img/fila.png",
      },
      {
        code: "gold",
        img: "./img/fila2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Oxford",
    price: 255.37,
    colors: [
      {
        code: "black",
        img: "./img/oxford.png",
      },
      {
        code: "chocolate",
        img: "./img/oxford2.png",
      },
    ],
  },
  {
    id: 5,
    title: "New Balance",
    price: 182.5,
    colors: [
      {
        code: "white",
        img: "./img/new balance.png",
      },
      {
        code: "orange",
        img: "./img/new balance2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "€" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
