import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component {
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "打代码", done: false },
    ],
  };

  addTodo = (todoObj) => {
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({ todos: newTodos });
  };
  //更新todo对象
  updateTodo = (id, done) => {
    //获取状态中的todos
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, done: done };
      else return todo;
    });
    this.setState({ todos: newTodos });
  };
  // 删除todo对象
  deleleteTodo = (id) => {
    //获取状态中的todos
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newTodos });
  };
  // 全选
  checkAllTodo = (done) => {
    //获取状态中的todos
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      return { ...todo, done: done };
    });
    this.setState({ todos: newTodos });
  };
  // 清除所有已完成的todo对象
  clearAllDone = () => {
    //获取状态中的todos
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => !todo.done);
    this.setState({ todos: newTodos });
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          {/* 头部输入区 */}
          <Header addTodo={this.addTodo} />
          {/* 列表区 */}
          <List todos={todos} updateTodo={this.updateTodo} deleleteTodo={this.deleleteTodo} />
          {/* 底部统计区 */}
          <Footer todos={todos} clearAllDone={this.clearAllDone} checkAllTodo={this.checkAllTodo} />
        </div>
      </div>
    );
  }
}
