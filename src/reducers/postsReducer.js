//importing lodash
import _ from 'lodash';

// importing the action types
import { FETCH_POSTS } from '../actions/actions';

export default 
function (state = {}, action){
    switch(action.type){
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}