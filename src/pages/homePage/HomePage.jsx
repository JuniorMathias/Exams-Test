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
    return (
      <>
        <S.Container>
          <S.ButtonScore onClick={buscarPost}>buscar</S.ButtonScore>
          <S.ButtonLogout onClick={handleLogout}>Sair</S.ButtonLogout>
          <ul>
        {post.map((post) => {
          return(
            <li key={post.id}>
              <strong>Curso {post.id}</strong> <br/>
              <span>Nota {post.scoreAds}</span> <br/>
            </li>
          )
          })}
         </ul>
        </S.Container>
      </>
    );
}

export  default HomePage;