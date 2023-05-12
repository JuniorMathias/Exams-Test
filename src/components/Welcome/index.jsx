import { useContext } from "react";
import { QuizContext } from "../../contexts/quiz";
import * as S from './styles';


const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);


  return (
    <S.Welcome>
      <S.H2>Hora de colocar em prática seus conhecimentos</S.H2>
      <S.P>Clique no botão abaixo para começar seu teste:</S.P>
      <S.Button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>
        Iniciar
      </S.Button>
    </S.Welcome>
  );
};

export default Welcome;