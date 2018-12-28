import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';

const PlayerList = props => {
  return (
    <div>
      <h2>List of players and their scores</h2>
      <ol>
        {props.playerArray.map(player => (
          <Player key={player.username} player={player}/>
        ))}
      </ol>
    </div>
  );
};

PlayerList.propTypes = {
  playerArray: PropTypes.array.isRequired,
};

export default PlayerList;