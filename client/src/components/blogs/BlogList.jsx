import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  CardDeck,
} from 'reactstrap';

import Loader from '../common/Loader';
import BlogItem from './BlogItem';

const BlogList = ({ blogs, loading }) => {
  let blogItems;
  if (blogs === null || loading) {
    blogItems = <Loader />;
  } else if (blogs.length > 0) {
    blogItems = blogs.map(blog => (
      <BlogItem key={blog._id} blog={blog} />
    ));
  } else {
    blogItems = <h4>No Blogs found...</h4>;
  }

  return (
    <div className="blog-list">
      <Container>
        <CardDeck>
          {blogItems}
        </CardDeck>
      </Container>
    </div>
  );
};

BlogList.propTypes = {
  blogs: PropTypes.shape({
    blog: PropTypes.object.isRequired,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default BlogList;
