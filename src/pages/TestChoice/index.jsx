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
    <S.Title>Escolha um curso</S.Title>
      <S.Span>Escolha qual prova gostaria de fazer</S.Span>
     
      <S.Form >

        <S.Span style={{alignItems: 'center',flexDirection: 'column', display:'flex'}}>
          <S.Link to="/adsprova" >
            Análise e Desenvolvimento de Sistemas
          </S.Link>
          <S.Link to="/adsprova" >
            <img src={ads} width={300} height={300} alt="profile pic" className='profilePic'/>
          </S.Link>
        </S.Span>   

        <S.Span style={{alignItems: 'center',flexDirection: 'column', display:'flex'}}>
          <S.Link to="/redesprova">
            Rede de computadores
          </S.Link>
          <S.Link to="/redesprova" >
            <img src={redes} width={300} height={300} alt="profile pic" className='profilePic'/>
          </S.Link>
        </S.Span>

    </S.Form>
    
    
    </S.Content>

  </S.Container>
  </>
  )
}