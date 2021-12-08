import { RECEIVE_REQ, CLEAR_DATA } from '../actions/actionArticles.jsx';

const initialState = {
  data: [],
};

function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_DATA:
      return { ...state, data: action.payload };

    case RECEIVE_REQ:
      return { ...state, data: action.payload.data.articles };

    default:
      return state;
  }
}
export default articlesReducer;
