import React, { Component } from "react";
import "./index.css";

export default class UserList extends Component {
  render() {
    const { users, isFirst, isLoading, err } = this.props;
    return (
      <div className="row">
        {isFirst ? (
          <h2>Welcome! Please enter a keyword to search.</h2>
        ) : isLoading ? (
          <h2>Loading...</h2>
        ) : err ? (
          <h2 style={{ color: "red" }}>{err}</h2>
        ) : (
          users.map((user) => (
            <div key={user.id} className="card">
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                <img src={user.avatar_url} style={{ width: "100px" }} alt="avatar" />
              </a>
              <p>{user.login}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}
