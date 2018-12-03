import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
} from '@material-ui/core';

const styles = theme => ({
  postFormCard: {
    margin: '24px 0',
  },
  postFormInput: {
    padding: '0 12px',
  },
  postFormButton: {
    float: 'right',
  },
});

const PostForm = ({ text, errors, onChangeCallback, onSubmitCallback, classes }) => {
  const onChange = e => {
    onChangeCallback(e);
  };

  const onSubmit = e => {
    e.preventDefault();
    onSubmitCallback();
  };
  return (
    <div className="post-form">
      <Grid container justify="center">
        <Grid item sm={8}>
          <Card className={classes.postFormCard}>
            <CardHeader className={classes.postFormCardheader} color="primary" title="Comment" />
            <Grid item container direction="column" spacing={24} alignItems="center">
              <CardContent>
                <form onSubmit={onSubmit} noValidate>
                  <TextField
                    id="outlined-multiline-static"
                    className={classes.postFormInput}
                    label="Create a Post"
                    multiline
                    rows="4"
                    fullWidth
                    defaultValue="Comment"
                    margin="normal"
                    variant="outlined"
                    name="text"
                    value={text}
                    onChange={onChange}
                    error={errors.text}
                    helperText={errors ? errors.text : ''}
                  />
                  <Button type="submit" value="Submit" className={classes.postFormButton}>Comment</Button>
                </form>
              </CardContent>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div >
  );
};

PostForm.propTypes = {
  text: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostForm);
