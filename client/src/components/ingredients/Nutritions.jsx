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
  Tooltip,
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
function createData(name, description, calories, energy, fat, carbs, sugar, protein, salt) {
  id += 1;
  return { id, name, description, calories, energy, fat, carbs, sugar, protein, salt };
}

const rows = [
  createData('Callebaut N811 Pure', 'Cacaomassa, Suiker, Cacaoboter, Emulgator: sojalecithine, Natuurlijk vanille aroma', 546, 2284, 35.9, 46.2, 44, 5, 0.015),
  createData('Callebaut Power 80 Extra Pure', 'cacaomassa 71,0%; suiker 26,0%; magere cacaopoeder 2,0%; emulgator: sojalecithine <1%; natuurlijk vanille aroma <1%', 545, 2340, 44.5, 20.8, 15.9, 10, 0.03),
  createData('Callebaut Pure Sao Thome 70%', 'cacaomassa São Tomé 72,5%; suiker 27,0%; emulgator: sojalecithine <1%; natuurlijk vanille aroma <1%', 544, 2281, 39.4, 31.2, 26.9, 8.5, 0.02),
];

class Nutritions extends Component {
  state = {
    checked: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { recipe, volume, classes } = this.props;
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
              <TableCell numeric>Energy (kJ)</TableCell>
              <TableCell numeric>Fat (g)</TableCell>
              <TableCell numeric>Carbs (g)</TableCell>
              <TableCell numeric>Sugars (g)</TableCell>
              <TableCell numeric>Protein (g)</TableCell>
              <TableCell numeric>Salt (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow key={row.id}>
                  <Tooltip title={row.description} placement="left">
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                  </Tooltip>
                  <TableCell numeric>{checked ? ((Math.round(10 * (row.calories / 100) * (volume / 1000))) / 10) : row.calories}</TableCell>
                  <TableCell numeric>{checked ? ((Math.round(10 * (row.energy / 100) * (volume / 1000))) / 10) : row.energy}</TableCell>
                  <TableCell numeric>{checked ? ((Math.round(10 * (row.fat / 100) * (volume / 1000))) / 10) : row.fat}</TableCell>
                  <TableCell numeric>{checked ? ((Math.round(10 * (row.carbs / 100) * (volume / 1000))) / 10) : row.carbs}</TableCell>
                  <TableCell numeric>{checked ? ((Math.round(10 * (row.sugar / 100) * (volume / 1000))) / 10) : row.sugar}</TableCell>
                  <TableCell numeric>{checked ? ((Math.round(10 * (row.protein / 100) * (volume / 1000))) / 10) : row.protein}</TableCell>
                  <TableCell numeric>{checked ? ((Math.round(10 * (row.salt / 100) * (volume / 1000))) / 10) : row.salt}</TableCell>
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
