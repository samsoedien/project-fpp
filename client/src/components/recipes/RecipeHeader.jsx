import React from 'react';

import RecipeFavourite from './RecipeFavourite';

import img from '../../assets/img/foodprinted_sidedish.jpg';

const RecipeHeader = (props) => {
  return (
    <div className="recipe-header">
      <header className="recipe-header">
        <div style={{ backgroundImage: `url(${img})`, height: '620px' }}>
          <RecipeFavourite />
        </div>
      </header>
    </div>
  );
}

export default RecipeHeader;
