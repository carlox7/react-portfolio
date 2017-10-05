import React, {Component} from 'react';
import {Grid, Thumbnail, Button, Row, Col, PageHeader} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import './_project_component.scss';
import Steam from '../../pics/steam.png';
import PseudoPet from '../../pics/pet.png';
import Guess from '../../pics/guess.png';

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
              <Thumbnail src={Steam} alt="242x200">
                <h3>Do You Even Steam</h3>
                <p>
                  This app takes a users Steam vanity name and gives them stats based on how much time they have spent
                  playing games on Steam. Including total time play, time per game. This project was made using the Steam API,
                  JavaScript, jQuery, PostgreSQL, Handlebars.js.
                </p>
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
              <Thumbnail src={PseudoPet} alt="242x200">
                <h3>Pseudo-Pet</h3>
                <p>
                  This app was made to simulate a pet that kids could care for in order to develop responsibilites needed for a real pet.
                   Twilio was used to text the child when the pet needed care and Parents were given a stats page to track a childs progess.
                   This app was built with Angular, MongoDB, and Twilio.
                </p>
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
              <Thumbnail src={Guess} alt="242x200">
                <h3>Guess Work</h3>
                <p>
                  An app made for hosting trivia parties. Gather three friends and answer fun trivia questions. The user moderates the games
                   and can still participate. Questions range from easy, medium, difficult. This project was made using React.js,  and React-Bootstrap.
                </p>
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
