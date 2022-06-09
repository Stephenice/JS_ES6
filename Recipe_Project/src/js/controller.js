import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long! Timeout after ${s} second`));
//     }, s * 1000);
//   });
// };

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
// spinner

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
    console.log(error);
  }
};

//link hashachange
['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
