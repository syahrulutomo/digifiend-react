import { FETCHING_HOME, RECEIVED_HOME } from './../actions/displayHome';
import { FETCHING_NEWS, RECEIVED_NEWS } from './../actions/displayNews';
import { FETCHING_SEARCH, RECEIVED_SEARCH } from './../actions/search';
import { SELECT_COUNTRY } from './../actions/selectNation';
import { SELECT_CATEGORY } from './../actions/selectCategory';
import { combineReducers } from 'redux';

const defaultState = {
    isLoading: false,
    headlines: [],
    country: 'id',
    news: [],
    category: 'business',
    search: []
}

const newsReducer = (state = defaultState, action) => {
    switch(action.type){
        case FETCHING_HOME:
            return Object.assign({}, state, { isLoading: true });
        case RECEIVED_HOME:
            return Object.assign({}, state, { isLoading: false, headlines: [...action.payload] });
        case FETCHING_NEWS:
            return Object.assign({}, state, { isLoading: true });
        case RECEIVED_NEWS:
            return Object.assign({}, state, { isLoading: false, news: [...action.payload] });
        case FETCHING_SEARCH:
            return Object.assign({}, state, { isLoading: true });
        case RECEIVED_SEARCH:
            return Object.assign({}, state, { isLoading: false, search: [...action.payload] });
        case SELECT_COUNTRY:
            return Object.assign({}, state, { country: action.payload });
        case SELECT_CATEGORY:
            return Object.assign({}, state, { category: action.payload });
        default: 
            return state;
    }
}

const rootReducer = combineReducers({
    news: newsReducer,
})

export default rootReducer;