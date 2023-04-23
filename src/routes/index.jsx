import { Routes, Route } from 'react-router-dom';
import SignIn from './../pages/SignIn';
import Register from '../pages/Register';
import HomePage from './../pages/homePage/HomePage';
import RecoverPassword from './../pages/RecoverPassword';

import Private from './Private';

function RoutesApp() {


  return (
      <Routes>
      
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recuperarsenha" element={<RecoverPassword />} />
        <Route path="/home" element={<Private><HomePage /> </Private>} />

      </Routes>
  );
}

export default RoutesApp;
