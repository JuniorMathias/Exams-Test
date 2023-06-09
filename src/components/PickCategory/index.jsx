import { useContext } from "react";

import { QuizContext } from "../../contexts/quiz";

import ads from '../../assets/ads.jpg';
import redes from '../../assets/redes.jpg';

import * as S from './styles';


const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  function chooseCategoryAndReorderQuestions(category) {
    console.log(category)
    dispatch({ type: "START_GAME", payload: category });

    dispatch({ type: "REORDER_QUESTIONS" });
  }

  return (
    <S.Category>
      <S.ButtonLogout to="/home">Início</S.ButtonLogout>
      <S.Form >
      {quizState.questions.map((question) => (
        <S.Button
          onClick={() => chooseCategoryAndReorderQuestions(question.category)}
          key={question.category}
        >
          {question.category === "Análise e Desenvolvimento de Sistemas" 
            ? 
              <S.Span style={{alignItems: 'center',flexDirection: 'column', display:'flex'}}>
                <S.Link to="/provas" >
                  Análise e Desenvolvimento de Sistemas
                </S.Link>
                <S.Link to="/provas" >
                  <img src={ads} width={300} height={300} alt="profile pic" className='profilePic'/>
                </S.Link>
              </S.Span>   
            : 
              <S.Span style={{alignItems: 'center',flexDirection: 'column', display:'flex'}}>
              <S.Link to="/provas">
                Rede de computadores
              </S.Link>
              <S.Link to="/provas" >
                <img src={redes} width={300} height={300} alt="profile pic" className='profilePic'/>
              </S.Link>
            </S.Span>
  
            }
        </S.Button>
      ))}
      </S.Form>
    </S.Category>
  );
};

export default PickCategory;
