import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './rootreducer';

const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

export default store;
