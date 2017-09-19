import React, {Component} from 'react';
import Navigation from '../nav-comp';
import Dashboard from '../dashboard-component';
import { BrowserRouter, Route} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Route exact path="/" component={Dashboard}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
