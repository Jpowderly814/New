import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HealthCheck from '../HealthCheck';
import Profile from '../Profile/Profile';

const Router = () => (
  <Routes>
    <Route path="/" element={<HealthCheck />} />
    <Route path="/profile" element={<Profile/>} />
  </Routes>
);

export default Router;
