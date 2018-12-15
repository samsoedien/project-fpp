import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  TextField,
  Input,
  Button,
} from '@material-ui/core';
import { CloudUpload as CloudUploadIcon } from '@material-ui/icons';


const styles = theme => ({
  ingredientFormInput: {
    margin: '12px 0',
  },
  ingredientFormButton: {
    float: 'right',
    margin: '12px 0',
  },
});

const IngredientForm = ({
  name,
  image,
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
        <Grid item xs={8}>
          <form onSubmit={onSubmit} noValidate autoComplete="off">
            <Typography variant="h3">Add an Ingredient</Typography>
            <Typography variant="paragraph">
              Help by adding more ingredients to the website.
            </Typography>
            <TextField
              className={classes.ingredientFormInput}
              variant="outlined"
              fullWidth
              label="Ingredient"
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              error={errors.name}
              helperText={errors ? errors.name : ''}
            />
            <Button
              variant="outlined"
              color="primary"
              component="label"
              label="My Label"
              className={classes.ingredientUploadButton}
            >
              <Input type="file" name="image" onChange={onChange} className={classes.ingredientFileInput} />
              {'Upload'}
              <CloudUploadIcon className={classes.ingredientFileButton} />
            </Button>

            <Button type="submit" value="Submit" variant="contained" color="primary" className={classes.ingredientFormButton}>Submit</Button>
          </form>
          <Button component={Link} to="/add-nutritions">Add Nutritions</Button>

        </Grid>
      </Grid>
    </div>
  );
};

IngredientForm.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(IngredientForm);
