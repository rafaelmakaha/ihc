import React, { Component } from 'react';
import SideBar from './Components/SideBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SideBar/>
        </header>
      </div>
    );
  }
}

export default App;
