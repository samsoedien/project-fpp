import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Card,
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
  center: {
    // display: 'flex',
    // justifyContent: 'center',
    display: 'block',
  },
});

const ProfileCard = ({ user, profile, classes }) => {
  return (
    <div className={classes.root}>
      <Container className={classes.center}>
        <Typography className={classes.profileCompany}>Bij Robert</Typography>
        <Avatar src={profile.user.avatar} className={classes.profileAvatar} />
        <Typography component={Link} to={`/profiles/${profile.handle}`} color="primary" className={classes.profileName}>profile.user.name}</Typography>
        <Typography variant="caption" className={classes.profileProfession}>Pastry Chef</Typography>
      </Container>
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
