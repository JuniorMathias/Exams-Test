import * as S from './styles';
import { AuthContext } from '../../contexts/auth';
import { useContext } from 'react';
import avatar from '../../assets/avatar.png';
import { FiHome, FiUser } from 'react-icons/fi';
import { ImExit } from 'react-icons/im';
import { AiOutlineForm } from 'react-icons/ai';


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
            Início
        </S.Link>
        <S.Link to="/home">
            <AiOutlineForm color='#fff' size={24} />
            Prova
        </S.Link>
        <S.Link to="/perfil">
            <FiUser color='#fff' size={24} />
            Perfil
        </S.Link>
        <S.Link onClick={handleLogout}>
            <ImExit color='#fff' size={24} />
            Sair
        </S.Link>
        </S.SideBar>
      </> 
    )
}