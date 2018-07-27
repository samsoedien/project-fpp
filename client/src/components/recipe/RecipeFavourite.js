import React, { Component } from 'react';
import './RecipeFavourite.css';

class RecipeFavourite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFavourited: false,
    };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
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

  render() {
    return (
      <div id="recipe-fav" className="recipe-fav" onClick={this.onClickHandler} />
    );
  }
}

export default RecipeFavourite;
