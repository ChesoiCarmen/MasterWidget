import React from 'react';

class Operators extends React.Component {
  state: any = {
    operators: [],
    selectedOperator: ""
  };

  componentDidMount() {
    const ops = [
      { value: "+", display: "Addition" },
      { value: "-", display: "Subtraction" },
      { value: "*", display: "Multiplication" },
      { value: "/", display: "Division" }
    ];

    this.setState({ operators: ops });
    this.setState({ selectedOperator: ops[0].value });
  }

  updateValue(e) {
    this.setState({ selectedOperator: e.target.value })
  };

  render() {
    return (
      <div>
        <select value={this.state.selectedOperator}
                onChange={(e) => this.updateValue(e)}>
          {this.state.operators.map((op) => <option key={op.value} value={op.value}>{op.display}</option>)}
        </select>

        <p>Selected operation: {this.state.selectedOperator} </p>
      </div>
    )
  }
}

export default Operators;
