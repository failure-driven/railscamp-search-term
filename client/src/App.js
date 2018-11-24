import React, {Component} from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Welcome from './components/Welcome'
import Round from './components/Round'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Welcome} />
              <Route path="/rounds/1" exact component={Round} />
            </Switch>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;

