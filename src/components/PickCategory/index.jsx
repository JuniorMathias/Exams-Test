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
      

      <S.Title>Escolha um curso</S.Title>
      <S.Span>Escolha qual prova gostaria de fazer</S.Span>
      <S.Form >
      {quizState.questions.map((question) => (
        <S.Button
          onClick={() => chooseCategoryAndReorderQuestions(question.category)}
          key={question.category}
        >
          {question.category === "Análise e Desenvolvimento de Sistemas" 
            ? 
              <S.Span style={{alignItems: 'center',flexDirection: 'column', display:'flex'}}>
                <S.Link to="/adsprova" >
                  Análise e Desenvolvimento de Sistemas
                </S.Link>
                <S.Link to="/adsprova" >
                  <img src={ads} width={300} height={300} alt="profile pic" className='profilePic'/>
                </S.Link>
              </S.Span>   
            : 
              <S.Span style={{alignItems: 'center',flexDirection: 'column', display:'flex'}}>
              <S.Link to="/redesprova">
                Rede de computadores
              </S.Link>
              <S.Link to="/redesprova" >
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
