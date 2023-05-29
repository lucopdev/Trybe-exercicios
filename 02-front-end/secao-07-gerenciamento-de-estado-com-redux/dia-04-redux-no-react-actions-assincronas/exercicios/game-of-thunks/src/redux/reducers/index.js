import { combineReducers } from 'redux';

const INITIAL_STATE = {
  isLoading: false,
  data: '',
  error: '',
};
const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'REQUEST':
    return {
      data: '',
      isLoading: true,
      error: '',
    };
  case 'SEARCH_NAME':
    return {
      data: action.payload,
      isLoading: false,
      error: '',
    };
  case 'FETCH_ERROR':
    return {
      isLoading: false,
      data: '',
      error: action.error,
    };
  default:
    return state;
  }
};
const rootReducer = combineReducers({
  chave1: searchReducer,
});
export default rootReducer;
