import { useContext,useEffect } from "react";

import * as S from './styles';

import Welcome from '../../components/Welcome';
import Question from '../../components/Question';
import GameOver from '../../components/GameOver';
import PickCategory from '../../components/PickCategory';

import { QuizContext } from "../../contexts/quiz";



export default function AdsTest(){
  const [quizState, dispatch] = useContext(QuizContext);

  


  return(
  <>
  <S.Container>
    <S.Content>
      <h1>Quiz de Programação</h1>
      {/* verificando o estagio da prova pra mostrar*/}
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <PickCategory />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
      
    </S.Content>
  </S.Container>
  </>
  )
}