import React, {Component} from 'react';
import {Jumbotron, Button, Image} from 'react-bootstrap';
import './_header-comp.scss';

class HeaderComp extends Component {
  render(){

    return(
      <div>
        <div id="splash">

          <header id="title">
            <Jumbotron id="header">
              <h1>Carlo Santos</h1>
              <p>Web Developer</p>
              <p><Button bsStyle="primary">Learn more</Button></p>
            </Jumbotron>
          </header>
        </div>
      </div>
    );
  }
}

export default HeaderComp;
