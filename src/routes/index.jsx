import SignIn from './../pages/SignIn';

import Register from '../pages/Register';
import HomePage from './../pages/homePage/HomePage';
import { Routes, Route } from 'react-router-dom';

function RoutesApp() {


  return (
      <Routes>
      
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />

      </Routes>
  );
}

export default RoutesApp;
