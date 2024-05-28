// an id, a name and a picture url
const images = [
  {
    name: "fox",
    url: "./assets/fox.jpg",
    "back-cover": "./assets/back.jpg",
    id: 0,
    isFlipped: false,
    isMatched: false,
    value: "ræv",
  },

  {
    name: "dog",
    url: "./assets/dog.jpg",
    "back-cover": "./assets/back.jpg",
    id: 2,
    isFlipped: false,
    isMatched: false,
    value: "hund",
  },
  {
    name: "cat",
    url: "./assets/cat.jpg",
    "back-cover": "./assets/back.jpg",
    id: 3,
    isFlipped: false,
    isMatched: false,
    value: "kat",
  },
  {
    name: "horse",
    url: "./assets/horse.jpg",
    "back-cover": "./assets/back.jpg",
    id: 4,
    isFlipped: false,
    isMatched: false,
    value: "heste",
  },
  {
    name: "bear",
    url: "./assets/bear.jpg",
    "back-cover": "./assets/back.jpg",
    id: 5,
    isFlipped: false,
    isMatched: false,
    value: "bjørn",
  },
  {
    name: "eagle",
    url: "./assets/eagle.jpg",
    "back-cover": "./assets/back.jpg",
    id: 6,
    isFlipped: false,
    isMatched: false,
    value: "ørn",
  },
  {
    name: "giraffe",
    url: "./assets/giraffe.jpg",
    "back-cover": "./assets/back.jpg",
    id: 7,
    isFlipped: false,
    isMatched: false,
    value: "giraf",
  },
];
const animals = ["ræv", "hund", "kat", "hest", "bjørn", "ørn", "giraf"];
//get the grid container
//create a card with a front and back image
//add the card to the grid container

document.addEventListener("DOMContentLoaded", function () {
  const grid = document.getElementById("grid-container");
  function createCard(type, data, imgBackSrc) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    const card = document.createElement("div");
    card.classList.add("card");
    let frontContent;
    if (type === "image") {
      const imgFront = document.createElement("img");
      imgFront.src = data;
      imgFront.classList.add("front");
      frontContent = imgFront;
    } else if (type === "word") {
      const wordFront = document.createElement("div");
      wordFront.classList.add("front");
      wordFront.textContent = data;
      frontContent = wordFront;
    }

    const imgBack = document.createElement("img");
    imgBack.src = imgBackSrc;
    imgBack.classList.add("back");

    card.appendChild(frontContent);
    card.appendChild(imgBack);
    cardContainer.appendChild(card);

    card.addEventListener("click", function () {
      card.classList.toggle("isFlipped");
    });
    return cardContainer;
  }
  //populate the grid with cards

  images.forEach((image) => {
    const card = createCard("image", image.url, image["back-cover"]);

    grid.appendChild(card);
  });
  animals.forEach((animal) => {
    const card = createCard("word", animal, "./assets/back.jpg");
    grid.appendChild(card);
  });
});
