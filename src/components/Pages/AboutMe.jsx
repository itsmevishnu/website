import React from 'react';
import ReactDom from 'react-dom';
import About from './About';
import Interest from '../Interest/Interest';
class AboutMe extends React.Component {
    render(){
        return <section id="about" className="about-mf about-bg sect-pt4 route paralax-mf">
        <div className="container">
        <div id="about">
            <About/>
        </div>
        <div className="" id="interest">
            <Interest/>
        </div>
    </div>
    </section>
    }
}

export default AboutMe;