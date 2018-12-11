import axios from 'axios';

import {
  GET_BLOGS,
  GET_BLOG,
  BLOG_LOADING,
  DELETE_BLOG,
  GET_ERRORS,
} from '../constants/types';

export const setBlogLoading = () => ({ type: BLOG_LOADING });

export const getBlogs = () => dispatch => {
  dispatch(setBlogLoading());
  axios
    .get('/api/blogs')
    .then(res => dispatch({
      type: GET_BLOGS,
      payload: res.data,
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
      payload: res.data,
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


export const favoriteBlog = (id, favoriteData) => dispatch => {
  axios
    .post(`/api/blogs/${id}/favorites`, favoriteData)
    .then(res => dispatch(getBlog()))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

export const addBlogComment = (id, postData, history) => dispatch => {
  axios
    .post(`/api/blogs/${id}/comments`, postData)
    .then(res => dispatch(getBlog()))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

export const likeBlogComment = (blogId, commentId, likeData) => dispatch => {
  axios
    .post(`/api/blogs/${blogId}/comments/${commentId}/likes`, likeData)
    .then(res => dispatch(getBlog()))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

export const deleteBlog = id => dispatch => {
  axios
    .delete(`/api/blogs/${id}`)
    .then(res => dispatch({
      type: DELETE_BLOG,
      payload: id,
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};
