import React, { Component } from "react";

import Input from "./Input";
import { Results } from "./Results";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isGoing: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const { people } = this.props;
    const personName = e.target.name;

    if (e.target.checked) {
      const value = people.find(obj => obj.name === personName);

      this.setState({ isGoing: [...this.state.isGoing, value] });
    } else {
      this.setState({
        isGoing: this.state.isGoing.filter(({ name }) => {
          return name !== personName;
        })
      });
    }
  }

  render() {
    const { venues, people } = this.props;
    return (
      <div>
        <Input people={people} onInputChange={this.handleInputChange} />
        <Results venues={venues} isGoing={this.state.isGoing} />
      </div>
    );
  }
}

export default App;
