import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerList from './PlayerList';
import AddPlayer from './AddPlayer';

class App extends Component {
  state = {
    playerArray: [],
  };

  handleAddingPlayer = player => {
    this.setState( currState => ({
      playerArray: [...currState.playerArray, player],
    }));
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
      	<AddPlayer addPlayerOn={this.handleAddingPlayer} />
    	<PlayerList playerArray={this.state.playerArray} />
      </div>
    );
  }
}

export default App;
