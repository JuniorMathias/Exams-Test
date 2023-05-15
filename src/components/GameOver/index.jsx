import { useContext } from "react";

import { QuizContext } from "../../contexts/quiz";
import { useState, useEffect } from 'react';
import { doc, setDoc  } from 'firebase/firestore';
import { db } from '../../../src/services/firebaseConnection';

import * as S from './styles';

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [studentScore, setStudentScore] = useState('');

  async function handleAdd(){
    await addDoc(collection(db, "posts"), {
      titulo: titulo,
      autor: autor,
    })
    .then(() => {
        if(titulo.length === 0  && autor.length === 0){
          alert("vazio");
        }else{
          setAutor('');
          setTitulo('');
          alert("Dados Registrados no Banco");
        }
        
      })
      .catch((error) => {
        alert("Gerou Erro" + error);
      })
    
  }
 

  return (
    <S.GameOver>
      <S.H2>Fim de jogo!</S.H2>
      <S.P>Pontuação: {quizState.score}</S.P>
      <S.P>
        Você acertou {quizState.score} de {quizState.questions.length}{" "}
        perguntas.
      </S.P>
      <S.Button
      onChange={ (e) => setStudentScore(e.target.value)}
      onClick={() => dispatch({ type: "NEW_GAME" })}
      onClick={handleAdd}
      >Reiniciar
      </S.Button>
    </S.GameOver>
  );
};

export default GameOver;
