import React, { Component } from 'react'
import './../index.scss';
import grey from './../img/grey.jpg';
import PropTypes from 'prop-types';

export class Article extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
          <article className="latest__item">
            <img className="latest__item__img" src={this.props.data['urlToImage']} alt={this.props.data['title']} />
            <div className="latest__item__desc">
                <h4 className="latest__item__title">{this.props.data['title']}</h4>
                <p className="latest__item__author"> {this.props.data['source']['name']} </p>
            </div>  
           </article>
        )
    }
}

  
export default Article;