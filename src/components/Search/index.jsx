import React, { Component } from "react";
import axios from "axios";
import "./index.css";

export default class Search extends Component {
  handleSearch = () => {
    // 获取用户的输入（连续解构赋值+重命名）
    const {
      keyWordElement: { value: keyWord },
    } = this;
    console.log(keyWord);
    // 发送请求前通知App更新状态
    this.props.updateAppState({ isFirst: false, isLoading: true });
    // 发送axios网络请求
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      (response) => {
        // 请求成功后通知App更新状态
        this.props.updateAppState({ users: response.data.items, isLoading: false });
      },
      (error) => {
        // 请求失败后通知App更新状态
        this.props.updateAppState({ err: error.message, isLoading: false });
      },
    );
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search GitHub Users</h3>
        <div>
          <input ref={(c) => (this.keyWordElement = c)} type="text" placeholder="enter the name you search" />
          <button onClick={this.handleSearch}>Search</button>
        </div>
      </section>
    );
  }
}
