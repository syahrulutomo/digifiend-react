import React, { Component } from 'react'
import './../index.scss';
import { connect } from 'react-redux';
import { fetchHome } from './../actions/displayHome';
import PropTypes from 'prop-types';
import Article from './Article';

export class Home extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.onFetchNews(this.props.country);
    }

    render(){
        let latest = this.props.headlines.filter(data => data['urlToImage'] !== '').map((data) =>  <a href={data['url']} key={data['url']}><Article data={data}  /></a> );
        
        return (
          <section className="latest">
                <h2 className="latest__header">Latest News</h2>
                {latest}
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      headlines: state.news.headlines,
      country: state.news.country
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onFetchNews : (country) => {
        dispatch(fetchHome(country))
      }
    }
  } 
  
  Home.propTypes = {
    headlines: PropTypes.array.isRequired,
    onFetchNews: PropTypes.func
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Home);