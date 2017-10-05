import React, {Component} from 'react';
import HeaderComp from '../header-comp';
import SkillList from '../skill-list-comp';
import About from '../about-component';
import Projects from '../projects-component';
import Footer from '../footer-component';

class Dashboard extends Component {

  render(){
    return(
      <div>
        <HeaderComp id="head" />
        <SkillList id="skills" />
        <Projects />
        <About id="about" />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
