import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShowGame extends Component {
  state = {
    visible: true,
  };

  toggle = event => {
    event.preventDefault();
    this.setState(currState => ({
      visible: !currState.visible,
    }));
  };

  render() {
    if (this.state.visible) {
      return(<div>
        <p>Games Played: {this.props.games} </p>
        <button onClick={this.toggle}>
          Hide the Number of Games Played
        </button>
      </div>);
    }
    else {
      return(<div>
        <button onClick={this.toggle}>
          Show the Number of Games Played
        </button>
      </div>);
    }
  };
}

ShowGame.propTypes = {
  games: PropTypes.string.isRequired,
};

export default ShowGame;