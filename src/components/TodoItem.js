import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class TodoItem extends Component {
  static propTypes = {
    qid: PropTypes.number.isRequired,
    option: PropTypes.object.isRequired,
    optionSelected: PropTypes.func.isRequired,
    optionDeleted: PropTypes.func.isRequired,
  }

  state = {
    checked: false
  }

  componentWillUpdate(nextProps, nextState){
    const {qid} = this.props;

    if(qid !== nextProps.qid){
      this.setState({checked: this.props.checked})
    }
  }

  handleClick = () => {
    this.setState((prevState) => ({
      checked: !prevState.checked
    }));
  }

  handleClick = () => {
    const { qid, option, optionDeleted, optionSelected } = this.props

    !this.state.checked ? optionSelected(qid, option.id) : optionDeleted(qid, option.id)

    this.setState((prevState) => ({
      checked: !prevState.checked
    }));
  }

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editing: false })
  }

  render() {
    const { option, optionDeleted, optionSelected } = this.props

    let element = (
      <div className="view">
        <input className="toggle"
               type="checkbox"
               checked={this.state.checked}
               onChange={this.handleClick} />
        <label onClick={this.handleClick}>
          {option.text}
        </label>
      </div>
    )

    return (
      <li className={classnames({
        selected: this.state.checked
      })}>
        {element}
      </li>
    )
  }
}
