import RoutesApp from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import AuthProvider from "./contexts/auth";
import {QuizProvider} from "./contexts/quiz";

export default function App(){
  return(
  <>
    <BrowserRouter>
      <AuthProvider>
        <QuizProvider>
          <ToastContainer autoClose={3000} />
          <RoutesApp/>
        </QuizProvider>
      </AuthProvider>
    </BrowserRouter>
  </>
  )
}