import { useContext, useState } from "react";
import { QuizContext } from "../../contexts/quiz";
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../src/services/firebaseConnection';
import { toast } from 'react-toastify';

import * as S from './styles';

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [studentScore, setStudentScore] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  async function handleAdd() {
    if (quizState.selectCategory === "Análise e Desenvolvimento de Sistemas") {
      await setDoc(doc(db, "Notas", "Análise e Desenvolvimento de Sistemas"), {
        studentScore: quizState.score
      })
        .then(() => {
          console.log("deu ads");
        })
        .catch((error) => {
          toast.error("Ops... deu erro!" + error);
        });
    } else if (quizState.selectCategory === "Rede de computadores") {
      await setDoc(doc(db, "Notas", "Rede de computadores"), {
        studentScore: quizState.score
      })
        .then(() => {
          console.log("deu ads");
        })
        .catch((error) => {
          toast.error("Ops... deu erro!" + error);
        });
    }

    setIsButtonClicked(true);
  }

  return (
    <S.GameOver>
      <S.H2>Fim de jogo!</S.H2>
      <S.Para>Pontuação: {quizState.score}</S.Para>
      <S.Para>
        Você acertou {quizState.score} de {quizState.questions.length} perguntas.
      </S.Para>
      <S.Button
        onChange={(e) => setStudentScore(e.target.value)}
        onClick={handleAdd}
      >
        Finalizar
      </S.Button>
      {isButtonClicked && <S.Link to="/home" onClick={() => dispatch({ type: "NEW_GAME" })}>Início</S.Link>}
    </S.GameOver>
  );
};

export default GameOver;
