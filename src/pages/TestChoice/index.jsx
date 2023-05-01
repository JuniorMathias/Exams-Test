import * as S from './styles';
import logo from '../../assets/logo.png';
import NavBar from '../../components/NavBar';

export default function TestChoice(){


  return(
  <>
  <NavBar />
  <S.Container>
  <S.Content>
    <S.LoginArea>
      <S.MyIcon src={logo} alt="Logo System" />
    </S.LoginArea>
    <S.Title>Login</S.Title>
      <S.Span>faça seu login</S.Span>
      <S.Form >
      
    </S.Form>
    
    <S.Link to="/register">
      Ainda não possui uma conta? Cadastrar-se
    </S.Link>
    </S.Content>

  </S.Container>
  </>
  )
}