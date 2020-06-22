import React, { Component } from 'react'
import './../index.scss';
import { connect } from 'react-redux';
import { fetchLatestNews } from './../actions/displayNews';
import PropTypes from 'prop-types';
import Article from './Article';

export class News extends Component {
    componentDidMount(){
        this.props.onFetchNews(this.props.country, this.props.category);
    }

    render(){
        let latest = this.props.news.map((data) =>  <a href={data['url']} key={data['url']}><Article data={data}  /></a> );
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
      news: state.news.news,
      country: state.news.country,
      category: state.news.category
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onFetchNews : (country, category) => {
        dispatch(fetchLatestNews(country, category))
      }
    }
  } 
  
  News.propTypes = {
    news: PropTypes.array.isRequired,
    onFetchNews: PropTypes.func
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(News);