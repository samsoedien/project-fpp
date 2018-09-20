import React, { Component } from 'react';

class NutritionCellData extends Component {
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
    return this.state.editing
      ? <input ref='input' name="value" value={value} onChange={e => onChange(e.target.value)} onBlur={() => this.onBlur()} /> 
      : <div onClick={() => this.onFocus()}>{value}</div>
  }
}

export default NutritionCellData;

// <th scope="row" className="text-left pl-5">Calories</th>
// <td className="text-right pr-5">
// {this.props.isEditable ? (
// <Cell  
//   kcal={this.state.value}
//   //value={el.contents}
//   //onChange={v => { this.props.handleChangeEvent(v, i) }}
//   onChange={this.onChange}
// /> 
// ) : (
//   <span>{this.state.value}</span>
// )}
// </td>