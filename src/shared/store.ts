// store.ts
import { createStore } from 'redux';
import financeReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    financeReducer,
    composeWithDevTools() 
  );;

export default store;