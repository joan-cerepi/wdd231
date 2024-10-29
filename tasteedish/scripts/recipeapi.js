import { showRecipes, getRandomCuisine } from './recipes.js';

// DYNAMICALLY UPDATE DOM & POPULATE RECIPE LIST
showRecipes(`https://api.edamam.com/api/recipes/v2?cuisineType=${getRandomCuisine()}&type=public&app_id=73857a73&app_key=3728694996ee6dacc502eff2391f439c`);