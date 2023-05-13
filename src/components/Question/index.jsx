import { useContext, useState } from "react";
import { QuizContext } from "../../contexts/quiz";
import * as S from './styles';

import Option from "../Option";

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const [optionUser, setOptionUser] = useState(null); // Adiciona o estado para a variável optionUser

    const currentQuestion = quizState.questions[quizState.currentQuestion];

    const onSelectOption = (option) => {
        setOptionUser(option); // Atualiza o valor da variável optionUser quando uma opção é selecionada
    };

    const onNextQuestion = () => {
        dispatch({
            type: "CHECK_ANSWER",
            payload: { answer: currentQuestion.answer, optionUser }
        });
        dispatch({ type: "CHANGE_QUESTION" });
    };
    const onBackQuestion = (option) => {
        setOptionUser(option);
        dispatch({ type: "BACK_QUESTION" });
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
            {quizState.currentQuestion > 0 && (
                <S.Button onClick={onBackQuestion}>
                    Voltar
                </S.Button>
            )}
            {/* Verifica se uma opção foi selecionada para habilitar o botão */}
            {optionUser && (
                <S.Button onClick={onNextQuestion}>
                    Continuar
                </S.Button>
            )}
        </S.Question>
    );
};

export default Question;
