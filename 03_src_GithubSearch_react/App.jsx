import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import UserList from "./components/UserList";

export default class App extends Component {
  // 初始化状态
  state = {
    users: [], //users:初始值为数组
    isFirst: true, //是否为第一次打开页面
    isLoading: false, //标示是否处于加载中
    err: "", //存储请求相关的错误信息
  };
  // 更新App状态的函数
  updateAppState = (stateObj) => {
    this.setState(stateObj);
  };
  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        <UserList {...this.state} />
      </div>
    );
  }
}
