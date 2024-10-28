
import { TDhamburgerMenu, menuToggles, scroll } from './menu.js';
import { displayCurrentYear } from './getdates.js';
import { showRecipes, getRandomCuisine } from './recipes.js';

// HEADER & NAVIGATION
TDhamburgerMenu.addEventListener('click', menuToggles);
document.addEventListener('scroll', scroll);

// CURRENT YEAR IN THE FOOTER
displayCurrentYear();

// DYNAMICALLY UPDATE DOM & POPULATE RECIPE LIST
showRecipes(`https://api.edamam.com/api/recipes/v2?cuisineType=${getRandomCuisine()}&type=public&app_id=73857a73&app_key=3728694996ee6dacc502eff2391f439c`);