import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { SHOW_ALL, SHOW_EXAM, SHOW_REVIEW } from '../constants/QuestionFilters'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_EXAM]: 'Exam',
  [SHOW_REVIEW]: 'Review'
}

export default class Footer extends Component {
  static propTypes = {
    completedCount: PropTypes.number.isRequired,
    index:PropTypes.number.isRequired,
    activeCount: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    filter: PropTypes.string.isRequired,
    onNextQuestion: PropTypes.func.isRequired,
    onPrevQuestion: PropTypes.func.isRequired,
    onShow: PropTypes.func.isRequired
  }

  renderTodoCount() {
    const { activeCount } = this.props
    const itemWord = Math.abs(activeCount) === 1 ? 'option' : 'options'

    if(activeCount < 0){
        return (
          <span className="todo-count">
            <strong>{Math.abs(activeCount)}</strong> extra {itemWord}
          </span>
        )
    }else{
        return (
          <span className="todo-count">
            <strong>{activeCount || 'No'}</strong> {itemWord} left
          </span>
        )
    }
  }

  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter]
    const { filter: selectedFilter, onShow } = this.props
    console.log(filter)
    return (
      <a className={classnames({ selected: filter === selectedFilter })}
         style={{ cursor: 'pointer' }}
         onClick={() => onShow(filter)}>
        {title}
      </a>
    )
  }

  renderNextButton() {
    const { completed, onNextQuestion } = this.props

    console.log(this.props)
    if (completed) {
      return (
        <button className="clear-completed"
                onClick={onNextQuestion} >
          Next
        </button>
      )
    }
  }

  renderPrevButton() {
    const { index, onPrevQuestion } = this.props

    console.log(this.props)
    if (index > 1) {
      return (
        <button className="prev-button"
                onClick={onPrevQuestion} >
          Prev
        </button>
      )
    }
  }

  render() {
    return (
      <footer className="footer">
        {this.renderTodoCount()}

        <ul className="filters">
          {[ SHOW_ALL, SHOW_EXAM, SHOW_REVIEW ].map(filter =>
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          )}
        </ul>
        {this.renderNextButton()}
        {this.renderPrevButton()}
      </footer>
    )
  }
}
