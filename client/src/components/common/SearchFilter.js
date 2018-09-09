import React, { Component } from 'react';

class SearchFilter extends Component {
  filterUpdate() {
    const val = this.myValue.value;
    this.props.filterCallback(val);
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1>Search created recipes</h1>
          <div className="input-group input-group-lg shadow-sm mb-4">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-lg">Recipes</span>
            </div>
            <input
              type="text"
              ref={(value) => { this.myValue = value; }}
              placeholder="Filter Recipes"
              onChange={this.filterUpdate.bind(this)}
              className="form-control"
              aria-label="Large" aria-describedby="inputGroup-sizing-sm"
            />
            <div className="input-group-append">
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchFilter;
