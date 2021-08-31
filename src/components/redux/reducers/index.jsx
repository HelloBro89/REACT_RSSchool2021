import { combineReducers } from "redux";
import dashboardReducer from './dashboardReducer.jsx';

export const rootReducer = combineReducers({
    main: dashboardReducer
})

