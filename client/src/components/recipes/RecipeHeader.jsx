import React from 'react';

import RecipeFavourite from './RecipeFavourite';

import img from '../../assets/img/foodprinted_sidedish.jpg';

export default (props) => {
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

//FIXME: Choose if recipe image is inserted using img tags or css styling 
// for header: style={{ backgroundImage: `url(${img})` }}