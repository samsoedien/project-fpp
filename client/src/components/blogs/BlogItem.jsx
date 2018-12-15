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
  CardMedia,
  CardActions,
  CardActionArea,
  Avatar,
  Button,
} from '@material-ui/core';

const styles = theme => ({
  blogCard: {
    margin: '20px 60px',
    height: '600px',
    width: '320px',
  },
  blogCardHeader: {
    margin: '6px 0',
    height: '80px',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  blogCardMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  blogCardContent: {
    overflow: 'hidden',
    textAlign: 'center',
    height: '200px',
    padding: '12px 20px',
  },
  blogCardActions: {
    // display: 'flex',
    // justifyContent: 'center',
  },
  blogAvatar: {
    height: 60,
    width: 60,
  },
  blogAuthor: {
    textAlign: 'center',
  },
});

const BlogItem = ({ blog, classes }) => (
  <Grid item>
    <div className="blog-item">
      <Card className={classes.blogCard} raised>
        <CardHeader
          title={blog.headline}
          subheader={blog.user.moderator ? 'Editor\'s Post' : null}
          className={classes.blogCardHeader}
        />
        <CardActionArea component={Link} to={`/blogs/${blog._id}`}>
          <CardMedia
            image={blog.image}
            title="blog banner image"
            className={classes.blogCardMedia}
          />
        </CardActionArea>
        <CardContent className={classes.blogCardContent}>
          <Grid container justify="space-evenly" alignItems="center">
            <Grid item>
              <Avatar src={`/${blog.user.image}`} className={classes.blogAvatar} />
            </Grid>
            <Grid item>
              <Typography component={Link} to={`/profiles/${blog.user.name}`} variant="" color="primary" className={classes.blogAuthor}>{blog.user.name}</Typography>
            </Grid>
          </Grid>
          <Typography variant="paragraph">{blog.article}</Typography>
          <CardActions className={classes.blogCardActions}>
            <Button variant="outlined" color="primary" component={Link} to={`/blogs/${blog._id}`}>Read Full Blog</Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  </Grid>
);

BlogItem.propTypes = {
  blog: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    heading: PropTypes.string.isRequired,
    article: PropTypes.string.isRequired,
  }).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(BlogItem);
