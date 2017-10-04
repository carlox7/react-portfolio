import React, {Component} from 'react';
import HeaderComp from '../header-comp';
import SkillList from '../skill-list-comp';
import About from '../about-component';
import Projects from '../projects-component';

class Dashboard extends Component {

  render(){
    return(
      <div>
        <HeaderComp id="head" />
        <SkillList id="skills" />
        <About id="about" />
        <Projects />
      </div>
    );
  }
}

export default Dashboard;
