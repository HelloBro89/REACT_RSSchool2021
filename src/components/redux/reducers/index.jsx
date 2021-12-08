import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer.jsx';
import articlesReducer from './articlesReducer.jsx';

export const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  articles: articlesReducer,
});
