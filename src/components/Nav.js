import React, { Component } from 'react';
import './../index.scss';
import menuIcon from './../img/menu.jpg';
import searchIcon from './../img/search.png';
import backIcon from './../img/arrow_left.png';
import { connect } from 'react-redux';
import { selectCountry } from './../actions/selectNation';
import { selectCategory } from './../actions/selectCategory';
import { Link } from 'react-router-dom';
import { fetchHome } from './../actions/displayHome';
import { fetchLatestNews } from './../actions/displayNews';

export  class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            isSidebarOpen: false,
            isSearchbarOpen: false,
            countrySelected: 'id',
            categorySelected: 'business'
        }
        this.sidebarOpen = this.sidebarOpen.bind(this);
        this.sidebarClose = this.sidebarClose.bind(this);
        this.searchbarOpen = this.searchbarOpen.bind(this);
        this.searchbarClose = this.searchbarClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidUpdate(){
        this.props.onSelectCountry(this.state.countrySelected);
        this.props.onSelectCategory(this.state.categorySelected);
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
       this.props.onSelectCountry(this.state.countrySelected);
       this.props.onFetchNews(event.target.value);
       this.props.onFetchNews2(event.target.value, this.props.category);
    }

    handleClick(event){
        let category = event.target.getAttribute('data-category');
        this.setState({
            categorySelected: category
        });
        this.props.onFetchNews2(this.props.country, category);
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
                        <Link to='/business'><li onClick={this.handleClick} data-category="business" className="sidebar__list">Business</li></Link>
                        <Link to='/entertainment'><li onClick={this.handleClick} data-category="entertainment" className="sidebar__list">Entertainment</li></Link>
                        <Link to='/general'><li onClick={this.handleClick} data-category="general" className="sidebar__list">General</li></Link>
                        <Link to='/health'><li onClick={this.handleClick} data-category="health" className="sidebar__list">Health</li></Link>
                        <Link to='/science'><li onClick={this.handleClick} data-category="science" className="sidebar__list">Science</li></Link>
                        <Link to='/sports'><li onClick={this.handleClick} data-category="sports" className="sidebar__list">Sports</li></Link>
                        <Link to='/technology'><li onClick={this.handleClick} data-category="technology" className="sidebar__list">Technology</li></Link>
                    </ul>
                </div>
            </nav>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
      country: state.news.country,
      category: state.news.category
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onSelectCountry : (country) => {
        dispatch(selectCountry(country))
      },
      onSelectCategory : (category) => {
        dispatch(selectCategory(category))
      },
      onFetchNews : (country) => {
        dispatch(fetchHome(country))
      },
      onFetchNews2 : (country, category) => {
        dispatch(fetchLatestNews(country, category))
      }
    }
} 
  
  export default connect(mapStateToProps, mapDispatchToProps)(Nav);