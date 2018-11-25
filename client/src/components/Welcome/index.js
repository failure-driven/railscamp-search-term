import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <h2>Welcome to the Game</h2>
    <Link to="/rounds/1" data-start-button>Start Game</Link>
  </div>
)