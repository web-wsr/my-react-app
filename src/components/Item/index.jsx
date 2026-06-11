import React, { Component } from "react";
import "./index.css";

export default class index extends Component {
  handleToggle = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    };
  };
  // 删除todo的回调
  handleDelete = (id) => {
    console.log("handleDelete", id);
    if (window.confirm("确定删除吗？")) {
      this.props.deleleteTodo(id);
    }
  };
  render() {
    const { id, name, done } = this.props;
    return (
      <li>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleToggle(id)} />
          <span>{name}</span>
        </label>
        <button onClick={() => this.handleDelete(id)} className="btn-danger">
          删除
        </button>
      </li>
    );
  }
}
