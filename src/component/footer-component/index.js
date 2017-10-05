import React, {Component} from 'react';
// import {FooterBelow} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import './_footer-comp.scss';

class Footer extends Component{
  render(){
    return(
      <div>
        <footer id="foot">
          <p>
          Carlo Santos

            <span>

              <FontAwesome
                className='fa-phone'
                name='phone'
                size='lg'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
              360-440-4392
            </span>

            <span>
                
              <FontAwesome
                className='fa-envelope-o'
                name='email'
                size='lg'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
                carlox7@gmail.com
            </span>
          </p>
        </footer>
      </div>
    );
  }
}

export default Footer;
