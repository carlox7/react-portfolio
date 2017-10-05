import React, {Component} from 'react';
import {Grid, Thumbnail, Button, Row, Col, PageHeader} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import './_project_component.scss';

class Projects extends Component{
  render(){
    return(
      <div id="projects">
        <PageHeader id="proj-head">Projects</PageHeader>
        <FontAwesome
          className='fa-suitcase'
          name='suitcase'
          size='5x'
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        />
        <Grid id="grid">
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src="/src/pics/steam.png" alt="242x200">
                <h3>Do You Even Steam</h3>
                <p>Description</p>
                <p>
                  <Button href="https://do-you-even-steam.herokuapp.com/" target="_blank">
                    <FontAwesome
                      className='fa-chrome'
                      name='chrome'
                      size='2x'
                      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                  </Button>&nbsp;
                  <Button bsStyle="default" href="https://github.com/carlox7/Do-You-Even-Steam" target="_blank">
                    <FontAwesome
                      className='fa-github'
                      name='github'
                      size='2x'
                      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                  </Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="/src/pics/pet.png" alt="242x200">
                <h3>Pseudo-Pet</h3>
                <p>Description</p>
                <p>
                  <Button href="https://paw-sibilites-frontend.herokuapp.com/#!/join#signup" target="_blank">
                    <FontAwesome
                      className='fa-chrome'
                      name='chrome'
                      size='2x'
                      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                  </Button>&nbsp;
                  <Button bsStyle="default" href="https://github.com/G4-Final-Project/PAWS-ibilities-frontend" target="_blank">
                    <FontAwesome
                      className='fa-github'
                      name='github'
                      size='2x'
                      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                  </Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="/src/pics/guess.png" alt="242x200">
                <h3>Guess Work</h3>
                <p>Description</p>
                <p>
                  <Button href="https://guess-work.herokuapp.com/" target="_blank">
                    <FontAwesome
                      className='fa-chrome'
                      name='chrome'
                      size='2x'
                      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                  </Button>&nbsp;
                  <Button bsStyle="default" href="https://github.com/sheridp2/triviapp" target="_blank">
                    <FontAwesome
                      className='fa-github'
                      name='github'
                      size='2x'
                      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                  </Button>
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
