import * as S from './styles';
import { AuthContext } from '../../contexts/auth';
import { useContext } from 'react';
import NavBar from '../../components/NavBar';
import { useState, useEffect } from 'react';
import { doc, setDoc, getDoc,getDocs, collection } from 'firebase/firestore';
import { db, firebase } from '../../../src/services/firebaseConnection';
import './styles.css';


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
          
            <S.ButtonLogout onClick={handleLogout}>Sair</S.ButtonLogout>
            
            {post.length > 0 ?
            <S.Content className='content'> 
            <S.Table>
              <S.Tr>
                <S.Th scope="col">Cursos</S.Th>
                <S.Th scope="col">Notas</S.Th>
              </S.Tr>
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
            <div class="container">
                <div class="op1">
              <main>
                <h2>Análise e Desenvolvimento de Sistemas</h2>
                <p>
                  O curso de Análise e Desenvolvimento de Sistemas é voltado para o estudo e aplicação de técnicas de programação, banco de dados e análise de sistemas. Prepare-se para uma carreira em desenvolvimento de software e gestão de projetos.
                </p>
                <a href="pagina_analise_desenvolvimento.html" class="botao">Provas</a>
              </main>  
                </div>
                <div class="op2">
                <main>
                  <h2>Redes de Computadores</h2>
                  <p class="redes">
                    O curso de Redes de Computadores aborda conceitos e práticas relacionadas ao projeto, implementação e administração de redes. Aprenda sobre protocolos de comunicação, segurança de redes e gerenciamento de infraestrutura de rede.
                  </p>
                  <a href="pagina_redes_computadores.html" class="botao">Provas</a>
                </main>  
                </div>
            </div>
          </>
            }
          
        </S.Container>
      </>
    );
}

export  default HomePage;