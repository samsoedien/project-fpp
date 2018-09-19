import React, { Component } from 'react';
// import isEmpty from '../../validation/is-empty'
import Cell from './Cell';

class NutritionsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editting: false,
      value: '23',
      ingredient: {
        nutritions: {
          kcal: 220,
        }
      }
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ value: e });
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
                  <th scope="row" className="text-left pl-5">Volume</th>
                  <td className="text-right pr-5"><Cell /></td>
                </tr>
                <tr>
                  <th scope="row" className="text-left pl-5">Calories</th>
                  <td className="text-right pr-5">
                    <Cell  
                      value={this.state.value}
                      //value={el.contents}
                      //onChange={v => { this.props.handleChangeEvent(v, i) }}
                      onChange={this.onChange}
                    />  
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-left pl-5">Fats</th>
                  <td className="text-right pr-5">
                    <Cell  
                      value={this.state.ingredient.nutritions.kcal}
                      //value={el.contents}
                      //onChange={v => { this.props.handleChangeEvent(v, i) }}
                      onChange={this.onChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NutritionsTable;

//TODO: if authorized or possible to edit cells than change edit state else if prompt warning that the cells may not be changed.