import React from 'react';
import ReactDom from 'react-dom';
import interests from '../../context/interests';

class Interest extends React.Component {
    render(){
        return <div className="row">
          <div className="col-sm-12">
              <div className="box-shadow-full">
          <div className="title-box-2">
            <h5 className="title-left">My Interests</h5>
          </div>
  
          <div className="row">
            {
              interests.map(interest=>(
                <div className="col-md-4" key={interest.id}>
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle"><i className={interest.icon}></i></span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">{interest.title}</h2>
                    <p className="s-description text-center">{interest.description}</p>
                  </div>
                </div>
              </div>
              ))
            }
          </div>
          </div>
          </div>
          </div>
    }
}

export default Interest;
