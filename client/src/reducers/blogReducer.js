import {
  GET_BLOGS,
  GET_BLOG,
  BLOG_LOADING,
} from '../constants/types';

const initialState = {
  blogs: null,
  blog: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case BLOG_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_BLOGS:
      return {
        ...state,
        blogs: action.payload,
        loading: false,
      };
    case GET_BLOG:
      return {
        ...state,
        blog: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
