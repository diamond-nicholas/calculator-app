/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import Calculator from '../Logic/Calculator';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    const data = Calculator(this.state, buttonName);
    this.setState(data);
  }

  render() {
    return (
      <>
        <Display />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
