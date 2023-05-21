import * as S from './styles';
import { AuthContext } from '../../contexts/auth';
import { useContext } from 'react';
import NavBar from '../../components/NavBar';
import { useState, useEffect } from 'react';
import { doc, setDoc, getDoc,getDocs, collection } from 'firebase/firestore';
import { db, firebase } from '../../../src/services/firebaseConnection';


function HomePage(){
  const { logout } = useContext(AuthContext);
  const [scoreAds, setScoreAds] = useState('');
  const [post, setPosts] = useState([]);
  
  async function handleLogout(){
    await logout();
  }
  
  useEffect(() =>{
    async function buscarPost(){
      const postRef = collection(db, "Notas" );
      await getDocs(postRef)
      .then((snapshot) => {
        let lista = [];
        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            scoreAds: doc.data().studentScore
          })
        })
        console.log(lista);
        setPosts(lista);
      })
      .catch((error) => {
        alert("Erro ao buscar");
      })
    }
    buscarPost();
    return() => {
    }
  }, []);
    return (
      <>
      <NavBar />
        <S.Container>
        <S.H2 style={{textTransform:"uppercase"}}>Registro de sua última prova de cada curso</S.H2>
            {post.length > 0 ?
            <S.Content className='content'> 
            <S.Table>
              <thead>
              <S.Tr>
                <S.Th scope="col">Curso</S.Th>
                <S.Th scope="col">Nota</S.Th>
              </S.Tr>
              </thead>
              <S.Tbody>
                {post.map((post, index) =>{
                  return (
                    <S.Tr key={index}>
                      <S.Td>{post.id}</S.Td>
                      <S.Td>{post.scoreAds}</S.Td>
                    </S.Tr>
                  )
                })}
              </S.Tbody>
            </S.Table>
          </S.Content>
            : 
            <>
            <S.ContainerBlank>
                <S.Box1>
                  <S.Main>
                    <S.H2>Análise e Desenvolvimento de Sistemas</S.H2>
                    <S.Para>
                      O curso de Análise e Desenvolvimento de Sistemas é voltado para o estudo e aplicação de técnicas de programação, banco de dados e análise de sistemas. Prepare-se para uma carreira em desenvolvimento de software e gestão de projetos.
                    </S.Para>
                    <S.Para>
                      Clique no botão abaixo e faça seu teste
                    </S.Para>
                    
                    <S.Link to="/provas" >
                        Análise e Desenvolvimento de Sistemas
                    </S.Link>
                  </S.Main>  
                </S.Box1>
                <S.Box1>
                  <S.Main>
                    <S.H2>Redes de Computadores</S.H2>
                    <S.Para>
                      <S.PRedes>
                        O curso de Redes de Computadores aborda conceitos e práticas relacionadas ao projeto, implementação e administração de redes. Aprenda sobre protocolos de comunicação, segurança de redes e gerenciamento de infraestrutura de rede.
                      </S.PRedes>
                    </S.Para>
                    <S.Para>
                      Clique no botão abaixo e faça seu teste
                    </S.Para>
                    <S.Link to="/provas">
                      Rede de computadores
                    </S.Link>
                  </S.Main>  
                </S.Box1>
            </S.ContainerBlank>
          </>
            }
          
        </S.Container>
      </>
    );
}

export  default HomePage;