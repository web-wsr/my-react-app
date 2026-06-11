import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "../Item";
import "./index.css";

export default class index extends Component {
  // 对接收的props进行类型、必要性的限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleleteTodo: PropTypes.func.isRequired,
  };
  render() {
    const { todos, updateTodo, deleleteTodo } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((todo) => (
          <Item key={todo.id} {...todo} updateTodo={updateTodo} deleleteTodo={deleleteTodo} />
        ))}
      </ul>
    );
  }
}
