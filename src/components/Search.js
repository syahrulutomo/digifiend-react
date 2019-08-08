import React, { Component } from 'react'
import './../index.scss';
import { connect } from 'react-redux';
import { fetchSearchNews } from './../actions/search';
import PropTypes from 'prop-types';
import Article from './Article';

export class Search extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let latest = this.props.search.map((data) =>  <a href={data['url']} key={data['url']}><Article data={data}  /></a> );
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
      search: state.news.search
    }
  }
  
  
  Search.propTypes = {
    search: PropTypes.array.isRequired,
    onFetchNews: PropTypes.func
  }
  
  export default connect(mapStateToProps,null)(Search);