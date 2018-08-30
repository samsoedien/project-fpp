import React from 'react';
import img from '../../assets/img/foodprinted_sidedish.jpg';

import RecipeHeader from './RecipeHeader';
import RecipeInfo from './RecipeInfo';
import RecipeDownload from './RecipeDownload';

const RecipeComponent = (props) => {
  return (
    <div className="recipe-component">
      <RecipeHeader img={img} />
      <RecipeInfo recipe={props.recipe} />

      <RecipeDownload />
    </div>
  );
};

export default RecipeComponent;
