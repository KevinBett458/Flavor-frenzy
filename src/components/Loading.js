import React from 'react';
import './Loading.css';
import { FastfoodSharp } from '@mui/icons-material';

function Loading() {
  return (
    <div className="loading">
      <p>Welcome <FastfoodSharp /> to Flavor Frenzy</p>
      <div className="loading-icon"></div>
    </div>
  );
}

export default Loading;
