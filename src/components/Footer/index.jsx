import React, { Component } from "react";
import "./index.css";

export default class index extends Component {
  // 全选的回调
  handleToggleAll = (e) => {
    this.props.checkAllTodo(e.target.checked);
  };
  // 清除已完成的回调
  handleClearCompleted = () => {
    this.props.clearAllDone();
  };
  render() {
    const { todos } = this.props;
    // 已完成的个数
    const completedCount = todos.filter((todo) => todo.done === true).length;
    // 全部的个数
    const totalCount = todos.length;
    return (
      <div className="todo-footer">
        <div className="footer-left">
          <input
            type="checkbox"
            onChange={this.handleToggleAll}
            checked={completedCount === totalCount && totalCount !== 0 ? true : false}
          />
          <span>
            已完成 <b>{completedCount}</b> / 全部 <b>{totalCount}</b>
          </span>
        </div>
        <button onClick={this.handleClearCompleted} className="btn-clear">
          清除已完成任务
        </button>
      </div>
    );
  }
}
