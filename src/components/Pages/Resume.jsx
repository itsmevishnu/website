import React from 'react';
import ReactDom from 'react-dom';

import education_info from '../../context/education';
import experience_info from '../../context/experiences';

class Resume extends React.Component {
    render(){
        return <section id="resume" className="resume resume-bg sect-pt4 route paralax-mf">
      <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <div className="box-shadow-full">
                <div className="title-box-2">
                <h5 className="title-left">Resume</h5>
                </div>
                
                <div className="row">
          <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Vishnu Jayan</h4>
              <p><em>An IITian with good leadership, communication skill and having 3 years experience in Programming, Web Development, Server Administration and nearly 2 year experience in educational institute administration</em></p>
              <ul>
                <li>CTARA, IIT Bombay, Mumbai 400076</li>
                <li>IoE Cell, IIT Bombay, Mumbai 400076</li>
                <li>+91 8086107770</li>
                <li>mail@vishnujayan.in</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            {
                education_info.map(education=>(
                    <div className="resume-item" key={education.id}>
                    <h4>{education.course}</h4>
                    <h5>{education.from} - {education.to}</h5>
                    <p><em>{education.university}</em></p>
                    <p>{education.learning}</p>
                    </div>
                   
                ))
            }
            </div>
          <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            {
                experience_info.map(experience=>(
                    <div className="resume-item" key={experience.id}>
                    <h4>{experience.post}</h4>
                    <h5>{experience.from} - {experience.to}</h5>
                    <p><em>{experience.company}</em></p>
                    <p>{experience.tasks}</p>
                    </div>
                ))
            }
          </div>
        </div>
        </div>
        </div>
        </div>
      </div>
    </section>
    }
}

export default Resume;