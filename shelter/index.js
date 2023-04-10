//burger
const BODY = document.getElementById('body');
const BURGER = document.getElementById('burger');
const LINKS = document.querySelectorAll('a.paragraph-l');
const HEADER__NAVIGATION = document.querySelector('.header__navigation');
const HAMBURGER = document.querySelector('.hamburger');
const navigation__wrapper = document.querySelector('.navigation__wrapper')
const HEADER = document.querySelector('header');

//удаляем активные классы
function deleteHamburger() {
    BODY.classList.remove('body');
    HEADER__NAVIGATION.classList.remove('header__navigation_aktiv');
    HAMBURGER.classList.remove('hamburger_aktiv');
}
//переключатель
BURGER.onclick = function() {
    BODY.classList.toggle('body');
    HEADER__NAVIGATION.classList.toggle('header__navigation_aktiv');
    HAMBURGER.classList.toggle('hamburger_aktiv');
  }

//клик по ссылкам
for (let i = 0; i < LINKS.length; i++) {
    LINKS[i].addEventListener('click', deleteHamburger)
  }

// // клик по затемненной области
// document.onclick = function(e) {
  
//         if ((e.target != HEADER__NAVIGATION) && (e.target != navigation__wrapper)) {
//             // BODY.classList.remove('body');
//             // HEADER__NAVIGATION.classList.remove('header__navigation_aktiv');
//             // HAMBURGER.classList.remove('hamburger_aktiv');
//         }
    
// }

document.addEventListener('click', (e) => {
    const click = e.composedPath().includes(HEADER__NAVIGATION);
    const click_hamburger = e.composedPath().includes(HAMBURGER);
    const click_burger = e.composedPath().includes(BURGER);
    
    if((!click_hamburger) && (!click) && (!click_burger)){
        BODY.classList.remove('body');
             HEADER__NAVIGATION.classList.remove('header__navigation_aktiv');
             HAMBURGER.classList.remove('hamburger_aktiv');
    }
})
    
