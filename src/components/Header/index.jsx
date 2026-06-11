import React, { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import "./index.css";

export default class index extends Component {
  // 对接收的props进行类型、必要性的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };
  handleKeyUp = (event) => {
    // 结构赋值
    const { keyCode, target } = event;
    if (keyCode !== 13) return;
    if (!target.value.trim()) {
      return alert("输入不能为空");
    }
    console.log(target.value);
    const todoObj = {
      id: nanoid(),
      name: target.value,
      done: false,
    };
    console.log(todoObj);
    this.props.addTodo(todoObj);
    target.value = ""; // 清空输入框
  };

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    );
  }
}
