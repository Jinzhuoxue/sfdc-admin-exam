import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Header extends Component {
  static propTypes = {
    question : PropTypes.object.isRequired,
    markReview: PropTypes.func.isRequired
  }

  handleMarkReview = () => {
      this.props.markReview(this.props.question.id)
  }

  render() {
    return (
      <header className="header">
        <h1>Exam</h1>
        <div className="view">
         <label onClick={this.handleMarkReview}>
           {this.props.question.title}
         </label>
       </div>

      </header>
    )
  }
}
