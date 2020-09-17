import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import {useRoutes} from 'hookrouter';
import UserPage from './Components/UserPage';
import TechPage from './Components/TechPage';
const routes = {
  '/': () => <HomePage />,
  '/user': () => <UserPage />,
  '/technician': () => <TechPage />
}


function App() {
  const routeResult = useRoutes(routes);

  return (
    <div className="App">
      <Navbar />
      {routeResult}
    </div>
  );
}

export default App;
