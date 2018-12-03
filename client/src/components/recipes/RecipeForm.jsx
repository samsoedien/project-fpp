import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Modal,
  TextField,
  Button,
} from '@material-ui/core';

const styles = theme => ({
  recipeformModalButton: { margin: '0 auto' },
});

const RecipeForm = ({
  title,
  culinary,
  description,
  directions,
  recipeImage,
  printSettings,
  ingredient,
  modal,
  onModalToggleCallback,
  onChangeCallback,
  onSubmitCallback,
  errors,
  classes,
}) => {
  const onModalToggle = () => {
    onModalToggleCallback();
  };

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
        <Button variant="contained" color="primary" onClick={onModalToggle} className={classes.recipeformModalButton}>Create a Recipe</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={modal}
          onClose={onModalToggle}
        >
          <div className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              Text in a modal
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <form onSubmit={onSubmit} className={classes.registerForm} noValidate autoComplete="off">
              <TextField
                id="mui-theme-provider-outlined-input"
                className={classes.registerFormInput}
                variant="outlined"
                label="Title"
                type="text"
                name="title"
                value={title}
                onChange={onChange}
              // error={errors.title}
              // helperText={errors ? errors.title : ''}
              />
              <TextField
                id="mui-theme-provider-outlined-input"
                className={classes.registerFormInput}
                variant="outlined"
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
                className={classes.registerFormInput}
                variant="outlined"
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
            <ModalWrapped />
          </div>
        </Modal>
      </Container>
    </div>
  );
};

RecipeForm.propTypes = {
  title: PropTypes.string.isRequired,
  culinary: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  directions: PropTypes.array.isRequired,
  recipeImage: PropTypes.object.isRequired,
  printSettings: PropTypes.string.isRequired,
  ingredient: PropTypes.object.isRequired,
  modal: PropTypes.bool.isRequired,
  onModalToggleCallback: PropTypes.func.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    title: PropTypes.string.isRequired,
    culinary: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  classes: PropTypes.object.isRequired,
};

const ModalWrapped = withStyles(styles)(RecipeForm)

export default ModalWrapped;

// FIXME: modal doesnt work yet 