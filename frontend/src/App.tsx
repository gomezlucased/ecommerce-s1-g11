import React from 'react';
import { Routes, Route } from 'react-router-dom';
//import Dashboard from './Components/Dashboard/Dashboard';
import MainRoutes from './MainRoutes';
import '../src/assets/fonts/arsenale_white.ttf'
import '../src/assets/fonts/cambria.ttc'

const App = () => {
  return (
    <div>
      <Routes >
        <Route path="*" element={ <MainRoutes /> } />
        {/* <Route exact path="/dashboard" element={ <Dashboard /> } /> */}
      </Routes>  
    </div>
  )
}

export default App;
