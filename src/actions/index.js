import * as types from '../constants/ActionTypes'

export const markReview = id => ({ type: types.MARK_REVIEW, id })
export const nextQuestion = () => ({ type: types.NEXT_QUESTION })
export const prevQuestion = () => ({ type: types.PREV_QUESTION })
export const optionSelected = (qid, oid) => ({ type: types.OPTION_SELECTED, qid, oid })
export const optionDeleted = (qid, oid) => ({ type: types.OPTION_DELETED, qid, oid })

export const addTodo = text => ({ type: types.ADD_TODO, text })
export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
export const completeAll = () => ({ type: types.COMPLETE_ALL })
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })
