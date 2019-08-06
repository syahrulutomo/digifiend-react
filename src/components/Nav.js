import React, { Component } from 'react';
import './../index.scss';
import menuIcon from './../img/menu.jpg';
import searchIcon from './../img/search.png';
import backIcon from './../img/arrow_left.png';

export default class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            isSidebarOpen: false,
            isSearchbarOpen: false
        }
        this.sidebarOpen = this.sidebarOpen.bind(this);
        this.sidebarClose = this.sidebarClose.bind(this);
        this.searchbarOpen = this.searchbarOpen.bind(this);
        this.searchbarClose = this.searchbarClose.bind(this);
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

    render() {
        const sideBarClass  = this.state.isSidebarOpen ? ' sidebar open__sidebar' : 'sidebar';
        const searchBarClass  = this.state.isSearchbarOpen ? ' search__form__open' : 'search__form';
        return (
            <nav>
                <div id="toggle-sidebar">
                    <img className="burger-icon" src={menuIcon} alt="" onClick={this.sidebarOpen}/>
                </div>
                <h1 className="logo">Digifiend</h1>
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
                        <li className="sidebar__list">Tech</li>
                        <li className="sidebar__list">Entertainment</li>
                        <li className="sidebar__list">News</li>
                    </ul>
                </div>
            </nav>
            
        )
    }
}
