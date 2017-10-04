import React, {Component} from 'react';
import {ListGroup, ListGroupItem, Row, Col, Grid, Image, Button} from 'react-bootstrap';
import './_skill-list.scss';
import FontAwesome from 'react-fontawesome';


class SkillList extends Component {
  render(){
    return(
      <div>
        <Grid>
          <Row className="show-grid">
            <Col sm={6} md={4}>
              <span className='fa-stack fa-lg'>
                <FontAwesome name='twitter' stack='1x' />
              </span>
            </Col>
            <Col sm={6} md={4}>
              <ListGroup id="skills">
                <ListGroupItem href="#" active>Skills</ListGroupItem>
                <ListGroupItem href="#">JavaScript</ListGroupItem>
                <ListGroupItem href="#">MongoDB</ListGroupItem>
                <ListGroupItem href="#">Express</ListGroupItem>
                <ListGroupItem href="#">Angular</ListGroupItem>
                <ListGroupItem href="#">Node</ListGroupItem>
                <ListGroupItem href="#">React</ListGroupItem>
              </ListGroup>
            </Col>
            <Col sm={6} md={4}>
              <Image src="http://vignette2.wikia.nocookie.net/marvelvscapcom/images/f/fa/Mvcpic1.png/revision/latest?cb=20101229135421" />
            </Col>
          </Row>
        </Grid>
        <p><Button bsStyle="primary" href="#about">Scroll</Button></p>

      </div>
    );
  }
}

export default SkillList;
