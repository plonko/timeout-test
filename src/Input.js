import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const { onInputChange } = this.props;

    onInputChange(e);
  }

  render() {
    const { isGoing, people } = this.props;

    return (
      <div>
        {people.map(({ name }) => (
          <label key={name}>
            <input
              type="checkbox"
              name={name}
              checked={isGoing}
              onChange={this.handleInputChange}
            />
            {name}
          </label>
        ))}
      </div>
    );
  }
}

export default Input;
