import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  Input,
  Button,
} from '@material-ui/core';
import { CloudUpload as CloudUploadIcon } from '@material-ui/icons';

const styles = theme => ({
  blogFormCard: {
    margin: '24px 0',
  },
  blogFormInput: {
    margin: '12px 0',
  },
  blogFormButton: {
    float: 'right',
    margin: '12px 0',
  },
});

const BlogForm = ({
  headline,
  article,
  image,
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
    <div className="post-form">
      <Grid container justify="center">
        <Grid item md={8}>
          <Card className={classes.blogFormCard}>
            <CardContent>
              <Typography variant="h3">Write a Blog</Typography>
              <form onSubmit={onSubmit} noValidate>
                <TextField
                  className={classes.blogFormInput}
                  variant="outlined"
                  fullWidth
                  label="Headline"
                  type="text"
                  name="headline"
                  value={headline}
                  onChange={onChange}
                  error={errors.headline}
                  helperText={errors ? errors.headline : ''}
                />
                <TextField
                  className={classes.blogFormInput}
                  variant="outlined"
                  multiline
                  rows="4"
                  fullWidth
                  label="Article"
                  type="text"
                  name="article"
                  value={article}
                  onChange={onChange}
                  error={errors.article}
                  helperText={errors ? errors.article : ''}
                />

                <Button
                  variant="outlined"
                  color="primary"
                  component="label"
                  label="My Label"
                  className={classes.blogUploadButton}
                >
                  <Input type="file" name="image" onChange={onChange} className={classes.blogFileInput} />
                  {'Upload'}
                  <CloudUploadIcon className={classes.blogFileButton} />
                </Button>
                <Button variant="contained" color="primary" type="submit" value="Submit" className={classes.blogFormButton}>Post Blog</Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

BlogForm.propTypes = {
  headline: PropTypes.string.isRequired,
  article: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    article: PropTypes.string.isRequired,
  }).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line

};

export default withStyles(styles)(BlogForm);
