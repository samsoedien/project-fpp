import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  // TextField,
  // Button,
} from '@material-ui/core';
// import {
//   Share as ShareIcon,
// } from '@material-ui/icons';

import IMG from '../../assets/img/pastry-banner.jpg';

const styles = theme => ({
  root: {
    position: 'fixed',
    bottom: '0',
    height: '320px',
    width: '100%',
    zIndex: '-1',
    // backgroundColor: '#264348',
    color: theme.palette.common.white,
    padding: '40px 0',
    backgroundImage: `url(${IMG})`,
    backgroundSize: '100%',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  },
  overlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.6)',
    // backgroundImage: 'linear-gradient(to bottom right, rgba(0, 0, 0, 1), rgba(0, 0, 0, .9)',
  },
  footerList: {
    zIndex: '100',
  },
  footerListItem: {
    fontFamily: 'lato',
    fontWeight: '100',
    letterspacing: '.6rem',
    color: theme.palette.common.white,
  },
  footerForm: {
  },
  footerFormInput: {
  },
  footerFormInputLabel: {
  },
  footerFormButton: {},
  footerCopyright: {
    textAlign: 'center',
    padding: '24px 0',
  },

  cssLabel: {
    color: theme.palette.common.white,
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `${theme.palette.common.white} !important`,
    },
  },
  cssFocused: {
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: `${theme.palette.common.white} !important`,
  },
});

const Footer = ({
  email,
  onChangeCallback,
  onSubmitCallback,
  errors,
  classes,
}) => {
  // const onChange = e => {
  //   onChangeCallback(e);
  // };

  // const onSubmit = e => {
  //   e.preventDefault();
  //   onSubmitCallback();
  // };

  return (
    <div className="footer">
      <footer className={classes.root}>
        <div className={classes.overlay} />
        <Grid container justify="center">
          <Grid item xs={4} md={2}>
            <List dense component="nav" className={classes.footerList}>
              <ListItem component={Link} to="/about-us" button>
                <ListItemText
                  primary={<Typography variant="body2" type="body2" className={classes.footerListItem}>About us</Typography>}
                />
              </ListItem>
              <ListItem component={Link} to="/press" button>
                <ListItemText
                  primary={<Typography variant="body2" type="body2" className={classes.footerListItem}>Press</Typography>}
                />
              </ListItem>
              <ListItem component={Link} to="/follow-us" button>
                <ListItemText
                  primary={<Typography variant="body2" type="body2" className={classes.footerListItem}>Follow us</Typography>}
                />
              </ListItem>
              <ListItem component={Link} to="/contact" button>
                <ListItemText
                  primary={<Typography variant="body2" type="body2" className={classes.footerListItem}>Contact</Typography>}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={4} md={2}>
            <List dense component="nav">
              <ListItem component={Link} to="/terms-of-service" button>
                <ListItemText
                  primary={<Typography variant="body2" type="body2" className={classes.footerListItem}>Terms</Typography>}
                />
              </ListItem>
              <ListItem component={Link} to="/privacy-policy" button>
                <ListItemText
                  primary={<Typography variant="body2" type="body2" className={classes.footerListItem}>Privacy</Typography>}
                />
              </ListItem>
              <ListItem component={Link} to="/cookies" button>
                <ListItemText
                  primary={<Typography variant="body2" type="body2" className={classes.footerListItem}>Cookies</Typography>}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={4} md={8}>
            {/* <form onSubmit={onSubmit} className={classes.footerForm} noValidate autoComplete="off">
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
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              <Button type="submit" value="Submit" className={classes.footerFormButton}>Submit</Button>
            </form> */}
          </Grid>
        </Grid>
        {/* <Grid container justify="center">
          <div className={classes.socialMediaLinks}>
            <ShareIcon />
          </div>
          <Typography className={classes.footerCopyright}>
            Copyright &copy;
              {' '}
            {new Date().getFullYear()}
            {' Samsoedien'}
          </Typography>
        </Grid> */}
      </footer>
    </div >
  );
};

Footer.propTypes = {
  email: PropTypes.string.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Footer);
