import { createStore } from 'redux';
import rootReducer from '../_redux/rootReducer'; 

const store = createStore(rootReducer);

export default store;