import React, { Component } from 'react';
import './App.css';
import User from './component/User';

class App extends Component {
  render() {
    return (
      <div className="container">
        <User />
      </div>
    );
  }
}
export default App;