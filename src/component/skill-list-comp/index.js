import React, {Component} from 'react';
import {ListGroup, ListGroupItem, Row, Col, Grid, Image, Button} from 'react-bootstrap';
import './_skill-list.scss';
import FontAwesome from 'react-fontawesome';


class SkillList extends Component {
  render(){
    return(
      <div id="skills">
        <Grid>
          <Row className="show-grid">
            <Col sm={6} md={4}>
            </Col>
            <Col sm={6} md={4}>
              <ListGroup id="skills">
                <ListGroupItem href="#" active>Skills</ListGroupItem>
                <ListGroupItem>JavaScript</ListGroupItem>
                <ListGroupItem>MongoDB</ListGroupItem>
                <ListGroupItem>Express</ListGroupItem>
                <ListGroupItem>Angular</ListGroupItem>
                <ListGroupItem>Node</ListGroupItem>
                <ListGroupItem>React</ListGroupItem>
                <ListGroupItem>Redux</ListGroupItem>

              </ListGroup>
            </Col>
            <Col sm={6} md={4}>
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default SkillList;
