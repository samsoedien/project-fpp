import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  List,
  ListItem,
} from '@material-ui/core';

const styles = theme => ({
  pricingCard: {
    height: '100%',
    textAlign: 'center',
  },
  pricingTitle: {
    textAlign: 'center',
  },
  pricingDescription: {
    margin: '12px 0',
    textAlign: 'center',
  },
  pricingDiscount: {
    color: 'red',
    textDecoration: 'line-through',
  },
  pricingRed: {
    color: 'red',
  },
  pricingCardActions: {
    // display: 'flex',
    // flexDirection: 'column',
  },
  pricingButton: {
    // alignSelf: 'flex-end',
    margin: '0 auto',
  },
  // center: {
  //   display: 'flex',
  //   justifyContent: 'center',
  // },
});

const Pricing = ({ classes }) => (
  <div className="pricing">
    <Grid container direction="row" justify="center" spacing="16">
      <Grid container direction="column">
        <Typography variant="h2" className={classes.pricingTitle}>Choose you plan</Typography>
        <Typography variant="body1" className={classes.pricingDescription}>The plan you choose can be changed at any point in time. Read the terms for additional information.</Typography>
      </Grid>

      <Grid item xs={10} sm={3}>
        <Card className={classes.pricingCard}>
          <CardHeader
            title="Free"
            subheader="Trial Account"
          />
          <CardContent>
            <Typography variant="h4">€0</Typography>
            <Typography variant="body">/ month</Typography>
            <List>
              <ListItem>Basic Features</ListItem>
              <ListItem>Can create up to 5 recipes weekly</ListItem>
              <ListItem>Email Support</ListItem>
              <ListItem>Community Acces</ListItem>
            </List>
          </CardContent>
          <CardActions>
            <Button component={Link} to="/register" variant="outlined" color="primary" className={classes.pricingButton}>Signup for Free</Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={10} sm={3}>
        <Card className={classes.pricingCard}>
          <CardHeader
            title="Premium"
            subheader="Subscription Plan"
          />
          <CardContent>
            <Typography variant="caption" className={classes.pricingRed}>Early Bird Discount</Typography>
            <Typography variant="h4"><span className={classes.pricingDiscount}>€49.99 </span>€34.99</Typography>
            <Typography variant="body">/ month</Typography>
            <List>
              <ListItem>Basic Features</ListItem>
              <ListItem>No Advertisments</ListItem>
              <ListItem>Can create up to 5 recipes weekly</ListItem>
              <ListItem>Email Support</ListItem>
              <ListItem>Community Acces</ListItem>
            </List>
          </CardContent>
          <CardActions>
            <Button component={Link} to="/register" variant="contained" color="primary" className={classes.pricingButton}>Get Started</Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={10} sm={3}>
        <Card className={classes.pricingCard}>
          <CardHeader
            title="Enterprise"
            subheader="Subscription + Food Printer Lease Plan"
          />
          <CardContent>
            <Typography variant="h4">€149.99</Typography>
            <Typography variant="body">/ month</Typography>
            <List>
              <ListItem>Complete Features</ListItem>
              <ListItem>No Advertisements</ListItem>
              <ListItem>3DFP Printer</ListItem>
              <ListItem>Unlimited Storage</ListItem>
              <ListItem>Email Support</ListItem>
              <ListItem>Community Access</ListItem>
            </List>
          </CardContent>
          <CardActions>
            <Button disabled component={Link} to="/register" variant="contained" color="primary" className={classes.pricingButton}>Coming Soon</Button>
          </CardActions>
        </Card>
      </Grid>

    </Grid>

  </div>
);

Pricing.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Pricing);
