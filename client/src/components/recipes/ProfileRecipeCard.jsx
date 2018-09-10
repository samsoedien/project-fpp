import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { deletePost, addLike, removeLike } from '../../actions/postActions';

class ProfileRecipeCard extends Component {
  render() {
    const { recipe, auth } = this.props
    return (
      <div className="profile-recipe-card">
        <div className="card card-body mb-3">
          <div className="row">
            <div className="col-md-2">
              <p className="text-center">{recipe.name}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(ProfileRecipeCard);
