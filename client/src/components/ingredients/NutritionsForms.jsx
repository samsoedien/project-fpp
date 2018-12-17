import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Input,
  TextField,
  Button,
} from '@material-ui/core';


const styles = theme => ({
  nutritionsFormInput: {
    margin: '12px 0',
  },
  nutritionsFormButton: {
    float: 'right',
    margin: '12px 0',
  },
});

const NutritionsForm = ({
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

            <Table>
              <TableBody>
                <TableRow>
                  <TableCell numeric>Calories</TableCell>
                  <TableCell numeric>
                    <TextField
                      className={classes.nutritionsFormInput}
                      variant="outlined"
                      fullWidth
                      type="text"
                      name="kcal"
                      value={kcal}
                      onChange={onChange}
                      error={errors.kcal}
                      helperText={errors ? errors.kcal : ''}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell numeric>Fats</TableCell>
                  <TableCell numeric><Input /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell numeric>Carbs</TableCell>
                  <TableCell numeric><Input /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell numeric>Protein</TableCell>
                  <TableCell numeric><Input /></TableCell>
                </TableRow>
              </TableBody>
            </Table>


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
