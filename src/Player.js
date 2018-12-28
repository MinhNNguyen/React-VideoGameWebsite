import React from 'react';
import PropTypes from 'prop-types';
import ShowGame from './ShowGame';

const Player = props => {
  return (
    <li className="player">
      <p> Player: {props.player.username} </p>
        <ShowGame games={props.player.gamesPlayed}/>
    </li>
  );
};

Player.propTypes = {
  player: PropTypes.array.isRequired,
};


export default Player;