import {
  CHANGE_SEARCH_VALUE,
  CHANGE_SORTING,
  SET_PAGE,
  NO_CHANGE,
} from '../actions/actionsDashboard.jsx';

const initialState = {
  value: '',
  sorting: 'relevancy',
  page: 1,
};

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case NO_CHANGE:
      return { ...state, page: action.payload };

    case SET_PAGE:
      return { ...state, page: action.payload };

    case CHANGE_SORTING:
      return { ...state, sorting: action.payload };

    case CHANGE_SEARCH_VALUE:
      return { ...state, value: action.payload };

    default:
      return state;
  }
}
export default dashboardReducer;
