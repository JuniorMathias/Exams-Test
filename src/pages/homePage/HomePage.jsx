import * as S from './styles';
import { AuthContext } from '../../contexts/auth';
import { useContext } from 'react';

function HomePage(){
  const { logout } = useContext(AuthContext);
  
  async function handleLogout(){
    await logout();
  }



    return (
        <S.Container>
          <S.ButtonLogout onClick={handleLogout}>Sair</S.ButtonLogout>
        </S.Container>
    );
}

export  default HomePage;