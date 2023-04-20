import RoutesApp from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import AuthProvider from "./contexts/auth";

export default function App(){
  return(
  <>
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer autoClose={3000} />
        <RoutesApp/>
      </AuthProvider>
    </BrowserRouter>
  </>
  )
}