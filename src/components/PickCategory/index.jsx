import { useContext } from "react";

import { QuizContext } from "../../contexts/quiz";
import * as S from './styles';


const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  function chooseCategoryAndReorderQuestions(category) {
    dispatch({ type: "START_GAME", payload: category });

    dispatch({ type: "REORDER_QUESTIONS" });
  }

  return (
    <S.Category>
      <S.H2>Escolha uma categoria</S.H2>
      <S.P>As perguntas serão referentes a uma das linguagens abaixo:</S.P>
      {quizState.questions.map((question) => (
        <S.Button
          onClick={() => chooseCategoryAndReorderQuestions(question.category)}
          key={question.category}
        >
          {question.category}
        </S.Button>
      ))}
    </S.Category>
  );
};

export default PickCategory;
