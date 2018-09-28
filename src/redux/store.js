import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './rootreducer';

export default createStore(rootReducer, {}, applyMiddleware(ReduxThunk));
