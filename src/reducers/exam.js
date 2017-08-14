import _ from 'underscore'
import store from 'store'
import jsonfile from 'jsonfile'
import { OPTION_SELECTED, OPTION_DELETED, MARK_REVIEW, NEXT_QUESTION, PREV_QUESTION } from '../constants/ActionTypes'
import { questions } from './questions'

const nextQuestionId = store.get('nextQuestionId') || 1;

const initialState = {
  selectedQuestionId : nextQuestionId,
  questions : questions
}

export default function exam(state = initialState, action) {

  console.log(action)

  switch (action.type) {
    case OPTION_SELECTED:
        console.log(state.questions[0].selectedAnswer)
        return {
          ...state,
          questions : state.questions.map(question =>
            question.id === action.qid ?
              { ...question,
                selectedAnswer : _.union(question.selectedAnswer, [action.oid]),
                completed : !_.isEmpty(_.union(question.selectedAnswer, [action.oid])) && _.isEmpty(_.difference(_.union(question.selectedAnswer, [action.oid]),question.answer))
              } : question
          )
        }
    case OPTION_DELETED:
          console.log(state.questions[0].selectedAnswer)
          return {
            ...state,
            questions : state.questions.map(question =>
              question.id === action.qid ?
                { ...question,
                  selectedAnswer: question.selectedAnswer.filter( val => val !== action.oid),
                  completed : !_.isEmpty(question.selectedAnswer.filter( val => val !== action.oid)) && _.isEmpty(_.difference(question.selectedAnswer.filter( val => val !== action.oid), question.answer))
                } :
                question
            )
          }
    case MARK_REVIEW:
      return {
        ...state,
        questions : state.questions.map(question =>
          question.id === action.id ?
            { ...question, marked: true} :
            question
        )
      }

    case NEXT_QUESTION:
      console.log(state.selectedQuestionId);
      const {questions} = state
      let nextQuestionId = state.selectedQuestionId+1 > questions.length ? 1 : state.selectedQuestionId+1
      store.set('nextQuestionId', nextQuestionId)
      return {...state,
              selectedQuestionId : nextQuestionId,
              questions : state.questions.map(question =>
              question.id === nextQuestionId ?
                { ...question, selectedAnswer: []} :
                question)
              }

    case PREV_QUESTION:
        console.log(state.selectedQuestionId);
        let prevQuestionId = state.selectedQuestionId-1 || state.selectedQuestionId
        store.set('nextQuestionId', prevQuestionId)
        return {...state,
                selectedQuestionId : prevQuestionId,
                questions : state.questions.map(question =>
                question.id === prevQuestionId ?
                  { ...question, selectedAnswer: []} :
                  question)
                }
    default:
      return state
  }
}
