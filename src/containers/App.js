import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as AppActions from '../actions'
import _ from 'underscore'

const App = ({selectedQuestionId, questions, actions}) => (
  <div>
    <Header question= {questions.find( question => question.id === selectedQuestionId)} markReview={actions.markReview} />
    <MainSection question={questions.find( question => question.id === selectedQuestionId)} questions={questions} actions={actions} />
  </div>
)

App.propTypes = {
  selectedQuestionId: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  selectedQuestionId: state.exam.selectedQuestionId,
  questions: state.exam.questions
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(AppActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
