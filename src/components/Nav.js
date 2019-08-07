import React, { Component } from 'react';
import './../index.scss';
import menuIcon from './../img/menu.jpg';
import searchIcon from './../img/search.png';
import backIcon from './../img/arrow_left.png';
import { connect } from 'react-redux';
import { selectCountry } from './../actions/selectNation';
import { Link } from 'react-router-dom';

export  class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            isSidebarOpen: false,
            isSearchbarOpen: false,
            countrySelected: 'id'
        }
        this.sidebarOpen = this.sidebarOpen.bind(this);
        this.sidebarClose = this.sidebarClose.bind(this);
        this.searchbarOpen = this.searchbarOpen.bind(this);
        this.searchbarClose = this.searchbarClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidUpdate(){
        this.props.onSelectCountry(this.state.countrySelected);
    }

    sidebarOpen(){
        this.setState({
            isSidebarOpen: true
        });
    }

    sidebarClose(){
        this.setState({
            isSidebarOpen: false
        });
    }

    searchbarOpen(){
        this.setState({
            isSearchbarOpen: true
        });
    }

    searchbarClose(){
        this.setState({
            isSearchbarOpen: false
        });
    }

    handleChange(event){
       this.setState({
           countrySelected: event.target.value
       });
    }

    render() {
        const sideBarClass  = this.state.isSidebarOpen ? ' sidebar open__sidebar' : 'sidebar';
        const searchBarClass  = this.state.isSearchbarOpen ? ' search__form__open' : 'search__form';
        return (
            <nav>
                <div id="toggle-sidebar">
                    <img className="burger-icon" src={menuIcon} alt="" onClick={this.sidebarOpen}/>
                </div>
                <div className="logo-wrapper">
                    <Link to="/"><h1 className="logo">Digifiend</h1></Link>
                    <select className="select-country" onChange={this.handleChange}>
                            <option value="id">INA</option>
                            <option value="us">USA</option>
                            <option value="gb">UK</option>
                    </select>
                </div>
                <div id="search-toggle">
                    <img className="search-icon" src={searchIcon} alt="" onClick={this.searchbarOpen}/>
                </div>
                <div className={searchBarClass}>
                    <div className="search__input-wrapper">
                        <input className="search__input" type="text" placeholder="search for something"/>
                        <button className="search__btn"><i className="fas fa-search"></i></button>
                    </div>
                    <span id="close__search" onClick={this.searchbarClose}><i className="fas fa-times-circle"></i></span> 
                </div>
                <div className={sideBarClass}>
                    <div className="sidebar__logo-container">
                        <h2 className="sidebar__logo">Digifiend</h2>
                        <span id="close">
                            <img className="close__icon" src={backIcon} alt="" onClick={this.sidebarClose}/>
                        </span>
                    </div>
                    <ul className="sidebar__lists">
                        <Link to={`/${this.state.countrySelected}/business`}><li className="sidebar__list">Business</li></Link>
                        <Link to={`/${this.state.countrySelected}/entertainment`}><li className="sidebar__list">Entertainment</li></Link>
                        <Link to={`/${this.state.countrySelected}/general`}><li className="sidebar__list">General</li></Link>
                        <Link to={`/${this.state.countrySelected}/health`}><li className="sidebar__list">Health</li></Link>
                        <Link to={`/${this.state.countrySelected}/science`}><li className="sidebar__list">Science</li></Link>
                        <Link to={`/${this.state.countrySelected}/sports`}><li className="sidebar__list">Sports</li></Link>
                        <Link to={`/${this.state.countrySelected}/technology`}><li className="sidebar__list">Technology</li></Link>
                    </ul>
                </div>
            </nav>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
      country: state.news.country
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onSelectCountry : (country) => {
        dispatch(selectCountry(country))
      }
    }
} 
  
  export default connect(mapStateToProps, mapDispatchToProps)(Nav);