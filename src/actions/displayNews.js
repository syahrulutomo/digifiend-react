import {API_KEY} from './../APIkey';

export const FETCHING_NEWS = 'FETCHING_NEWS';
export const RECEIVED_NEWS = 'RECEIVED_NEWS';

const fetchNews = () => {
  return {
      type: FETCHING_NEWS
  }
}

const receivedNews = (data) => {
    return {
        type: RECEIVED_NEWS,
        payload: data
    }
}

export const fetchLatestNews = (country,category) => {
  return function(dispatch) {

    dispatch(fetchNews());

    fetch('https://newsapi.org/v2/top-headlines?country='+country+'&category='+category+'&apiKey='+API_KEY)
    .then( res => res.json() )
    .then( data => {
      const results = data['articles'];
      dispatch(receivedNews(results)); 
    });

  }
}
