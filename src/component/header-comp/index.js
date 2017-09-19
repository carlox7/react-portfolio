import React, {Component} from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import './_header-comp.scss';

class HeaderComp extends Component {
  render(){

    return(
      <div>
        <header>
          <Jumbotron id="header">
            <h1>Carlo Santos</h1>
            <p>Web Developer</p>
            <p><Button bsStyle="primary">Learn more</Button></p>
          </Jumbotron>
        </header>
      </div>
    );
  }
}

export default HeaderComp;
