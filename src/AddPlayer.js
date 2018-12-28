import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddPlayer extends Component {
  state = {
    player: {
      firstName: '',
      lastName: '',
      username: '',
      gamesPlayed: 0
    },
  };

  handleChange = event => {
    const { name, value} = event.target;
    this.setState( currState => ({ 
      player: {...currState.player,
      [name]: value},
    }));
  };

  addPlayer = event => {
    event.preventDefault();
    this.props.addPlayerOn(this.state.player);
  };

  render() {
    return (<div>
      <h3> New User </h3>
      <form onSubmit={this.addPlayer}>
	  <input type="text" name="firstName" placeholder="First Name" value={this.state.player.firstName} onChange={this.handleChange}/>
      <input type="text" name="lastName" placeholder="Last Name" value={this.state.player.lastName} onChange={this.handleChange}/>
      <input type="text" name="username" placeholder="Username" value={this.state.player.username} onChange={this.handleChange}/>
      <input type="number" name="gamesPlayed" placeholder="Number of Games" value={this.state.player.gamesPlayed} onChange={this.handleChange}/>
      <button>Add</button>
	  </form>
    </div>);
  };
}

AddPlayer.propTypes = {
  addPlayerOn: PropTypes.func.isRequired,
};

export default AddPlayer;