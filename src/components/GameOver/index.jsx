import { useContext } from "react";

import { QuizContext } from "../../contexts/quiz";
import { useState, useEffect } from 'react';
import { doc, setDoc  } from 'firebase/firestore';
import { db } from '../../../src/services/firebaseConnection';
import { toast } from 'react-toastify';

import * as S from './styles';

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [studentScore, setStudentScore] = useState('');

  async function handleAdd(){
    if(quizState.selectCategory === "Análise e Desenvolvimento de Sistemas"){
      await setDoc(doc(db, "Notas", "Análise e Desenvolvimento de Sistemas"), {
        studentScore: quizState.score
      })
      .then(() => {
        console.log("deu ads")
        
      })
      .catch((error) => {
        toast.error("Ops... deu erro!" + error);
      })
    }else if("Rede de computadores"){
      await setDoc(doc(db, "Notas", "Rede de computadores"), {
        studentScore: quizState.score
      })
      .then(() => {
        console.log("deu ads")
        
      })
      .catch((error) => {
        toast.error("Ops... deu erro!" + error);
      })
    }
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
      onClick={handleAdd}
      >Reiniciar
      </S.Button>
    </S.GameOver>
  );
};

export default GameOver;
