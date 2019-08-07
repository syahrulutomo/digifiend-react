import {API_KEY} from './../APIkey';

export const FETCHING_HOME = 'FETCHING_HOME';
export const RECEIVED_HOME = 'RECEIVED_HOME';

const fetchHome = () => {
  return {
      type: FETCHING_HOME
  }
}

const receivedHome = (data) => {
    return {
        type: RECEIVED_HOME,
        payload: data
    }
}

export const fetchNews = (country) => {
  return function(dispatch) {

    dispatch(fetchHome());

    fetch('https://newsapi.org/v2/top-headlines?country='+country+'&apiKey='+API_KEY)
    .then( res => res.json() )
    .then( data => {
      const results = data['articles'];
      dispatch(receivedHome(results)); 
    });

  }
}
