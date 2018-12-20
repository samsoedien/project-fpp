import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Paper,
  Typography,
  Button,
} from '@material-ui/core';

import IMG from '../../assets/img/bake-bakery-baking-8924.jpg';
import IMG_URL from '../../assets/img/foodprinted_sidedish.jpg';

const styles = theme => ({
  root: { padding: '32px 0' },
  heading: {
    padding: '12px 0',
    textAlign: 'center',
    fontWeight: 600,
    // textTransform: 'uppercase',
  },
  typography: {
    textAlign: 'center',
  },
  storySection: {
    height: '320px',
    margin: '24px 0',
  },
  storyButton: {
    marginTop: '12px',
  },
  storyImage: {
    minHeight: '100%',
    minWidth: '100%',
    backgroundImage: `url(${IMG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  },
  storyImageSecond: {
    minHeight: '100%',
    minWidth: '100%',
    backgroundImage: `url(${IMG})`,
    backgroundSize: '100%',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  },
  padding: {
    padding: '24px',
  },
});

const Story = ({ classes }) => (
  <div className={classes.root}>
    <Grid container justify="center">
      <Grid item xs={8}>
        <Grid container justify="center">
          <Paper className={classes.storySection}>
            <Grid container>
              <Grid item xs={6}>
                <div className={classes.storyImage} />
              </Grid>
              <Grid item xs={6} className={classes.padding}>
                <Grid container direction="column" alignContent="space-between">
                  <Typography variant="h4" className={classes.heading}>Who are We?</Typography>
                  <Typography paragraph variant="body1" className={classes.typography}>
                    At Pasthrees we bring innovative tools to the chef's workflow to enrich the culinary kitchen. We strive empower the pastry craftmanship by providing new opportunities in food printing technology.
                    We understand that chefs care care most about wanting to deliver the best experiences to their customers and we believe food printing can be a great asset to any pastry making business.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>

          <Paper className={classes.storySection}>
            <Grid container>
              <Grid item xs={6} className={classes.padding}>
                <Grid container direction="column" alignContent="space-between">
                  <Typography variant="h4" className={classes.heading}>What are Pasthrees?</Typography>
                  <Typography paragraph variant="body1" className={classes.typography}>
                    Pasthrees are chocolate shapes made with food printing technology.
                    A pasthree is highly customisable and can be used as a building block in your dish creation process.
                    Explore our broad catalogue of pasthrees and try them out in your workflow.
                  </Typography>
                  <Grid container justify="center">
                    <Button component={Link} to="/recipes" variant="contained" color="primary" className={classes.storyButton}>Visit Catalogue</Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.storyImageSecond} />
              </Grid>
            </Grid>
          </Paper>

        </Grid>
      </Grid>
    </Grid>
  </div>
);

Story.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Story);
