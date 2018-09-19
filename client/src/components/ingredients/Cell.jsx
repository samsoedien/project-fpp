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
    const { value, onChange } = this.props; 
    return this.state.editing ?
      <input ref='input' name="value" value={value} onChange={e => onChange(e.target.value)} onBlur={() => this.onBlur()} /> 
      : <div onClick={() => this.onFocus()}>{value}mg</div>
  }  
}

export default Cell;
