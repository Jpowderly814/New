import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
        <button onClick={fetchData} >HEALTH CHECK</button>
    </div>
  );
};

export default HealthCheck;
