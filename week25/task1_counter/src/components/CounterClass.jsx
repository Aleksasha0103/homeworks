//Классовый компонент:

import React, { Component } from "react";
class CounterClass extends Component {
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };
  render() {
    return <button onClick={this.handleClick}>{this.state.count}</button>;
  }
}

export default CounterClass;
