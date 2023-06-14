import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  //------------Increse------------ //

  increse = () => {
    if (this.state.count < 5) {
      this.setState({
        count: this.state.count + 1
      });
    }
  };

  //------------Dicrese------------ //

  dicrese = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Counter class based Component</h1>
        <button disabled={this.state.count < 5 ? false: true} onClick={this.increse}>+</button>
        <span>{this.state.count}</span>
        <button disabled={this.state.count === 0 ? true: false} onClick={this.dicrese}>-</button>
      </div>
    );
  }
}
