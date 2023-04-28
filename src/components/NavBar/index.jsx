import * as S from './styles';
import { AuthContext } from '../../contexts/auth';
import { useContext } from 'react';
import avatar from '../../assets/avatar.png';
import { FiHome, FiUser, FiSettings  } from 'react-icons/fi';


export default function Header(){
    //GETTING THE DATA FROM USERS I CAN USE USER.NAME EX
    const { user } = useContext(AuthContext);

    return(
      <> 
        <S.SideBar>
            <S.CoverAvatar>
                <S.Avatar src={user.avatarUrl == null ? avatar : user.avatarUrl } alt="Avatar" />
            </S.CoverAvatar>
        <S.Link to="/dashboard">
            <FiHome color='#fff' size={24} />
            Dashboard
        </S.Link>
        <S.Link to="/Customers">
            <FiUser color='#fff' size={24} />
            Customers
        </S.Link>
        <S.Link to="/profile">
            <FiSettings color='#fff' size={24} />
            Settings
        </S.Link>
        </S.SideBar>
      </> 
    )
}