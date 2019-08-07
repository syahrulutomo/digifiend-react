import React, { Component } from 'react'
import './../index.scss';
import grey from './../img/grey.jpg';
import { connect } from 'react-redux';
import { fetchNews } from './../actions/displayHome';
import PropTypes from 'prop-types';
import Article from './Article';

export class Home extends Component {
    constructor(props){
        super(props);
        this.imageExists = this.imageExists.bind(this);
    }

    componentDidMount(){
        this.props.onFetchNews(this.props.country);
    }

    componentDidUpdate(){
      this.props.onFetchNews(this.props.country);
    }

    imageExists(image_url){
        let response;  
        fetch(image_url).then(function(res){
          response = res.status;
        })
        
        return response;
    }

    render(){
        let latest = this.props.headlines.map((data) =>  <Article data={data} key={data['url']} /> );

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
        dispatch(fetchNews(country))
      }
    }
  } 
  
  Home.propTypes = {
    headlines: PropTypes.array.isRequired,
    onFetchNews: PropTypes.func
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Home);