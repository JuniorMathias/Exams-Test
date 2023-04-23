import * as S from './styles';
import { useState, useContext } from 'react';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../contexts/auth'
import { MdEmail } from 'react-icons/md';
export default function RecoverPassword(){
  const [email, setEmail] = useState('');
  const { loadingAuth,error } = useContext(AuthContext);

async function handleSubmit(e){
  e.preventDefault();
  
  if(email !== ''){
    alert('mandei email')
  }else{
    alert('digite um email')
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
      <S.Span>Digite seu email</S.Span>
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
        
      <S.labelError>{error}</S.labelError>
      <S.Button type="submit">{loadingAuth ? 'Carregando...' : 'Acessar'}</S.Button>
      
    </S.Form>
    
    <S.Link to="/">Já possui conta? Faça o login</S.Link>
    </S.Content>

  </S.Container>
  </>
  )
}