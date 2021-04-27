import React from 'react';
import ReactDom from 'react-dom';
import Typewriter from 'typewriter-effect';

import title from '../../context/titles';

class Home extends React.Component {
    render(){
        return  <div id="home" className="intro route bg-image">
          <div className="overlay-itro"></div>
          <div className="intro-content display-table">
            <div className="table-cell">
              <div className="container">
                <h1 className="intro-title mb-4">I am Vishnu Jayan</h1>
                <p className="intro-subtitle">
                    <Typewriter options={{
                        strings: title,
                        autoStart: true,
                        loop: true,
                    }}></Typewriter>
                </p>
              </div>
            </div>
          </div>
        </div>
    }
}

export default Home;