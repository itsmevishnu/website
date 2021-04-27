import React from 'react';
import ReactDom from 'react-dom';

class Footer extends React.Component{
    render(){
        return <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
                <p className="copyright">© Copyright <strong>Vishnu Jayan</strong>.&nbsp; All Rights Reserved</p>
                <div className="credits">
                  <span className='ion-heart'></span> <a href="https://bootstrapmade.com/">BootstrapMade</a>&nbsp;
                  <span className='ion-heart'></span> <a href="https://unsplash.com/">Unsplash</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    }
}

export default Footer;