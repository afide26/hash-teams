import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Home';
import Teams from './Teams';
import TeamPage from './TeamPage';
import Players from './Players';
import Navbar from './Navbar';
import Articles from './Articles';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/teams" component={Teams}/>
            <Route path="/players" component={Players}/>
            <Route path="/:teamId" exact component={TeamPage}/>
            <Route path="/:teamId/articles" component={Articles}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
