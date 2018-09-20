import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

import Cell from './Cell';

class NutritionsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '300',
      ingredient: {
        nutritions: {
          kcal: 220,
        },
      },
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.props.onChangeCallback(e);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmitCallback();
  }

  render() {
    // let cells = data.map((el, i) => (
    //   <tr key={i}>
    //     <th>
    //       {ingredient.nutrition.type}
    //     </th>
    //     <td>
    //     <Cell  
    //       value={this.state.value}
    //       //value={el.contents}
    //       //onChange={v => { this.props.handleChangeEvent(v, i) }}
    //       onChange={this.onChange}
    //     /> 
    //     </td>
    //   </tr>
    // ));


    // let cells = data.map((el, i) => (
    //   <td key={i}>
    //       <Cell 
    //           value={el.contents}
    //           onChange={v => { this.props.handleChangeEvent(v, i) }} 
    //       />
    //   </td>
    // ));

    const { nutritions } = this.props;

    return (
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col" className="text-muted text-left pl-5">Nutrition</th>
                  <th scope="col" className="text-muted text-right pr-5">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="text-left pl-5">Calories</th>
                  <td className="text-right pr-5">
                    {this.props.isEditable ? (
                    <Cell  
                      kcal={this.state.value}
                      //value={el.contents}
                      //onChange={v => { this.props.handleChangeEvent(v, i) }}
                      onChange={this.onChange}
                    /> 
                    ) : (
                      <span>{this.state.value}</span>
                    )}
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-left pl-5">Fats</th>
                  <td className="text-right pr-5">
                    {isEmpty(nutritions.kcal) ? (<span>Not specified</span>) : (
                      <span>{nutritions.kcal}</span>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
        <div className="container">
          {this.props.isEditable ? <button onClick={this.onSubmit}className="btn btn-success btn-sm">Save Changes</button> : null}
        </div>
      </div>
    )
  }
}
NutritionsTable.defaultProps = {
  isEditable: false,
}

NutritionsTable.propTypes = {
  isEditable: PropTypes.bool.isRequired,
}

export default NutritionsTable;

//TODO: if authorized or possible to edit cells than change edit state else if prompt warning that the cells may not be changed.