import axios from 'axios';

import {
  GET_BLOGS,
  GET_BLOG,
  DELETE_BLOG,
  BLOG_LOADING,
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
    .then(res => history.push('/community'))
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

export const favoriteBlog = (id, favoriteData) => dispatch => {
  axios
    .post(`/api/blogs/${id}/favorites`, favoriteData)
    .then(res => dispatch({
      type: GET_BLOG,
      payload: res.data,
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

export const addBlogComment = (id, postData) => dispatch => {
  axios
    .post(`/api/blogs/${id}/posts`, postData)
    .then(res => dispatch({
      type: GET_BLOG,
      payload: res.data,
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

export const deleteBlogComment = (blogId, postId) => dispatch => {
  axios
    .delete(`/api/blogs/${blogId}/posts/${postId}`)
    .then(res => dispatch({
      type: GET_BLOG,
      payload: res.data,
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

export const likeBlogComment = (blogId, postId, likeData) => dispatch => {
  axios
    .post(`/api/blogs/${blogId}/posts/${postId}/likes`, likeData)
    .then(res => dispatch({
      type: GET_BLOG,
      payload: res.data,
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

export const flagBlogComment = (blogId, postId, flagData) => dispatch => {
  axios
    .post(`/api/blogs/${blogId}/posts/${postId}/flags`, flagData)
    .then(res => dispatch({
      type: GET_BLOG,
      payload: res.data,
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};
