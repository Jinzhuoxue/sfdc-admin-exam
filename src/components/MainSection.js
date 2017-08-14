import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import Footer from './Footer'
import _ from 'underscore'
import { SHOW_ALL, SHOW_EXAM, SHOW_REVIEW } from '../constants/QuestionFilters'

const QUESTION_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_EXAM]: question => !question.isExam,
  [SHOW_REVIEW]: question => !question.isMarked
}

export default class MainSection extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired,
    questions: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  state = { filter: SHOW_ALL }

  handlePrevQuestion = () => {
    this.props.actions.prevQuestion()
  }

  handleNextQuestion = () => {
    this.props.actions.nextQuestion()
  }

  handleShow = filter => {
    console.log(filter)
    this.setState({ filter: filter })
  }

  /*renderToggleAll(completedCount) {
    const { todos, actions } = this.props
    if (todos.length > 0) {
      return (
        <input className="toggle-all"
               type="checkbox"
               checked={completedCount === todos.length}
               onChange={actions.completeAll} />
      )
    }
  }*/

  renderFooter(completedCount) {
    console.log('renderFooter')
    const { questions, question } = this.props
    const { filter } = this.state
    const activeCount = question.answer.length - question.selectedAnswer.length

    if (questions.length) {
      return (
        <Footer completedCount={completedCount}
                index={question.id}
                activeCount={activeCount}
                completed={question.completed}
                filter={filter}
                onNextQuestion={this.handleNextQuestion}
                onPrevQuestion={this.handlePrevQuestion}
                onShow={this.handleShow} />
      )
    }
  }

  render() {
    const { question, questions, actions } = this.props
    const { filter } = this.state

    const filteredTodos = questions.filter(QUESTION_FILTERS[filter])
    const completedCount = questions.reduce((count, question) =>
      question.completed ? count + 1 : count,
      0
    )

    return (
      <section className="main">
        <ul className="todo-list">
          {question.options.map(opt =>
            <TodoItem key={opt.id} qid={question.id} option={opt} {...actions} />
          )}
        </ul>
        {this.renderFooter(completedCount)}
      </section>
    )
  }
}
