import React from 'react';
import './App.css';


class Operators extends React.Component {
  state = {
    operators: [],
    selectedOperator: ""
  }

  componentDidMount() {
    // this list should come from an API residing on the BFF
    const ops = [
      { value: "+", display: "Addition" },
      { value: "-", display: "Subtraction" },
      { value: "*", display: "Multiplication" },
      { value: "/", display: "Division" }
    ];

    this.setState({ operators: ops });
    this.setState({ selectedOperator: ops[0].value });
  }

  render() {
    return (
      <div>
        <select value={ this.state.selectedOperator }
                onChange={(e) => { this.setState({ selectedOperator: e.target.value }) }}>
          {this.state.operators.map((op) => <option key={op.value} value={op.value}>{op.display}</option>)}
        </select>

        <p>Selected operation: {this.state.selectedOperator} </p>        
      </div>
    )
  }
}

export default Operators;
