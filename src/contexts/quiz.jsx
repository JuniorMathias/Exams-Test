import { createContext, useReducer } from "react";
import questions from "../data/questions_complete";


//estágios da prova
const STAGES = ["Start", "Playing", "Category", "End"];

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
    //primeiro click 
    case "CHANGE_STAGE":
      return {
        ...state,
        gameStage: STAGES[1],
      };

      // embaralhar as perguntas
      case "REORDER_QUESTIONS":
        const reorderedQuestions = state.questions.sort(() => {
          return Math.random() - 0.5;
        });
  
        return {
          ...state,
          questions: reorderedQuestions,
        };

      //alterar o indice da pergunta
      case "CHANGE_QUESTION": {
        //pegando a pergunta atual e adidionando mais 1
        const nextQuestion = state.currentQuestion + 1;
        let endGame = false;
  
        if (!state.questions[nextQuestion]) {
          endGame = true;
        }
  
        return {
          ...state,
          currentQuestion: nextQuestion,
          gameStage: endGame ? STAGES[3] : state.gameStage,
          answerSelected: false,
          help: false,
        };
      }



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
