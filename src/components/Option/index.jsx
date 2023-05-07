import { useContext } from "react";

import { QuizContext } from "../../contexts/quiz";

import * as S from './styles';


//esse option é que vem direto component, e passando o selectOp.. e answer vindo do question
const Option = ({ option, selectOption, answer, hide }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <S.Option
      onClick={() => selectOption()}
      className={`
      option
        ${quizState.answerSelected && option === answer ? "correct" : ""} ${
        quizState.answerSelected && option !== answer ? "wrong" : ""
      }
        ${hide ? "hide" : ""}
        `}
    >
      <S.P>{option}</S.P>
    </S.Option>
  );
};

export default Option;
