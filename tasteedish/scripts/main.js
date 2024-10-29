import { TDhamburgerMenu, menuToggles, scroll } from './menu.js';
import { displayCurrentYear } from './getdates.js';

// HEADER & NAVIGATION
TDhamburgerMenu.addEventListener('click', menuToggles);
document.addEventListener('scroll', scroll);

// CURRENT YEAR IN THE FOOTER
displayCurrentYear();