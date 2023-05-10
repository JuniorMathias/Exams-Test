import { createContext, useReducer } from "react";
import questions from "../data/questions_complete";


//estágios da prova
const STAGES = ["Start", "Category", "Playing", "End"];

//estado inicial quando carrega a página
const initialState = {
  gameStage: STAGES[0], //estagio atual
  questions, // perguntas
  currentQuestion: 0,
  answerSelected: false,
  score: 0,
  help: false,
  optionToHide: null,
  isSelected: false,
  selectedAnswer: null
};

const quizReducer = (state, action) => {
  //inicio o estagio da prova
  switch (action.type) {
    //primeiro click 
    case "CHANGE_STAGE":
      return {
        ...state,
        gameStage: STAGES[1],
      };


      case "START_GAME":
      let quizQuestions = null;

      state.questions.forEach((question) => {
        if (question.category === action.payload) {
          quizQuestions = question.questions;
        }
      });

      return {
        ...state,
        questions: quizQuestions,
        gameStage: STAGES[2],
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
        
        //quando as perguntas chegarem ao fim o endgame vai ficar como true
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

      //inicializando o fim do jogo 
      case "NEW_GAME": {
        return initialState;
      }

      //checando as respostas
      case "CHECK_ANSWER": {
        //acabar com o loop de respostas de uma mesma pergunta
        console.log(state)
        if (state.answerSelected) return state;
        
        const answer = action.payload.answer;
        const option = action.payload.optionUser;
        const valor = action.payload.valor;
        // console.log(action);
        let correctAnswer = 0;
  
        //verificando se a resposta é igual a opção (correta)
        if (answer === option) correctAnswer = 1;
  
        return {
          ...state,
          //score muda para esse valor, está sendo atribuido um ponto a mais
          score: state.score + correctAnswer,
          answerSelected: correctAnswer,
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
