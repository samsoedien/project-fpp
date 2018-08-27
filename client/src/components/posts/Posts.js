import React, { Component } from 'react';
import PostForm from './PostForm';
import PostFeed from './PostFeed';
import Spinner from '../common/Spinner';

const Posts = (props) => {
  let postContent;
  if (props.posts === null || props.loading) {
    postContent = <Spinner />;
  } else {
    postContent = <PostFeed posts={props.posts} />;
  }

  return (
    <div className="feed">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <PostForm />
            {postContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
