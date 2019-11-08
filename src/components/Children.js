import React from "react";
import * as API from "../api";

export default class Children extends React.Component {
  state = {
    children: []
  };

  async componentDidMount() {
    const children = await API.getChildren().then(data => {
      return data.children;
    });

    this.setState({ children });
  }

  render() {
    return (
      <div>
        <h1>Children</h1>
        <ul>
          {this.state.children.map(child => (
            <li key={child.childId}>{child.name.fullName}</li>
          ))}
        </ul>
      </div>
    );
  }
}
