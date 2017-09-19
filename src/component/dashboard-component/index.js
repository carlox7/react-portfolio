import React, {Component} from 'react';
import HeaderComp from '../header-comp';
import SkillList from '../skill-list-comp';

class Dashboard extends Component {

  render(){
    return(
      <div>
        <HeaderComp />
        <SkillList />
      </div>
    );
  }
}

export default Dashboard;
