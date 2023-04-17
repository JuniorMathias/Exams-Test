
import RoutesApp from './routes';
import { BrowserRouter } from 'react-router-dom';
import { db } from './firebaseConnection';
function App() {


  return (

    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
