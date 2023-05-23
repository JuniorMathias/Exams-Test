import { Routes, Route } from 'react-router-dom';
import SignIn from './../pages/SignIn';
import Register from '../pages/Register';
import HomePage from './../pages/homePage/HomePage';
import RecoverPassword from './../pages/RecoverPassword';
import Profile from '../pages/Profile';

import Private from './Private';
import UpdatePassword from '../pages/UpdatePassword';
import PageFlow from '../pages/PageFlow';
import Revision from '../pages/Revision';
import RevisionRedes from '../pages/RevisionRedes';
import RevisionAds from '../pages/RevisionRedes';

function RoutesApp() {


  return (
      <Routes>
      
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recuperarsenha" element={<RecoverPassword />} />

        <Route path="/home" element={<Private><HomePage /> </Private>} />
        <Route exact path="/perfil" element={<Private><Profile /> </Private>} />
        <Route path="/atualizarSenha" element={<Private><UpdatePassword /> </Private>} />

        <Route path="/revisao" element={<Private><Revision /> </Private>} />
        <Route path="/revisaoredes" element={<Private><RevisionRedes /> </Private>} />
        <Route path="/revisaoads" element={<Private><RevisionAds /> </Private>} />
        <Route path="/provas" element={<Private><PageFlow /> </Private>} />


      </Routes>
  );
}

export default RoutesApp;
