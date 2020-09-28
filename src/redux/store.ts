/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/camelcase */
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import UserReducer from './reducer';

interface Decoded {
  roles: any;
}

const rootReducer = combineReducers({
  user: UserReducer,
});

// rehydratate -- with cookies or other method
const initialState = {};

const enhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, initialState, enhancer);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
