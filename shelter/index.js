//burger
const BODY = document.getElementById("body");
const BURGER = document.getElementById("burger");
const LINKS = document.querySelectorAll("a.paragraph-l");
const HEADER__NAVIGATION = document.querySelector(".header__navigation");
const HAMBURGER = document.querySelector(".hamburger");
const navigation__wrapper = document.querySelector(".navigation__wrapper")
const HEADER = document.querySelector("header");


//удаляем активные классы
function deleteHamburger() {
    BODY.classList.remove("body");
    HEADER__NAVIGATION.classList.remove("header__navigation_aktiv");
    HAMBURGER.classList.remove("hamburger_aktiv");
}
//переключатель
BURGER.onclick = function() {
    BODY.classList.toggle("body");
    HEADER__NAVIGATION.classList.toggle("header__navigation_aktiv");
    HAMBURGER.classList.toggle("hamburger_aktiv");
  }

//клик по ссылкам
for (let i = 0; i < LINKS.length; i++) {
    LINKS[i].addEventListener("click", deleteHamburger)
  }

  //клик по затемненной
document.addEventListener("click", (e) => {
    const click = e.composedPath().includes(HEADER__NAVIGATION);
    const click_hamburger = e.composedPath().includes(HAMBURGER);
    const click_burger = e.composedPath().includes(BURGER);
    
    if((!click_hamburger) && (!click) && (!click_burger)){
        BODY.classList.remove("body");
             HEADER__NAVIGATION.classList.remove("header__navigation_aktiv");
             HAMBURGER.classList.remove("hamburger_aktiv");
    }
})
    


//Carusel


const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const CAROUSEL = document.querySelector("#carousel");
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");
const ITEM_ACTIVE = document.querySelector("#item-active");
const petsArray = document.querySelectorAll(".slider__item");

//create new card
const createCardTemplate = () => {
  const card = document.createElement("div");
  card.classList.add("slider__item");
  card.id = Math.floor(Math.random() * 7);
  petsArray.forEach((element) => {
    if (element.id == card.id) {
      card.innerHTML = element.innerHTML;
    }
  })
  return card;
}


//letf with blocks buttons
const moveLeft = () => {
  CAROUSEL.classList.add("transition-left");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};
//letf with blocks buttons
const moveRight = () => {
  CAROUSEL.classList.add("transition-right");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

//buttons listeber
BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

//listener animationend
CAROUSEL.addEventListener("animationend", (aninationevent) => {
  let changeItem;

  if(aninationevent.animationName === "move-left") {

    CAROUSEL.classList.remove("transition-left");
    changeItem = ITEM_LEFT;
    ITEM_ACTIVE.innerHTML = ITEM_LEFT.innerHTML;

  } else {
    CAROUSEL.classList.remove("transition-right");
    changeItem = ITEM_RIGHT;
    ITEM_ACTIVE.innerHTML = ITEM_RIGHT.innerHTML;
  }

  changeItem.innerHTML = "";

  for(let i =0; i < 3; i++) {
    const card = createCardTemplate();
    changeItem.appendChild(card);
    // changeItem.forEach((element) => {
    //   if (card.id !== element.id) {
    //     changeItem.appendChild(card);
    //   } 
    // })
  }

  console.log(typeof(changeItem));


  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
})
