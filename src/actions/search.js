

import {API_KEY} from './../APIkey';

export const FETCHING_SEARCH = 'FETCHING_SEARCH';
export const RECEIVED_SEARCH = 'RECEIVED_SEARCH';

const fetchSearch = () => {
  return {
      type: FETCHING_SEARCH
  }
}

const receivedSearch = (data) => {
    return {
        type: RECEIVED_SEARCH,
        payload: data
    }
}

export const fetchSearchNews = (query) => {
  return function(dispatch) {

    dispatch(fetchSearch());

    fetch('https://newsapi.org/v2/everything?qInTitle='+query+'&apiKey='+API_KEY)
    .then( res => res.json() )
    .then( data => {
      const results = data['articles'];
      dispatch(receivedSearch(results)); 
    });

  }
}
