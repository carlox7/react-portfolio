import React, {Component} from 'react';
import HeaderComp from '../header-comp';
import SkillList from '../skill-list-comp';

class Dashboard extends Component {

  render(){
    return(
      <div>
        <h1>dashboard</h1>
        <HeaderComp />
        <SkillList />
      </div>
    );
  }
}

export default Dashboard;
