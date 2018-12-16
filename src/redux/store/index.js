import { createStore } from 'redux';
import reducers from './../reducers';
import handleChange from './../handleChange';

export default store = createStore(reducers);

export const unsubscribe = store.subscribe(handleChange);