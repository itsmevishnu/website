import React,{useState} from 'react';
import ReactDom from 'react-dom';
import Isotope from "isotope-layout/js/isotope";

import works from '../../context/mywork';

class Portfolio extends React.Component{
    constructor(props) {
        super(props);
        this.onFilterChange= this.onFilterChange.bind(this);
    }
    onFilterChange = (newFilter)=>{
        if(this.iso === undefined){
            this.iso = new Isotope('#works',{
                itemSelector: '.grid-item',
                layoutMode: 'fitRows',
            });
        }
        if(newFilter === '*') {
            this.iso.arrange({filter:'*'});
        } else {
            this.iso.arrange({filter: newFilter});
        }
    }
    render(){
    return <section id="about" className="about-mf portfolio-bg sect-pt4 route paralax-mf">
        <div className="container">
        <div className="row">
    <div className="col-sm-12">
        <div className="box-shadow-full">
        <div className="button-group filter-button-group grid-filters">
          <div className="tabs is-centered is-toggle">
            <ul id="portfolio-filters">
              <li data-filter="*" onClick={() => {this.onFilterChange("*")}}>All</li>
              <li data-filter="php" onClick={() => {this.onFilterChange(".php")}}>PHP</li>
              <li data-filter="python" onClick={() => {this.onFilterChange(".python")}}>Python</li>
              <li data-filter="django" onClick={() => {this.onFilterChange(".django")}}>Django</li>
              <li data-filter="react" onClick={() => {this.onFilterChange(".react")}}>React</li>
              <li data-filter="laravel" onClick={() => {this.onFilterChange(".laravel")}}>Laravel</li>
              <li data-filter="ml" onClick={() => {this.onFilterChange(".ml")}}>ML</li>
              <li data-filter="gis" onClick={() => {this.onFilterChange(".gis")}}>GIS</li>
              <li data-filter="iot" onClick={() => {this.onFilterChange(".iot")}}>IoT</li>
              <li data-filter="others" onClick={() => {this.onFilterChange(".others")}}>Others</li>
            </ul>
          </div>
        </div>

            <div className="row grid" id="works">
            {
                works.map(work=>(
                    <div className={"col-md-4 grid-item " + work.category} key={work.id}>
                    <div className="work-box">
                        <div className="work-img">
                            <img src={"/img/work/"+work.img} alt="" className="img-fluid"/>
                        </div>
                        <div className="work-content">
                        <div className="row">
                            <div className="col-sm-8">
                            <h2 className="w-title">{work.title}</h2>
                            </div>
                            <div className="col-sm-4">
                            <div className="w-like">
                                <a target="_blank" href={work.url}> <span className="ion-link"></span></a>
                            </div>
                            </div>
                                <div className="col-md-12">
                                <p>{work.description}</p>
                                <div className="w-more">
                                    <span className="w-ctegory">{work.technologies}</span> / <span className="w-date">{work.year}</span>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                ))
            }
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
 }
}
export default Portfolio;