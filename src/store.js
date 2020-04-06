import { createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import reducer from './reducer';

export const middlewares = [ReduxThunk];


export default createStore(reducer, applyMiddleware(...middlewares));