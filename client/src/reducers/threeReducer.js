import {
  GET_THREE_SCENE,
  THREE_LOADING,
} from '../actions/types';

const initialState = {
  three: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case THREE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_THREE_SCENE:
      return {
        ...state,
        three: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
