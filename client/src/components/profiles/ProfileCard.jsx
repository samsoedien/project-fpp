import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Avatar,
} from '@material-ui/core';

const styles = theme => ({
  root: {
    position: 'relative',
    top: '-140px',
    zIndex: '0',
  },
  profileCompany: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  profileAvatar: {
    margin: '0 auto',
    width: 70,
    height: 70,
  },
  profileName: {
    textAlign: 'center',
    marginTop: '2px 0',
  },
  profileProfession: {
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

const ProfileCard = ({ user, classes }) => {
  return (
    <div className={classes.root}>
      <Grid container direction="column" justify="center">
        {/* <Typography className={classes.profileCompany}>Bij Robert</Typography> */}
        <Link to={`/profiles/${user.name}`}>
          <Avatar src={`/${user.image}`} className={classes.profileAvatar} />
        </Link>
        <Typography component={Link} to={`/profile/${user.name}`} color="primary" className={classes.profileName}>{user.name}</Typography>
        <Typography variant="caption" className={classes.profileProfession}>Pastry Chef</Typography>
      </Grid>
    </div>
  );
};

ProfileCard.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
  }).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(ProfileCard);
