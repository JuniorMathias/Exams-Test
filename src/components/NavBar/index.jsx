import * as S from './styles';
import { AuthContext } from '../../contexts/auth';
import { useContext } from 'react';
import avatar from '../../assets/avatar.png';
import { FiHome, FiUser, FiSettings  } from 'react-icons/fi';


export default function Header(){
    //GETTING THE DATA FROM USERS I CAN USE USER.NAME EX
    const { user,logout } = useContext(AuthContext);
    async function handleLogout(){
        await logout();
      }

    return(
      <> 
        <S.SideBar>
            <S.CoverAvatar>
                <S.Avatar src={user.avatarUrl == null ? avatar : user.avatarUrl } alt="Avatar" />
            </S.CoverAvatar>
        <S.Link to="/home">
            <FiHome color='#fff' size={24} />
            Home
        </S.Link>
        <S.Link to="/Customers">
            <FiUser color='#fff' size={24} />
            Customers
        </S.Link>
        <S.Link to="/perfil">
            <FiSettings color='#fff' size={24} />
            Configurações
        </S.Link>
        <S.Link onClick={handleLogout}>
            <FiSettings color='#fff' size={24} />
            Sair
        </S.Link>
        </S.SideBar>
      </> 
    )
}