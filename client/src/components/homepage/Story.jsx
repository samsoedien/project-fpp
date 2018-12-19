import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Button,
} from '@material-ui/core';

const styles = theme => ({
  heading: {
    textAlign: 'center',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '.2rem',
  },
  typography: {
    textAlign: 'center',
  },
  storyButton: {
    margin: '0 auto',
  },
});

const Story = ({ classes }) => (
  <div className="homepage">
    <Grid container justify="center">
      <Grid item xs={8}>
        <Grid container justify="center">
          <Grid item xs={6}>
            <div className={classes.storyImage} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" className={classes.typography}>At pasthrees we strive to empower the pastry craftmanship by providing new opportunities</Typography>
            <Typography variant="caption" className={classes.heading}>What are Pasthrees?</Typography>
            <Typography variant="body1" className={classes.typography}>Pasthrees are chocolate shapes made with food printing technology. A pasthree is highly cutomisable and can be used as a building block in your dish creation process. In our catalogues a broad variety of Pasthrees can be found created by us and the community. Pasthrees can be used in way intended by the pastry chef, shapes can be used as foundation, decoration or .. </Typography>
            <Typography variant="body1" className={classes.typography}> We as food lovers understand in wanting to deliver the best experiences to your customers, building personal relations and improve your business. </Typography>
            <Button component={Link} to="/recipes" variant="contained" color="primary" className={classes.storyButton}>Visit Catalogue</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
);

Story.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Story);
