import React, {Component} from 'react';
import {Grid, Thumbnail, Button, Row, Col} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Projects extends Component{
  render(){
    return(
      <div>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src="/src/pics/steam.png" alt="242x200">
                <h3>Do You Even Steam</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="/src/pics/pet.png" alt="242x200">
                <h3>Pseudo-Pet</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="/src/pics/guess.png" alt="242x200">
                <h3>Guess Work</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Projects;
