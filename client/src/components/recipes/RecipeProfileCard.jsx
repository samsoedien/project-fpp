import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecipeProfileCard = ({ recipe }) => {
    // let profileCardContent;
    // if (profile === null) {
    //   profileCardContent = <span>This account no longer exists</span>
    // } else {
    //   profileCardContent = <div></div>;
    // }
    return (
      <div className="profile-recipe-card">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card card-body mb-3 text-center">
                <div className="col-6">
                  <img src={recipe.user.avatar} alt={recipe.user.name} className="mx-auto d-block rounded p-2" style={{ width: '75px', height: '75px' }} />
                  <span className="text-primary">{recipe.user.name}</span><br />
                  <span className="">Food Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

RecipeProfileCard.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default RecipeProfileCard;
