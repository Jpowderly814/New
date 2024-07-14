import './App.scss';
import Header from './Components/Header';
import HealthCheck from './Components/HealthCheck';
import { Box } from '@mui/material';


function App() {
  return (
    <>
    <Header/>
    <HealthCheck/>
    {/* <Nav /> */}
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
