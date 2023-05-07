import { useContext } from "react";
import { QuizContext } from "../../contexts/quiz";
import * as S from './styles';

import Option from "../Option";


const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];

    const onSelectOption = (option) => {
      dispatch({
        type: "CHECK_ANSWER",
        payload: { answer: currentQuestion.answer, option },
      });
    };
  return (
    <S.Question>
      <S.P>Questão {quizState.currentQuestion + 1} de {quizState.questions.length}  </S.P> 
        <S.H2>{currentQuestion.question}  </S.H2>
        <S.OptionsContainer>
          {currentQuestion.options.map((option) => (
            <Option
              option={option}
              key={option}
              answer={currentQuestion.answer}
              selectOption={() => onSelectOption(option)}
              hide={quizState.optionToHide === option ? "hide" : null}
            />
          ))}
        </S.OptionsContainer>

        {/* ver se a questão está selecionado e ai habilita */}
        {quizState.answerSelected && (
          <S.Button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}> Continuar </S.Button>
        )}
    </S.Question>
  );
};

export default Question;