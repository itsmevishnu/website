import React from 'react';
import ReactDom, { render } from 'react-dom';
import MyMap from '../Interest/Map';

import {contact_info, social_media} from './../../context/contact_info';

class Contact extends React.Component{
    render(){
        return <section className="paralax-mf  contact-bg sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">
                          Location
                        </h5>
                      </div>
                      <div>
                         <MyMap></MyMap>                      
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">
                          Get in Touch
                        </h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          Free feel to contact me
                        </p>
                        <ul className="list-ico">
                        {
                        contact_info.map(contact=>(
                        <li key={contact.id}><span className={contact.icon}></span>{contact.value}</li>
                        ))
                        }
                        </ul>
                      </div>
                      <div className="socials">
                        <ul>
                        {
                        social_media.map(media =>(
                            <li><a href={media.url}><span className="ico-circle"><i className={media.icon}></i></span></a></li>
                        ))
                        }                          
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    }
}

export default Contact;