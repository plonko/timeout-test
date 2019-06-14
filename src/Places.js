import React, { Component } from "react";

class Places extends Component {
  render() {
    const { message, places } = this.props;

    return (
      <div>
        <div>{message}</div>
        <ul>
          {places.map(({ name }) => (
            <li key={name}> {name} </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Places;
