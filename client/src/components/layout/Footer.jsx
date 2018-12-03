import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
} from '@material-ui/core';
import {
  Share as ShareIcon,
} from '@material-ui/icons';

const styles = theme => ({
  root: {
    position: 'fixed',
    bottom: '0',
    height: '320px',
    width: '100%',
    zIndex: '-1',
    backgroundColor: '#264348',
    color: 'white',
    padding: '40px 0',
  },
  footerList: {
    color: 'white',
  },
  footerFormInput: {},
  footerFormButton: {},
  footerCopyright: {
    textAlign: 'center',
    padding: '24px 0',
  },
});

const Footer = ({
  email,
  onChangeCallback,
  onSubmitCallback,
  errors,
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
    <div className="footer">
      <footer className={classes.root}>
        <Container>
          <Row>
            <Col xs="4" md="2">
              <List dense component="nav" className={classes.footerList}>
                <ListItem button>
                  <ListItemText primary="About us" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Press" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Follow us" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Contact" />
                </ListItem>
              </List>
            </Col>
            <Col xs="4" md="2">
              <List dense component="nav">
                <ListItem button>
                  <ListItemText primary="Terms" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Privacy" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Cookies" />
                </ListItem>
              </List>
            </Col>
            <Col xs="4" md="8">
              <form onSubmit={onSubmit} className={classes.loginForm} noValidate autoComplete="off">
                <Typography>Sign up for the newsletter</Typography>
                <TextField
                  id="mui-theme-provider-outlined-input"
                  className={classes.footerFormInput}
                  variant="outlined"
                  label="Email Address"
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  error={errors.email}
                  helperText={errors ? errors.email : ''}
                />
                <Button type="submit" value="Submit" className={classes.footerFormButton}>Submit</Button>
              </form>
            </Col>
          </Row>
          <Row>
            <div className={classes.socialMediaLinks}>
              <ShareIcon />
            </div>
            <Typography className={classes.footerCopyright}>
              Copyright &copy;
            {' ' + new Date().getFullYear()}
              {' Samsoedien'}
            </Typography>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

Footer.propTypes = {
  email: PropTypes.string.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
