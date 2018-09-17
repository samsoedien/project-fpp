import React, { Component } from 'react';
// import isEmpty from '../../validation/is-empty'
import Cell from './Cell';

class NutritionsTable extends Component {
  render() {
    // let cells = data.map((el, i) => (
    //   <td key={i}>
    //       <Cell 
    //           value={el.contents}
    //           onChange={v => { this.props.handleChangeEvent(v, i) }} 
    //       />
    //   </td>
    // ));
    return (
      <div className="">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col" className="text-muted text-left pl-5">Nutrition</th>
              <th scope="col" className="text-muted text-right pr-5">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="text-left pl-5">Volume</th>
              <td className="text-right pr-5"><Cell /></td>
            </tr>
            <tr>
              <th scope="row" className="text-left pl-5">Calories</th>
              <td className="text-right pr-5">
                value</td>
            </tr>
            <tr>
              <th scope="row" className="text-left pl-5">Fats</th>
              <td className="text-right pr-5">23 mg</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default NutritionsTable;
