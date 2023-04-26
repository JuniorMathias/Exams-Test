import * as S from './styles';
import { useState, useContext } from 'react';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../contexts/auth'
import { MdEmail } from 'react-icons/md';
export default function RecoverPassword(){
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState('');
  const { recoverPassword,loadingAuth,errorRecover } = useContext(AuthContext);

async function handleSubmit(e){
  e.preventDefault();
  
  if(email !== ''){
    recoverPassword(email);
    setEmail("");
  }else{
    setErrors("Digite um email");
  }

}
  return(
  <>
  <S.Container>
  <S.Content>
    <S.LoginArea>
      <S.MyIcon src={logo} alt="Logo System" />
    </S.LoginArea>
    <S.Title>Recuperar Senha</S.Title>
      <S.Span>Enviaremos um email de recuperação...</S.Span>
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
        <S.labelError>{errors}</S.labelError>
        <S.labelError>{errorRecover}</S.labelError>
      <S.Button type="submit">{loadingAuth ? 'Carregando...' : 'Acessar'}</S.Button>
      
    </S.Form>
    
    <S.Link to="/">Já possui conta? Faça o login</S.Link>
    </S.Content>

  </S.Container>
  </>
  )
}