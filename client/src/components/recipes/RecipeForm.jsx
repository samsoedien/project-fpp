import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  TextField,
  Button,
} from '@material-ui/core';

import ModalComponent from '../common/ModalComponent';

const styles = theme => ({
  recipeFormModal: {},
  recipeFormInput: {
    margin: '12px 0',
  },
});

const RecipeForm = ({
  title,
  culinary,
  description,
  directions,
  recipeImage,
  printSettings,
  ingredient,
  onChangeCallback,
  onSubmitCallback,
  errors,
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
    <div className="recipe-form">
      <Container>
        <ModalComponent buttonLabel="Create a Recipe" className={classes.recipeFormModal}>
          <Typography variant="h6" id="modal-title">
            Create a Recipe
          </Typography>
          <Typography variant="subtitle1" id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <form onSubmit={onSubmit} className={classes.registerForm} noValidate autoComplete="off">
            <TextField
              id="mui-theme-provider-outlined-input"
              className={classes.recipeFormInput}
              variant="outlined"
              fullWidth
              label="Title"
              type="text"
              name="title"
              value={title}
              onChange={onChange}
              error={errors.title}
              helperText={errors ? errors.title : ''}
            />
            <TextField
              id="mui-theme-provider-outlined-input"
              className={classes.recipeFormInput}
              variant="outlined"
              fullWidth
              label="Culinary"
              type="text"
              name="culinary"
              value={culinary}
              onChange={onChange}
              error={errors.culinary}
              helperText={errors ? errors.culinary : ''}
            />
            <TextField
              id="mui-theme-provider-outlined-input"
              className={classes.recipeFormInput}
              variant="outlined"
              multiline
              rows="4"
              fullWidth
              label="Description"
              type="text"
              name="description"
              value={description}
              onChange={onChange}
              error={errors.description}
              helperText={errors ? errors.description : ''}
            />
            <Button type="submit" value="Submit" className={classes.recipeFormButton}>Submit</Button>
          </form>
        </ModalComponent>
      </Container>
    </div>
  );
};

RecipeForm.propTypes = {
  title: PropTypes.string.isRequired,
  culinary: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  directions: PropTypes.object.isRequired,
  recipeImage: PropTypes.object.isRequired,
  printSettings: PropTypes.string.isRequired,
  ingredient: PropTypes.object.isRequired,
  modal: PropTypes.bool.isRequired,
  onModalToggleCallback: PropTypes.func.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    title: PropTypes.string,
    culinary: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(RecipeForm);
