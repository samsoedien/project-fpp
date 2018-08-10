import React, { Component } from 'react';
import './RecipeHeader.css';

import RecipeFavourite from './RecipeFavourite';

import IMG from './foodprinted_sidedish.jpg';

class RecipeHeader extends Component {
  render() {
    return (
      <div>
        <header className="recipe-header" style={{ backgroundImage: `url(${IMG})` }}>
          <RecipeFavourite />
        </header>
      </div>
    );
  }
}

export default RecipeHeader;
