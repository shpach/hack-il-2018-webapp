import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './scenes/Landing';
import Home from './scenes/Home';
import Experience from './scenes/Experiences/';

import './styles/normalize.css';
import './styles/base.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/experience" component={Experience} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
