import React from 'react';
import ReactDom from 'react-dom';

import {NavLink, Link, Switch, Route} from 'react-router-dom';


class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state = {class_name:'navbar navbar-b navbar-expand-md fixed-top navbar-trans'};
  }
  setHome = () => {
    this.setState({class_name:'navbar navbar-b navbar-expand-md fixed-top navbar-trans'});
  }
  changeClass = () =>{
    this.setState({class_name:'navbar navbar-b navbar-expand-md fixed-top navbar-reduce'});
  }

  render(){
      var home_class = 'navbar navbar-b navbar-expand-md fixed-top navbar-trans';
      var page_class = 'navbar navbar-b navbar-expand-md fixed-top navbar-reduce';

      return <nav className={this.state.class_name} id="mainNav">
      <div className="container">
        <Link onClick={this.setHome} className="navbar-brand" to="/">Vishnu Jayan</Link>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
          <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
            <ul className="navbar-nav">
                <li className='nav-item'><Link  onClick={this.setHome} className="nav-link" to='/'>Home</Link></li>
                <li className='nav-item'><NavLink activeClassName="active" onClick={this.changeClass} className="nav-link" to='/about-me'>About me</NavLink></li>
                <li className='nav-item'><NavLink activeClassName="active" onClick={this.changeClass} className="nav-link" to='/resume'>Resume</NavLink></li>
                <li className='nav-item'><NavLink activeClassName="active" onClick={this.changeClass} className="nav-link" to='/portfolio'>My Works</NavLink></li>
                {/* <li className='nav-item'><NavLink activeClassName="active" onClick={this.changeClass} className="nav-link" to='/blogs'>Blogs</NavLink></li> */}
                <li className='nav-item'><NavLink activeClassName="active" onClick={this.changeClass} className="nav-link" to='/contact-me'>Contact me</NavLink></li>
            </ul>
          </div>
        </div>  
      </nav>
    }
}

export default Menu;