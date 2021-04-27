import React,{useState, useEffect} from 'react';
import ReactDom from 'react-dom';


class Blog extends  React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return <section id="blog" className="blog-mf blog-bg sect-pt4 route paralax-mf">
            <div class="overlay-mf"></div>
        <div className="container">
           <div className="row">
               <div className="col-sm-12">
                   <div className="box-shadow-full">
                       <div className="title-box-2">
                           <h5 className="title-left">Blog</h5>
                       </div>
                       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                   <div className="row">
                       <div className="col-md-4">
                       <div class="card card-blog">
                       <div class="card-body">
                        <h3 class="card-title"><a href="blog-single.html">Title</a></h3>
                        <p class="card-description">Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis</p>
                       </div>
                       <div class="card-footer">
                       <div class="post-author">
                       <span class="author">Category</span>
                       </div>
                       <div class="post-date">
                        <span class="ion-ios-calendar-outline"></span> 10/12/2020</div>
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

export default Blog;