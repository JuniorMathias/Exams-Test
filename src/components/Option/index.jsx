import { useContext,useEffect } from "react";

import { QuizContext } from "../../contexts/quiz";

import * as S from './styles';


//esse option é que vem direto component, e passando o selectOp.. e answer vindo do question
const Option = ({ option, selectOption, isSelected }) => {
  const [quizState, dispatch] = useContext(QuizContext);
// console.log(option)
useEffect(()=> {
  //embara
  dispatch({type: "REORDER_QUESTIONS"})
}, [])
  return (
    <S.Option>
        <input
          type="radio"
          name="answer"
          value={option}
          checked={isSelected}
          onChange={() => selectOption()}
          onClick={() => selectOption()}
        />
          <S.P>{option}</S.P>
    </S.Option>
  );
};

export default Option;
