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
          <S.Content className='content'> 
            <S.ButtonLogout onClick={handleLogout}>Sair</S.ButtonLogout>
            
            {post.length > 0 ?
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
            : <p>você não tem nada</p>}
          </S.Content>
        </S.Container>
      </>
    );
}

export  default HomePage;