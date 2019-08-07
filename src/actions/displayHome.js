import {API_KEY} from './../APIkey';

export const FETCHING_HOME = 'FETCHING_HOME';
export const RECEIVED_HOME = 'RECEIVED_HOME';

const fetchingHome = () => {
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

export const fetchHome = (country) => {
  return function(dispatch) {

    dispatch(fetchingHome());

    fetch('https://newsapi.org/v2/top-headlines?country='+country+'&apiKey='+API_KEY)
    .then( res => res.json() )
    .then( data => {
      const results = data['articles'];
      dispatch(receivedHome(results)); 
    });

  }
}
