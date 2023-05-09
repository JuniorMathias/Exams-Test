import { useContext } from "react";

import { QuizContext } from "../../contexts/quiz";

import * as S from './styles';


//esse option é que vem direto component, e passando o selectOp.. e answer vindo do question
const Option = ({ option, selectOption, isSelected }) => {
console.log(option)
  return (
    <S.Option>
        <input
          type="radio"
          name="answer"
          value={option}
          checked={isSelected}
          onChange={() => selectOption(option)}
          onClick={() => selectOption()}
        />
          <S.P>{option}</S.P>
    </S.Option>
  );
};

export default Option;
