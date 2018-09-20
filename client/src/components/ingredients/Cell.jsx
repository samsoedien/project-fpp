import React, { Component } from 'react';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      editing: false,
    };
  }

  onFocus() {
    this.setState({ editing: true }, () => {
      this.refs.input.focus();
    });
  }

  onBlur() {
    this.setState({ editing: false });
  }

  render() {
    const { kcal, onChange } = this.props; 
    return this.state.editing ?
      <input ref='input' name="value" value={kcal} onChange={e => onChange(e.target.value)} onBlur={() => this.onBlur()} /> 
      : <div onClick={() => this.onFocus()}>{kcal}</div>
  }
}

export default Cell;
