import React, {Component} from 'react';
import Nav from '../nav-comp';
import Dashboard from '../dashboard-component';
import { BrowserRouter, Route} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Route exact path="/" component={Dashboard}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
