import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
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
    textAlign: 'center',
  },
  pricingDiscount: {
    color: 'red',
    textDecoration: 'line-through',
  },
  pricingRed: {
    color: 'red',
  },
  pricingButton: {
    margin: '0 auto',
  },
});

const Pricing = ({ classes }) => (
  <div className="pricing">
    <Container>
      <Typography variant="h2">Choose you plan</Typography>
      <Typography>decription of plan</Typography>

      <Row>
        <Col md="4">
          <Card className={classes.pricingCard}>
            <CardHeader
              title="Free"
              subheader="Trial Account"
            />
            <CardContent>
              <Typography variant="h3">
                €0
                <small>/ mo</small>
              </Typography>
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
        </Col>
        <Col md="4">
          <Card className={classes.pricingCard}>
            <CardHeader
              title="Premium"
              subheader="Subscription Plan"
            />
            <CardContent>
              <Typography variant="caption" className={classes.pricingRed}>Early Bird Discount</Typography>
              <Typography variant="h3">
                <span className={classes.pricingDiscount}>€49.99</span>
                €34.99
                <small>/ mo</small>
              </Typography>
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
        </Col>
        <Col md="4">
          <Card className={classes.pricingCard}>
            <CardHeader
              title="Enterprise"
              subheader="Subscription + Food Printer Lease Plan"
            />
            <CardContent>
              <Typography variant="h3">
                €149.99
                <small>/ mo</small>
              </Typography>
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
        </Col>
      </Row>
    </Container>
  </div>
);

Pricing.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Pricing);
