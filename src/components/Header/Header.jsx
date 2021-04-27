import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import Menu from '../Menu/Menu';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Resume from '../Pages/Resume';
import Portfolio from '../Pages/Portfolio';
import Contact from '../Pages/Contact';
import Blog from '../Pages/Blog';
import Interest from '../Interest/Interest';
import AboutMe from '../Pages/AboutMe';

class Header extends React.Component {
    render(){
        return <Router>
                 <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about-me' component={AboutMe}/>
                    <Route path='/resume' component={Resume}/>
                    <Route path='/portfolio' component={Portfolio}/>
                    {/* <Route path='/blogs' component={Blog}/> */}
                    <Route path='/contact-me' component={Contact}/>
                 </Switch>
                 <Menu></Menu>
            </Router>
    }
}

export default Header;