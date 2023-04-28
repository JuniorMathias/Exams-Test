import * as S from './styles';
import { AuthContext } from '../../contexts/auth';
import { useContext } from 'react';
import NavBar from '../../components/NavBar';

function HomePage(){
  const { logout } = useContext(AuthContext);
  
  async function handleLogout(){
    await logout();
  }



    return (
      <>
      <NavBar />
        <S.Container>
          <S.ButtonLogout onClick={handleLogout}>Sair</S.ButtonLogout>
        </S.Container>
      </>
    );
}

export  default HomePage;