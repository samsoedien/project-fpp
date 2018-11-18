import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';

const PostItem = ({
  post,
  auth,
  showActions,
  onDeleteCallback,
  onLikeCallback,
  onUnlikeCallback
}) => {
  const onDelete = id => {
    onDeleteCallback(id);
  };

  const onLikeClick = id => {
    onLikeCallback(id);
  };

  const onUnlikeClick = id => {
    onUnlikeCallback(id);
  };

  return (
    <div className="card card-body mb-3">
      <Row>
        <Col md="2">
          <a href="profile.html">
            <img
              className="rounded-circle d-none d-md-block"
              src={post.avatar}
              alt=""
              style={{ width: '80px', height: '80px' }}
            />
          </a>
          <br />
          <p className="text-center">{post.name}</p>
        </Col>
        <Col md="10">
          <p className="lead">{post.text}</p>
          {showActions ? (
            <span>
              <Button
                onClick={onLikeClick.bind(this, post._id)}
                type="button"
                className="btn btn-light mr-1"
              >
                <i
                  className={classnames('fas fa-thumbs-up', {
                    'text-info': this.findUserLike(post.likes)
                  })}
                />
                <span className="badge badge-light">{post.likes.length}</span>
              </Button>
              <Button
                onClick={this.onUnlikeClick.bind(this, post._id)}
                type="button"
                className="btn btn-light mr-1"
              >
                <i className="text-secondary fas fa-thumbs-down" />
              </Button>
              <Link to={`/post/${post._id}`} className="btn btn-info mr-1">
                Comments
              </Link>
              {post.user === auth.user.id ? (
                <Button
                  onClick={this.onDeleteClick.bind(this, post._id)}
                  type="button"
                  className="btn btn-danger mr-1"
                >
                  <i className="fas fa-times" />
                </Button>
              ) : null}
            </span>
          ) : null}
        </Col>
      </Row>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike }
)(PostItem);

// TODO: Separate in functional and container components and remove classnames module
// FIXME: started implementing functional but does not work due to onhandler binding. need to look into how this binding works. Also look into showactions..
