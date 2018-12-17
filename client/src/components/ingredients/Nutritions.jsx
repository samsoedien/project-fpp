import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from  'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Toolbar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Switch,
} from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 320,
  },
  tableCellRecipeTitle: {
    textTransform: 'capitalize',
  }
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class Nutritions extends Component {
  state = {
    volume: 200,
    checked: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { recipe, classes } = this.props;
    const { checked } = this.state;
    return (
      <Paper className={classes.root} >
        <Table className={classes.table}>
          <TableHead>
            <Toolbar>
              <Grid container justify="space-evenly" alignItems="center" wrap="nowrap">
                <Grid item>
                  <Typography variant="h5">Nutritions</Typography>
                </Grid>
                <Grid item>
                  <Switch
                    checked={checked}
                    onChange={this.handleChange('checked')}
                    value="checkedA"
                    color="primary"
                  />
                  <Typography variant="">Portion</Typography>
                </Grid>
              </Grid>



            </Toolbar>
            <TableRow>
              <TableCell className={classes.tableCellRecipeTitle}>{`${recipe.title} (${checked ? 'per portion' : 'per 100 gram'})`}</TableCell>
              <TableCell numeric>Calories</TableCell>
              <TableCell numeric>Fat (g)</TableCell>
              <TableCell numeric>Carbs (g)</TableCell>
              <TableCell numeric>Protein (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell numeric>{row.calories}</TableCell>
                  <TableCell numeric>{row.fat}</TableCell>
                  <TableCell numeric>{row.carbs}</TableCell>
                  <TableCell numeric>{row.protein}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          {/* table nutrition test */}
          {/* <TableBody>
            {recipe.ingredients.map(ingredient => {
              return (
                <TableRow key={ingredient._id}>
                  <TableCell component="th" scope="nutrition">
                    {ingredient.name}
                  </TableCell>
                  <TableCell numeric>{checked ? (ingredient.nutritions.calories * volume) : ingredient.nutritions.calories}</TableCell>
                  <TableCell numeric>{ingredient.nutritions.fat}</TableCell>
                  <TableCell numeric>{ingredient.nutritions.carbs}</TableCell>
                  <TableCell numeric>{ingredient.nutritions.protein}</TableCell>
                </TableRow>
              );
            })}
          </TableBody> */}

        </Table>
      </Paper>
    );
  };
}

Nutritions.propTypes = {
  recipe: PropTypes.shape({}).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Nutritions);
