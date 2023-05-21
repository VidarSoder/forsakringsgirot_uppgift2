import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChiliList from './views/ChiliList.js';
import UpdateChili from './views/UpdateChili.js';
import Login from './components/Login.js';
import { Box, CssBaseline } from '@material-ui/core';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <CssBaseline />
      <Box style={{ marginTop: '3rem' }} >
        <Routes>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/chilis" element={loggedIn ? <UpdateChili /> : <ChiliList />} />
          <Route path="/" element={<ChiliList />} />
        </Routes>
      </Box>
    </Router >
  );
}

export default App;
