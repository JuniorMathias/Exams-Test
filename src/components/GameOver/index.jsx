import { useContext } from "react";

import { QuizContext } from "../../contexts/quiz";

import * as S from './styles';

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <S.GameOver>
      <S.H2>Fim de jogo!</S.H2>
      <S.P>Pontuação: {quizState.score}</S.P>
      <S.P>
        Você acertou {quizState.score} de {quizState.questions.length}{" "}
        perguntas.
      </S.P>
      <S.Button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</S.Button>
    </S.GameOver>
  );
};

export default GameOver;
