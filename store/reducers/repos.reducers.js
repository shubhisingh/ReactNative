import { reposConstants } from '../constants';

const initState = [];

const reposReducers = (state=initState, action) => {
    switch (action.type) {
        case reposConstants.GET:
            // console.log('reducer response',action);
            return action.payload
        default:
            return state;
    }
};

export { reposReducers };