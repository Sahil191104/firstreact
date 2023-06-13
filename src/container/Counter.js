import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increse = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  dicrese = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <h1>Counter class based Component</h1>
        <button onClick={this.increse}>+</button>
        <span>{this.state.count}</span>
        <button onClick={this.dicrese}>-</button>
      </div>
    );
  }
}
