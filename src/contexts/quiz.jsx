import { createContext, useReducer } from "react";
import questions from "../data/questions_complete";


//estágios da prova
const STAGES = ["Start", "Category", "Playing", "End"];

//estado inicial quando carrega a página
const initialState = {
  gameStage: STAGES[0], //estagio atual
  questions, // perguntas
  currentQuestion: 0
};



const quizReducer = (state, action) => {
  console.log(state, action);
  //inicio o estagio da prova
  switch (action.type) {
    case "CHANGE_STAGE":
      return state;
      default:
        return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  //recebe a modificação de estado 
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
