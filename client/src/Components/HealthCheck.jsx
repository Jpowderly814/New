import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import {
//   Paper,
//   Typography,
//   LinearProgress,
//   ToggleButton,
//   ToggleButtonGroup,
// } from '@mui/material';
// import { appSettings } from '../../appSettings';

const HealthCheck = () => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          "http://localhost:5038/",
        );
        console.log(data);
       
      } catch (err) {
        console.log(err);
      }
    };


  return (
    <div>
        <h1>HELLO</h1>
        <button onClick={fetchData} >BUTTON</button>
    </div>
  );
};

export default HealthCheck;
