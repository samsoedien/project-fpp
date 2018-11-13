import axios from 'axios';

import { THREE_LOADING, GET_THREE_SCENE, GET_ERRORS } from '../constants/types';

// Set loading state
export const setThreeLoading = () => {
  return {
    type: THREE_LOADING
  };
};

// Get Three Scene
export const getThreeScene = id => dispatch => {
  dispatch(setThreeLoading());
  axios
    .get(`/api/three/${id}`)
    .then(res =>
      dispatch({
        type: GET_THREE_SCENE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_THREE_SCENE,
        payload: null
      })
    );
};

// Save Three Scene
export const saveThreeScene = (threeData, history) => dispatch => {
  axios
    .post('/api/three', threeData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
