import { updateDOM, showRecipes, getRandomCuisine } from './recipes.js';

// DYNAMICALLY UPDATE DOM & POPULATE RECIPE LIST
const randomCuisine = getRandomCuisine();
showRecipes(`https://api.edamam.com/api/recipes/v2?cuisineType=${randomCuisine}&type=public&app_id=73857a73&app_key=3728694996ee6dacc502eff2391f439c`)
  .then((recipeList) => {
    updateDOM(recipeList);
    const cards = document.querySelectorAll('.td-item');
    cards.forEach((card, index) => {
      card.addEventListener('click', (event) => {
        const modal = document.getElementById('modal');
        const modalContent = document.querySelector('.modal-content');
        const recipe = recipeList[index].recipe;
        const label = recipe.label;
        const image = recipe.images.SMALL;
        let html = `
          <span class="close">&times;</span>
          <h2 class="">${label}</h2>
          <img src='${image.url} alt="${label}" width="${image.width} height="${image.height}">
        `;
        modalContent.innerHTML = html;
        modal.style.display = "block";

        const closeModal = document.querySelector('.close');
        closeModal.onclick = () => {
          modal.style.display = 'none';
        };
      });
    });
  });

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

