import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';

const styles = theme => ({
  ingredientFormInput: {
    marginBottom: '24px',
    width: '100%',
  },
  ingredientFormButton: {
    float: 'right',
  },
});

const IngredientForm = ({
  name,
  errors,
  onChangeCallback,
  onSubmitCallback,
  classes,
}) => {
  const onChange = e => {
    onChangeCallback(e);
  };

  const onSubmit = e => {
    e.preventDefault();
    onSubmitCallback();
  };

  return (
    <div className="ingredient-form">
      <Grid container justify="center">
        <Grid item xs="8">
          <Typography variant="h2">Create a recipe</Typography>
          <Typography variant="paragraph">
            Add some information to start creating your custom food printing
            dish.
            </Typography>
          <form onSubmit={onSubmit} noValidate autoComplete="off">
            <TextField
              id="mui-theme-provider-outlined-input"
              className={classes.ingredientFormInput}
              variant="outlined"
              label="Ingredient"
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              error={errors.name}
              helperText={errors ? errors.name : ''}
            />
            <Button type="submit" value="Submit" className={classes.ingredientFormButton}>Submit</Button>
          </form>
          <Button component={Link} to="/add-nutritions">Add Nutritions</Button>

        </Grid>
      </Grid>
    </div>
  );
};

IngredientForm.propTypes = {
  name: PropTypes.string.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IngredientForm);
