import * as S from './styles';
import { useState, useContext } from 'react';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../contexts/auth'
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
export default function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, loadingAuth,error } = useContext(AuthContext);

async function handleSubmit(e){
  e.preventDefault();
  
  if(email !== '' && password !== ''){
    await signIn(email, password);
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
      <S.Row>
        <MdEmail className="icon"/>
        <S.Input
          type="text"
          placeholder="Digite seu email..."
          value={email}
          onChange={(e) => [setEmail(e.target.value)]}
        />
        </S.Row>
        <S.Row>
        <S.Input
          type="password"
          placeholder="******"
          value={password}
          onChange={(e) => [setPassword(e.target.value)]}
        /><RiLockPasswordFill class="icon"/>
        </S.Row>
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