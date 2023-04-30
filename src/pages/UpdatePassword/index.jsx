import * as S from './styles';
import { useState, useContext } from 'react';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../contexts/auth'
import { MdEmail } from 'react-icons/md';
import NavBar from '../../components/NavBar';


export default function UpdatePassword(){
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState('');
  const { recoverPassword,loadingAuth,errorRecover } = useContext(AuthContext);

async function handleSubmit(e){
  e.preventDefault();
  
  //essa função de recoverPassword é a mesma de esqueceu senha então não fiz outro hooks
  if(email !== ''){
    recoverPassword(email);
    setEmail("");
  }else{
    setErrors("Digite um email");
  }

}
  return(
  <>
  <NavBar />
  <S.Container>
  <S.Content>
    <S.LoginArea>
      <S.MyIcon src={logo} alt="Logo System" />
    </S.LoginArea>
    <S.Title>Atualizar Senha</S.Title>
      <S.Span>Enviaremos um email de atualização..</S.Span>
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
      <S.Button type="submit">{loadingAuth ? 'Carregando...' : 'Enviar'}</S.Button>
      
    </S.Form>
    </S.Content>

  </S.Container>
  </>
  )
}