import { useContext } from "react";

import * as S from './styles';
import Welcome from '../../components/Welcome';
import Question from '../../components/Question';

import { QuizContext } from "../../contexts/quiz";



export default function AdsTest(){
  const [quizState, dispatch] = useContext(QuizContext);



  return(
  <>
  <S.Container>
    <S.Content>
      {/* verificando o estagio do game */}
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      
    </S.Content>
  </S.Container>
  </>
  )
}