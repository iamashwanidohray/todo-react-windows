import {VISIBILITY_FILTERS} from '../constants/visibilityFilters';
import { SET_FILTER } from '../actionTypes/actionTypes';

const intialState = VISIBILITY_FILTERS.ALL;

const visibilityFilters = (state = intialState, action) => {
    // console.log("action",action);
    if(action.type === SET_FILTER){
        return VISIBILITY_FILTERS[action.payload.filter];
    }
    return state;
}

export default visibilityFilters;
