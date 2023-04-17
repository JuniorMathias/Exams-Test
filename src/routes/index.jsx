import SignIn from './../pages/SignIn';

import SignUp from './../pages/SignUp';
import HomePage from './../pages/homePage/HomePage';
import { Routes, Route } from 'react-router-dom';

function RoutesApp() {


  return (
      <Routes>
      
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />

      </Routes>
  );
}

export default RoutesApp;
