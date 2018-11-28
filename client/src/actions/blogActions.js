import axios from 'axios';

import {
  GET_BLOGS,
  GET_BLOG,
  BLOG_LOADING,
  GET_ERRORS,
} from '../constants/types';

export const setBlogLoading = () => {
  return {
    type: BLOG_LOADING,
  }
}

export const getBlogs = () => dispatch => {
  dispatch(setBlogLoading());
  axios
    .get('/api/blogs')
    .then(res => dispatch({
      type: GET_BLOGS,
      payload: res.data.blogs,
    }))
    .catch(err => dispatch({
      type: GET_BLOGS,
      payload: null,
    }));
};

export const getBlog = id => dispatch => {
  dispatch(setBlogLoading());
  axios
    .get(`/api/blogs/${id}`)
    .then(res => dispatch({
      type: GET_BLOG,
      payload: res.data.blog,
    }))
    .catch(err => dispatch({
      type: GET_BLOG,
      payload: null,
    }));
};

export const createBlog = (blogData, history) => dispatch => {
  axios
    .post('/api/blogs', blogData)
    .then(res => history.push('/dashboard'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};