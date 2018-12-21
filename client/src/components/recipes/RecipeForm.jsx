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
  categories,
  specifications,
  description,
  settings,
  printTime,
  dimensions,
  cad,
  cadText,
  image,
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
        <Grid item xs={8}>
          <form onSubmit={onSubmit} className={classes.registerForm} noValidate autoComplete="off">
            <Typography variant="h6" id="modal-title">Create a Recipe</Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <TextField
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
              className={classes.recipeFormInput}
              variant="outlined"
              fullWidth
              label="Category"
              type="text"
              name="categories"
              value={categories}
              onChange={onChange}
              error={errors.categories}
              helperText={errors ? errors.categories : ''}
            />
            <TextField
              className={classes.recipeFormInput}
              variant="outlined"
              fullWidth
              label="Print Time"
              type="text"
              name="printTime"
              value={printTime}
              onChange={onChange}
              error={errors.printTime}
              helperText={errors ? errors.printTime : ''}
            />
            <TextField
              className={classes.recipeFormInput}
              variant="outlined"
              fullWidth
              label="Dimensions"
              type="text"
              name="dimensions"
              value={dimensions}
              onChange={onChange}
              error={errors.dimensions}
              helperText={errors ? errors.dimensions : ''}
            />
            <TextField
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
            <TextField
              className={classes.recipeFormInput}
              variant="outlined"
              fullWidth
              label="Specifications"
              type="text"
              name="specifications"
              value={specifications}
              onChange={onChange}
              error={errors.specifications}
              helperText={errors ? errors.specifications : ''}
            />

            <TextField
              className={classes.recipeFormInput}
              variant="outlined"
              fullWidth
              label="Print Settings"
              type="text"
              name="settings"
              value={settings}
              onChange={onChange}
              error={errors.settings}
              helperText={errors ? errors.settings : ''}
            />
            <TextField
              className={classes.recipeFormInput}
              variant="outlined"
              fullWidth
              label="CAD model Name"
              type="text"
              name="cad"
              value={cad}
              onChange={onChange}
              error={errors.cad}
              helperText={errors ? errors.cad : ''}
            />
            <TextField
              className={classes.recipeFormInput}
              variant="outlined"
              fullWidth
              label="Text Geometry"
              type="text"
              name="cadText"
              value={cadText}
              onChange={onChange}
              error={errors.cadText}
              helperText={errors ? errors.cadText : ''}
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
        </Grid>
      </Grid>
    </div >
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
