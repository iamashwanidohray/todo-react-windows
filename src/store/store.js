import { createStore, combineReducers } from 'redux';
import todosReducer from './reducers/todos';
import visibilityFiltersReuducer from './reducers/visibilityFilters';

const reducers = combineReducers({
    todosReducer,
    visibilityFiltersReuducer
});

export const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());