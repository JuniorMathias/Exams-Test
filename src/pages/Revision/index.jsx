
import ads from '../../assets/ads.jpg';
import redes from '../../assets/redes.jpg';
import NavBar from '../../components/NavBar';
import * as S from './styles';


const Revision = () => {

  return (
      <>
      <NavBar />
    <S.Container>
            <S.H2>Selecione qual material você gostaria de estudar!</S.H2>
        <S.Content className='content'>
            <S.Form >
                    <S.Span style={{alignItems: 'center',flexDirection: 'column', display:'flex'}}>
                        <S.Link to="/revisaoads" >
                        Análise e Desenvolvimento de Sistemas
                        </S.Link>
                        <S.Link to="/revisaoads" >
                        <img src={ads} width={300} height={300} alt="profile pic" className='profilePic'/>
                        </S.Link>
                    </S.Span>   
                    <S.Span style={{alignItems: 'center',flexDirection: 'column', display:'flex'}}>
                    <S.Link to="/revisaoredes">
                        Rede de computadores
                    </S.Link>
                    <S.Link to="/revisaoredes" >
                        <img src={redes} width={300} height={300} alt="profile pic" className='profilePic'/>
                    </S.Link>
                    </S.Span>
            </S.Form>
      </S.Content>
    </S.Container>
    </>
  );
};

export default Revision;
