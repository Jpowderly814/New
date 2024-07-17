import './App.scss';

import Header from './Components/Layout/Header';
import HealthCheck from './Components/HealthCheck';
import { Box } from '@mui/material';
import Nav from './Components/Layout/Nav';


function App() {
  return (
    <>
    <Header/>
    <Nav/>
    {/* <HealthCheck/> */}

    <Box component="main">
      <Box className="mainContext">
        {/* <Router /> */}
      </Box>
    </Box>
    {/* <Footer /> */}
  </>
  );
}

export default App;
