// import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { rootReducer } from '../redux/reducers/index.jsx';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store