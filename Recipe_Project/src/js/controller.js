import * as model from './model.js';
import recipeView from './views/recipeView.js';
import SearchView from './views/searchView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime/runtime';

// const recipeContainer = document.querySelector('.recipe');

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    if (!id) return;
    // loading spanner
    recipeView.renderSpinner();
    // renderSpinner(recipeContainer);

    // 1: load recipe
    await model.loadRecipe(id);
    // const { recipe } = model.state;

    // 2) rendering recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
  }
};

// search
const controlSearchResults = async function () {
  try {
    const query = SearchView.getQuery();
    if (!query) return;

    await model.loadSearchResults('pizza');
    console.log(model.state.search.results);
  } catch (error) {
    console.log(error);
  }
};

controlSearchResults();

//id link hashachange
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};

init();
