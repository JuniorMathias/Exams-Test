import { useContext, useState } from "react";
import { QuizContext } from "../../contexts/quiz";
import * as S from './styles';

import Option from "../Option";


const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    
    //perguntas 
    const currentQuestion = quizState.questions[quizState.currentQuestion];
    
    const onSelectOption = (optionUser) => {
      let valor = optionUser;
      dispatch({
          type: "CHECK_ANSWER",
          payload: { answer: currentQuestion.answer,optionUser:valor, valor }
      });
      
  };

    return (
        <S.Question>
            <S.P>Questão {quizState.currentQuestion + 1} de {quizState.questions.length}  </S.P>
            <S.H2>{currentQuestion.question}  </S.H2>
            <S.OptionsContainer>
                {currentQuestion.options.map((optionMap) => (
                    <Option
                        option={optionMap}
                        key={optionMap}
                        answer={currentQuestion.answer}
                        selectOption={() => onSelectOption(optionMap)}
                    />
                ))}
            </S.OptionsContainer>

            {/* ver se a questão está selecionado e ai habilita */}
                <S.Button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
                    Continuar
                </S.Button>
        </S.Question>
    );
};

export default Question;