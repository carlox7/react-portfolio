import React, {Component} from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
var FontAwesome = require('react-fontawesome');
import './_nav-bar-comp.scss';




class Navigation extends Component {

  render(){
    return(
      <Navbar id="nav-bar">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Portfolio of Carlo Santos</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} target="_blank" href="https://www.linkedin.com/in/carlo-steven-santos/">LinkedIn</NavItem>
          <NavItem eventKey={2} target="_blank" href="https://github.com/carlox7">GitHub</NavItem>
          <NavDropdown eventKey={3} title="Social Media" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1} target="_blank" href="https://www.facebook.com/carlodeleonsantos">
              <span className='fa-stack fa-lg'>
                <FontAwesome name='facebook' stack='1x' />
              </span>
            </MenuItem>
            <MenuItem eventKey={3.2} target="_blank" href="https://twitter.com/Carlo_Santos?lang=en">
              <span className='fa-stack fa-lg'>
                <FontAwesome name='twitter' stack='1x' />
              </span>
            </MenuItem>
            <MenuItem eventKey={3.3} target="_blank" href="https://www.instagram.com/sp1r4lnem3sis/?hl=en">
              <span className='fa-stack fa-lg'>
                <FontAwesome name='instagram' stack='1x' />
              </span>
            </MenuItem>
          </NavDropdown>

        </Nav>
      </Navbar>

    );
  }
}

export default Navigation;
