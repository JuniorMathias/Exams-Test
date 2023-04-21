import * as S from './styles';
import { useState, useContext } from 'react';
//import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../contexts/auth'

export default function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, loadingAuth,error } = useContext(AuthContext);

function handleSubmit(e){
  e.preventDefault();
  
  if(email !== '' && password !== ''){
    signIn(email, password);
  }else{
  }

}


  return(
  <>
  <S.Container>
  <S.Content>
    <S.LoginArea>
      <S.MyIcon src={logo} alt="Logo System" />
    </S.LoginArea>
    <S.Title>Login</S.Title>
      <S.Span>faça seu login</S.Span>
      <S.Form onSubmit={handleSubmit}>
        <S.Input
          type="text"
          placeholder="Digite seu email..."
          value={email}
          onChange={(e) => [setEmail(e.target.value)]}
        />
        <S.Input
          type="password"
          placeholder="******"
          value={password}
          onChange={(e) => [setPassword(e.target.value)]}
        />
      <S.labelError>{error}</S.labelError>
      <S.Button type="submit">{loadingAuth ? 'Carregando...' : 'Login'}</S.Button>
      
      <S.LinkPassword to="/">
        Esqueceu senha ?
      </S.LinkPassword>
    </S.Form>
    
    <S.Link to="/register">
      Ainda não possui uma conta? Cadastrar-se
    </S.Link>
    </S.Content>

  </S.Container>
  </>
  )
}