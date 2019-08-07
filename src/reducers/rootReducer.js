import { FETCHING_HOME, RECEIVED_HOME } from './../actions/displayHome';
import { SELECT_COUNTRY, selectCountry } from './../actions/selectNation';
import { combineReducers } from 'redux';

const defaultState = {
    isLoading: false,
    headlines: [],
    country: 'id',
}

const newsReducer = (state = defaultState, action) => {
    switch(action.type){
        case FETCHING_HOME:
            return Object.assign({}, state, { isLoading: true });
        case RECEIVED_HOME:
            return Object.assign({}, state, { isLoading: false, headlines: [...action.payload] });
        case SELECT_COUNTRY:
            return Object.assign({}, state, { country: action.payload });
        default: 
            return state;
    }
}

const rootReducer = combineReducers({
    news: newsReducer,
})

export default rootReducer;