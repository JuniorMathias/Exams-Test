import { Routes, Route } from 'react-router-dom';
import SignIn from './../pages/SignIn';
import Register from '../pages/Register';
import HomePage from './../pages/homePage/HomePage';
import RecoverPassword from './../pages/RecoverPassword';
import Profile from '../pages/Profile';

import Private from './Private';
import UpdatePassword from '../pages/UpdatePassword';

function RoutesApp() {


  return (
      <Routes>
      
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recuperarsenha" element={<RecoverPassword />} />
        <Route path="/atualizarSenha" element={<Private><UpdatePassword /> </Private>} />
        <Route path="/home" element={<Private><HomePage /> </Private>} />
        <Route exact path="/perfil" element={<Private><Profile /> </Private>} />

      </Routes>
  );
}

export default RoutesApp;
