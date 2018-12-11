import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  GridList,
  GridListTile,
} from '@material-ui/core/GridList';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
});

const ImageGridList = ({ recipes, classes }) => {
  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {recipes.map(recipe => (
          <GridListTile recipe key={recipe._id} cols={1}>
            <img src={recipe.image} alt={recipe.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

ImageGridList.propTypes = {
  recipes: PropTypes.shape({
    _id: PropTypes.string, 
    title: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(ImageGridList);
