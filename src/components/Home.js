import React, { Component } from 'react'
import './../index.scss';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            list: []
        }
    }

    componentDidMount(){
     
    }

    render() {
        return (
          <h1>Home</h1>
        )
    }
}