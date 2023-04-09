const BODY = document.getElementById('body');
const BURGER = document.getElementById('burger');
const LINKS = document.querySelectorAll('a.paragraph-l');
const HEADER__NAVIGATION = document.querySelector('.header__navigation');
const HAMBURGER = document.querySelector('.hamburger');

function deleteHamburger() {
    BODY.classList.remove('body');
    HEADER__NAVIGATION.classList.remove('header__navigation_aktiv');
    HAMBURGER.classList.remove('hamburger_aktiv');
}

BURGER.onclick = function() {
    BODY.classList.toggle('body');
    HEADER__NAVIGATION.classList.toggle('header__navigation_aktiv');
    HAMBURGER.classList.toggle('hamburger_aktiv');
  }

for (let i = 0; i < LINKS.length; i++) {
    LINKS[i].addEventListener('click', deleteHamburger)
  }