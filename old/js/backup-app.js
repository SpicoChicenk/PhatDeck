const defaultDeck = [
  "ace-spade.png",
  "2-spade.png",
  "3-spade.png",
  "4-spade.png",
  "5-spade.png",
  "6-spade.png",
  "7-spade.png",
  "8-spade.png",
  "9-spade.png",
  "10-spade.png",
  "jack-spade.png",
  "queen-spade.png",
  "king-spade.png",
  "ace-clover.png",
  "2-clover.png",
  "3-clover.png",
  "4-clover.png",
  "5-clover.png",
  "6-clover.png",
  "7-clover.png",
  "8-clover.png",
  "9-clover.png",
  "10-clover.png",
  "jack-clover.png",
  "queen-clover.png",
  "king-clover.png",
  "ace-diamonds.png",
  "2-diamonds.png",
  "3-diamonds.png",
  "4-diamonds.png",
  "5-diamonds.png",
  "6-diamonds.png",
  "7-diamonds.png",
  "8-diamonds.png",
  "9-diamonds.png",
  "10-diamonds.png",
  "jack-diamonds.png",
  "queen-diamonds.png",
  "king-diamonds.png",
  "ace-hearts.png",
  "2-hearts.png",
  "3-hearts.png",
  "4-hearts.png",
  "5-hearts.png",
  "6-hearts.png",
  "7-hearts.png",
  "8-hearts.png",
  "9-hearts.png",
  "10-hearts.png",
  "jack-hearts.png",
  "queen-hearts.png",
  "king-hearts.png",
];

// create a copy of deck

let deck = defaultDeck;

// create a random number to be used as an index

// pick a random card from the deck
// remove random card from deck

// each time a card is removed, add to discard deck

// DRAG AND DROP

// select the DOM object on the page that represents the card to be dragged
let dragCard = document.querySelector(".cardDeck");

// create DOM element that you want to use (img)
let parentDeck = document.getElementById("deck");

// attach the dragstart/dragend event handler, when the mouse clicks and when the mouse releases

dragCard.addEventListener("dragstart", dragStartHandler);
dragCard.addEventListener("dragend", dragEndHandler);

// handle the dragstart/dragend event handler

function dragStartHandler(event) {
  event.dataTransfer.setData("text/plain", event.target.class);
  console.log("are you here?");
  setTimeout(() => {
    event.target.classList.add("hide");
  }, 0);
}

function dragEndHandler(event) {
  event.target.classList.remove("hide");
}

// target discard pile
let tiles = document.querySelectorAll(".tile");

// add event listeners dragenter, dragover, dragleave, drop
tiles.forEach((discardPile) => {
  discardPile.addEventListener("dragenter", dragEnterHandler);
  discardPile.addEventListener("dragover", dragOverHandler);
  discardPile.addEventListener("dragleave", dragLeaveHandler);
  discardPile.addEventListener("drop", dropHandler);
});

// handle the event dragenter, dragover, dragleave, drop
function dragEnterHandler(event) {
  event.target.classList.add("drag-over");
  event.preventDefault();
}
function dragOverHandler(event) {
  event.target.classList.add("drag-over");
  event.preventDefault();
}
function dragLeaveHandler(event) {
  event.target.classList.remove("drag-over");
  event.target.classList.remove("discardPile");
}
function dropHandler(event) {
  let myIndex = randomIndex();
  let draggedCard = deck.splice(myIndex, 1);

  // console.log(myIndex);
  let img = `img/${draggedCard}`;

  event.target.classList.remove("drag-over");
  event.target.classList.remove("discardPile");
  // drop takes 3 steps for it to function
  // 1. get the draggable element, remember dataTransfer
  const discard = document.querySelector("#discard");

  // select the DOM object on the page that represents the card to be dragged
  // document.querySelector(".cardDeck");
  draggable = dragCard;

  // 2. add it to the dropped target
  discard.appendChild(dragCard);
  // 3. display the draggable element
  draggable.src = img;
  //  <img src="#" class="discardPile" alt="Discard Pile" />
  draggable.alt = `${draggedCard}`;
  // don't allow the created element to be draggable
  draggable.setAttribute("draggable", false);

  // step 1: target DOM that you want to use as the parent container
  let cardsExists = document.createElement("img");
  // step 2: create DOM element that you want to use (img)
  let deckPile = parentDeck;
  // checks the DOM element's first child node
  let oldCard = deckPile.childNodes[0];
  // if your deck is > 0 then create img DOM add it to deck pile
  if (deck.length > 0) {
    cardsExists.classList.add("cardDeck");
    cardsExists.src = "img/card-back.png";
    cardsExists.alt = "Back of the card pile";
    cardsExists.setAttribute("draggable", true);
    // step 3: put what you create in step 2 into step 1
    console.log(deck.length);
    if (deckPile.hasChildNodes()) {
      oldCard.replaceWith(cardsExists);
      // deckPile.appendChild(cardsExists);
    }
    //  handle when the deck array is 0
  } else if (deck.length == 0 && deckPile.hasChildNodes()) {
    // change deck pile background to none
    cardsExists.src = "#";
    cardsExists.alt = "Empty Deck Pile";
    cardsExists.setAttribute("draggable", false);
    // make child node non draggable
    draggable.setAttribute("draggable", false);
    cardsExists.style.display = "none";
    oldCard.replaceWith(cardsExists);
  } else {
  }
}

function randomIndex() {
  let randomIndex = Math.floor(Math.random() * deck.length);
  return randomIndex;
}
