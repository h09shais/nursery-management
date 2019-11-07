import React from "react";
import * as API from "../api";

export default class Users extends React.Component {
  state = {
    users: []
  };
  async componentDidMount() {
    const users = await API.getUser();
    this.setState({ users });
  }
  render() {
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
