import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
} from '@material-ui/core';

import IMG_URL from '../../assets/img/foodprinted_sidedish.jpg';

const styles = theme => ({
  root: {
    margin: '12px 0',
    minWidth: '200px',
  },
  panelBackground: {
    minHeight: '100%',
    minWidth: '100%',
    backgroundSize: 'cover',
  },
  profileActionText: {
    padding: '18px 0',
    textAlign: 'center',
    fontWeight: 500,
  },
  profileActionButton: {
    marginBottom: '12px',
    float: 'right',
  },
});

const RecipeCreateBanner = ({
  url,
  buttonLabel,
  actionImage,
  classes,
}) => {
  return (
    <Grid item xs={10} sm={6} md={4}>
      <div className={classes.root}>
        <Card>
          <CardActionArea component={Link} to={url}>
            <Grid container>
              <Grid item xs={4}>
                <div style={{ backgroundImage: `url(${actionImage})` }} className={classes.panelBackground} />
              </Grid>
              <Grid item xs={8}>
                <Typography className={classes.profileActionText} variant="subtitle1" color="primary">{buttonLabel}</Typography>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      </div >
    </Grid>
  );
};

RecipeCreateBanner.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(RecipeCreateBanner);
