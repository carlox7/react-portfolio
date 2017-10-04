import React, {Component} from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';



class Navigation extends Component {

  render(){
    return(
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Carlo Santos</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <Navbar.Toggle />
            <NavItem eventKey={1} href="">GitHub</NavItem>
            <NavItem eventKey={2} target="_blank" href="https://www.linkedin.com/in/carlo-steven-santos/">LinkedIn</NavItem>
            <NavDropdown eventKey={3} title="Browse" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>About</MenuItem>
              <MenuItem eventKey={3.2}>Projects</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="https://www.linkedin.com/in/carlo-steven-santos/">LinkedIn</NavItem>
            <NavItem eventKey={2} href="#">Link Right</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
  }
}

export default Navigation;
