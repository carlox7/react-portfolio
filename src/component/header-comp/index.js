import React, {Component} from 'react';
import {Jumbotron, Button, Image} from 'react-bootstrap';
import './_header-comp.scss';

class HeaderComp extends Component {
  render(){

    return(
      <div>
        <div id="splash">

          <div id="profile-pic">
            <Image id="pic-container" src="src/pics/profile.jpg" circle />
          </div>
          <header id="title">
            <Jumbotron id="header">
              <h1>Carlo Santos</h1>
              <p>Web Developer</p>
            </Jumbotron>
          </header>
        </div>
      </div>
    );
  }
}

export default HeaderComp;
