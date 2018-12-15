import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  TextField,
  Button,
  Input,
} from '@material-ui/core';
import { CloudUpload as CloudUploadIcon } from '@material-ui/icons';

import ModalComponent from '../common/ModalComponent';

const styles = theme => ({
  recipeFormModal: {},
  recipeFormInput: {
    margin: '12px 0',
  },
  recipeFormButton: {
    float: 'right',
    marginBottom: '12px',
  },
  recipeUploadButton: {
    width: '100%',
    marginBottom: '12px',
  },
});

const RecipeForm = ({
  title,
  cuisine,
  description,
  directions,
  image,
  settings,
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
      <Grid container justify="center">
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
              label="Cuisine"
              type="text"
              name="cuisine"
              value={cuisine}
              onChange={onChange}
              error={errors.cuisine}
              helperText={errors ? errors.cuisine : ''}
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
            <Button
              id="image-upload"
              variant="outlined"
              color="primary"
              component="label"
              label="My Label"
              className={classes.recipeUploadButton}
            >
              <Input type="file" name="image" onChange={onChange} className={classes.recipeFileInput} />
              {'Upload'}
              <CloudUploadIcon className={classes.recipeFileButton} />
            </Button>
            <Button variant="contained" color="primary" type="submit" value="Submit" className={classes.recipeFormButton}>Submit</Button>
          </form>
        </ModalComponent>
      </Grid>
    </div>
  );
};

RecipeForm.propTypes = {
  title: PropTypes.string.isRequired,
  cuisine: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  directions: PropTypes.shape().isRequired,
  image: PropTypes.string.isRequired,
  settings: PropTypes.arrayOf({}).isRequired,
  ingredient: PropTypes.shape().isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    title: PropTypes.string,
    cuisine: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(RecipeForm);
