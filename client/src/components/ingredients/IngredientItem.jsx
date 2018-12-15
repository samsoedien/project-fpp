import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from '@material-ui/core';

const styles = theme => ({
  ingredientAvatar: {
    height: 60,
    width: 60,
  },
  ingredientName: {
  },
});

const IngredientItem = ({ ingredient, classes }) => (
  <div className="ingredient-item">
    <ListItem button divider component={Link} to={`/ingredients/${ingredient._id}`}>
      <ListItemAvatar>
        <Avatar src={`/${ingredient.image}`} className={classes.recipeAvatar} />
      </ListItemAvatar>
      <ListItemText primary={ingredient.name} />
    </ListItem>
  </div>
);

IngredientItem.propTypes = {
  ingredient: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(IngredientItem);
