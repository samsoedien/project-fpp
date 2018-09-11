import React from 'react';
import './RecipeFavourite.css';

const RecipeFavourite = (props) => {
  const onClickHandler = () => {
    if (!this.state.isFavourited) {
      this.setState({
        isFavourited: true,
      });
      document.getElementById('recipe-fav').classList.add('recipe-fav--is-favourited');
    } else {
      this.setState({
        isFavourited: false,
      });
      document.getElementById('recipe-fav').classList.remove('recipe-fav--is-favourited');
    }
    console.log(this.state.isFavourited);
  }

  return (
    <div className="recipe-favourite">
      <div id="recipe-fav" className="recipe-fav" onClick={onClickHandler} />
    </div>
  );
};

export default RecipeFavourite;
