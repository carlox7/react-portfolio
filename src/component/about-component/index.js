import React, {Component} from 'react';
import {PageHeader, Button} from 'react-bootstrap';
import './_about-component.scss';


var FontAwesome = require('react-fontawesome');


class About extends Component{
  render(){
    return(
      <div id="about">
        <h2>About</h2>
        <FontAwesome
          id="icon-section"
          className='fa-user-circle-o'
          name='user'
          size='5x'
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        />
        <p id="blurb">I have had a lifelong passion for technology and media. I spent my undergrad learning
        about journalism and how the internet has changed our media landscape and how we view and consume information.
        This lead me to pursue a career in web development so I could be a part of that change.
        I am trained in MEAN stack development and am also familiar with React.js, Redux, Postgres SQL as well as various
        other coding libraries and frameworks. I am always interested to learn what is new so I can continue to grow my skills
        as a developer.</p>

      </div>
    );
  }
}

export default About;
