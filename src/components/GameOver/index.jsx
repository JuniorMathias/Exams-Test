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
      await setDoc(doc(db, "notas", "notasAds"), {
        studentScore: quizState.score
      })
      .then(() => {
        console.log("deu ads")
        
      })
      .catch((error) => {
        alert("Gerou Erro" + error);
      })
    }
    
    function chooseCategoryAndReorderQuestions(category) {
      console.log(category)
      dispatch({ type: "START_GAME", payload: category });
  
      dispatch({ type: "REORDER_QUESTIONS" });
    }
 

  return (
    <S.GameOver>
      <S.H2>Fim de jogo!</S.H2>
      <S.P>Pontuação: {quizState.score}</S.P>
      {quizState.questions.map((question) => ( 
        <S.Button
        onClick={() => chooseCategoryAndReorderQuestions(question.category)}
        key={question.category}
      >
        </S.Button>
      ))}
      <S.P>
        Você acertou {quizState.score} de {quizState.questions.length}{" "}
        perguntas.
      </S.P>
      <S.Button
      onChange={ (e) => setStudentScore(e.target.value)}
      onClick={handleAdd}
      >Reiniciar
      </S.Button>
    </S.GameOver>
  );
};

export default GameOver;
