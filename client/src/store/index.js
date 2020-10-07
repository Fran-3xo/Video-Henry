import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { rootReducer } from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const user = localStorage.getItem("user");
const initialState = {
    user : {
        user : JSON.parse(user)
    }
}
const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(
        thunk))
);

export default store;