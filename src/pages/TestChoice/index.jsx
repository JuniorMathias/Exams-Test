import * as S from './styles';
import logo from '../../assets/logo.png';
import NavBar from '../../components/NavBar';
import ads from '../../assets/ads.jpg';
import redes from '../../assets/redes.jpg';

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
        <S.Span>
          <S.Link to="/register" >
            Analise e Desenvolvimento de Sistemas
          </S.Link>
          <img src={ads} width={300} height={300} alt="profile pic" className='profilePic'/>
        </S.Span>   
        <S.Span >
          <S.Link to="/register" style={{marginLeft:'30px'}}>
            Redes de computadores
          </S.Link>
          <img src={redes} width={300} height={300} alt="profile pic" className='profilePic'/>
        </S.Span>
    </S.Form>
    
    
    </S.Content>

  </S.Container>
  </>
  )
}