const getRandomCuisine = () => {
  const cuisineTypes = ['American', 'Asian', 'British', 'Caribbean', 'Central Europe', 'Chinese', 'Eastern Europe', 'French', 'Indian', 'Italian', 'Japanese', 'Kosher', 'Mediterranean', 'Mexican', 'Middle Eastern', 'Nordic', 'South American', 'South East Asian'];
  const randNum = Math.floor(Math.random() * cuisineTypes.length);
  return cuisineTypes[randNum];
};

const updateDOM = (recipeList) => {
  const cardGroupContainer = document.querySelector('#recipes .td-card-group');
  let html = '';
  recipeList.forEach(recipe => {
    const recipeName = recipe.recipe.label;
    const images = recipe.recipe.images;
    const url = recipe.recipe.url;
    html += `
      <li class="td-item">
        <img class="td-icon" loading="lazy" decoding="async"
            src="${images.THUMBNAIL.url}" alt="${recipeName}" width="${images.THUMBNAIL.width}" height="${images.THUMBNAIL.height}">
        <h3 class="td-h3">${recipeName}</h3>
        <p class="td-item-text">
          <a href="${url}" target="_blank">Visit Recipe Website</a>
        </p>
      </li>
    `;
  })
  cardGroupContainer.innerHTML = html;
};

const showRecipes = async (path) => {
  const response = await fetch(path);
  try {
    if (!response.ok) throw new Error('There was an error receiving recipe data.');
    const recipeData = await response.json();
    return recipeData.hits;
  } catch (e) {
    console.log(e);
  }
};

// Exports
export { updateDOM, showRecipes, getRandomCuisine };