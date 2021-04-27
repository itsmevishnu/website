import React from 'react';
import ReactDom from 'react-dom';

import Interest from '../Interest/Interest';

import photo from './../../assets/img/photo.jpg';
import {my_info} from './../../context/contact_info';
import skills from './../../context/skills';
import mystory from './../../context/myself';
import AboutMe from './AboutMe';

class About extends React.Component {
    render(){
        return <div className="about-us">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-sm-6 col-md-5">
                        <div className="about-img">
                          <img src={photo} className="img-fluid rounded b-shadow-a" alt=""/>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-7">
                        <div className="about-info">
                          {
                            my_info.map(contact =>(
                            <p key={contact.id}><span className="title-s">{contact.field}</span> <span>{contact.value}</span></p>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      <p className="title-s">Skills</p>
                      {
                        skills.map(skill=>(
                          <div key={skill.id}>
                            <span>{skill.skill}</span> <span className="pull-right">{skill.value}</span>
                            <div className="progress">
                              <div className="progress-bar" role="progressbar" style={{"width":skill.value+"%"}} aria-valuenow={skill.value} aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>  
                        ))
                      }
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">
                          About me
                        </h5>
                      </div>
                      {
                      mystory.map(story=>(
                        <p className="lead" key={story.id}>
                       {story.para}
                      </p>
                      ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
    }
}

export default About;