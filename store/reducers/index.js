import { combineReducers } from 'redux';
import { reposReducers } from './repos.reducers';

const rootReducer = combineReducers({
    reposReducers,
});

export default rootReducer;