import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  CircularProgress,
} from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';

import IMG from '../../assets/img/foodprinted_sidedish.jpg';

const styles = theme => ({
  equipmentCard: {
    display: 'flex',
    margin: '24px 0',
  },
  equipmentCardContent: {
    flex: '1 0 auto',
  },
  equipmentTitle: {
    textTransform: 'capitalize',
  },
  equipmentCardMedia: {
    width: 200,
  },
  rowContent: {
    alignContent: 'center',
    marginTop: '12px',
  },
});

const Equipment = ({
  equipment,
  printer,
  classes,
}) => {
  let equipmentStatus;
  if (equipment === 'loading') equipmentStatus = <Typography variant="body2">Searching for Printers... </Typography>;
  else if (equipment === 'printing') equipmentStatus = <Typography variant="body2" color="secondary">Currently Printing...</Typography>;
  else if (equipment === 'idle') equipmentStatus = <Typography variant="body2" color="primary">Print Finished / Idle</Typography>;

  return (
    <div className="equipment">
      <Card className={classes.equipmentCard}>
        <CardMedia
          image={IMG}
          title="Live from space album cover"
          className={classes.equipmentCardMedia}
        />
        <CardContent className={classes.equipmentCardContent}>
          <Typography variant="h6" className={classes.equipmentTitle}>{printer}</Typography>
          <Typography variant="caption">Material Chocolate</Typography>
          <Grid container justify="center">
            <Grid xs={2}>
              <Typography variant="body2">Status: </Typography>
              {equipmentStatus}
              {((equipment !== 'idle')) ? <CircularProgress disableShrink color="primary" /> : null}
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <IconButton>
            <DeleteIcon color="secondary" />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

Equipment.propTypes = {
  equipment: PropTypes.string.isRequired,
  printer: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Equipment);
