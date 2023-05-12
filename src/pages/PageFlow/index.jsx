import { useContext,useEffect } from "react";

import * as S from './styles';

import Welcome from '../../components/Welcome';
import Question from '../../components/Question';
import GameOver from '../../components/GameOver';
import PickCategory from '../../components/PickCategory';

import { QuizContext } from "../../contexts/quiz";

import logo from '../../assets/logo.png';


export default function PageFlow(){
  const [quizState, dispatch] = useContext(QuizContext);

  


  return(
  <>
  <S.Container>
    <S.Content>
    <S.LoginArea>
      <S.MyIcon src={logo} alt="Logo System" />
    </S.LoginArea>

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