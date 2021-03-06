import React, { Component } from 'react';
import firebase, { reference } from '../firebase';
import stats from '../../stats';
import {pick, filter, map} from 'lodash';

class CompletedGame extends Component {
  render(){
    return(
      <span className='completed-game'>
        <p>{this.props.game.date}</p>
        <span className='away-team'> {this.props.game.awayTeam.City} </span> @
        <span className='home-team'>  {this.props.game.homeTeam.City} </span>
      </span>
    )
  }
}

module.exports = CompletedGame
