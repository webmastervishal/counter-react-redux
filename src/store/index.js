import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './../reducers/counterReducer';

const reducers = combineReducers({
    counter: counterReducer
});
const store = createStore(
    reducers, 
    {counter: {count:0} },
    // window.devToolsExtension && window.devToolsExtension(), 
    applyMiddleware(thunk)
);

export default store;