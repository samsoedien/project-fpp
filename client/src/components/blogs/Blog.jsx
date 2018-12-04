import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Paper,
  Avatar,
} from '@material-ui/core';

import Loader from '../common/Loader';

const styles = theme => ({
});

const Blog = ({ blog, isFavourited, loading, classes }) => {
  let blogContent;
  if (blog === null || loading) {
    blogContent = <Loader />;
  } else {
    blogContent = (
      <div>
        <Container>
          <article>
            <Typography variant="headline">{blog.heading}</Typography>
            <Avatar src={blog.user.avatar} />
            <Typography>{blog.user.name}</Typography>
            <section className={classes.blogSection}>
              <Container>
                <Row>
                  <Col lg="8" md="9" sm="10" xs="11" className="m-auto">
                    <Typography>{blog.article}</Typography>
                  </Col>
                </Row>
              </Container>
            </section>
          </article>
        </Container>
      </div>
    );
  }
  return <div className="blog">{blogContent}</div>;
};

Blog.propTypes = {
  blog: PropTypes.shape({}).isRequired,
  isFavourited: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Blog);
