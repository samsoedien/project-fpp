import React from 'react';
import img from '../../assets/img/foodprinted_sidedish.jpg';

import RecipeHeader from './RecipeHeader';
//import RecipeInfo from './RecipeInfo';
import RecipeDownload from './RecipeDownload';

const RecipeComponent = (props) => {
  return (
    <div className="recipe-component">
      <RecipeHeader img={img} />

      <img src={img} alt="" className="w-100" />
      <h1 className="page-header text-left text-capitalize">{props.recipe.title}</h1>
      <div className="container">
        <span class="badge  badge-pill badge-primary mr-1 text-lowercase">Tags</span>
        <span class="badge badge-pill badge-primary mr-1 text-lowercase">Second tag</span>
      </div>
      <p className="lead text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore expedita debitis consequatur neque repellendus sit repellat ullam, velit accusantium deleniti eligendi, vero nostrum consequuntur distinctio aperiam sequi quisquam vel blanditiis!</p>

      <RecipeDownload />
    </div>
  );
};

export default RecipeComponent;
