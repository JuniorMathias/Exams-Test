import { useContext } from "react";
import { QuizContext } from "../../contexts/quiz";
import * as S from './styles';


const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    console.log(quizState);
  return (
    <S.Question>
      <S.P>Questão {quizState.currentQuestion + 1} de {quizState.questions.length}  </S.P> 
      <S.H2>Questão atual  </S.H2>
      <S.OptionsContainer>
        <S.P>Opções </S.P> 
      </S.OptionsContainer>
      <S.Button> Continuar </S.Button>
    </S.Question>
  );
};

export default Question;