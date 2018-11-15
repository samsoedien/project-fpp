import React, { Component } from 'react';
import {
  Container,
  InputGroup,
  InputGroupAddon,
  Input,
  Button
} from 'reactstrap';

class SearchBar extends Component {
  filterUpdate() {
    const val = this.myValue.value;
    this.props.filterCallback(val);
  }

  render() {
    return (
      <div className="search-bar">
        <Container>
          <InputGroup size="lg" className="shadow-sm mb-4">
            <InputGroupAddon addonType="prepend">Recipes</InputGroupAddon>
            <input
              type="text"
              placeholder="Filter Recipes"
              ref={value => {
                this.myValue = value;
              }}
              onChange={this.filterUpdate.bind(this)}
              className="form-control"
            />
            <InputGroupAddon addonType="append">
              <Button color="primary">Search</Button>
            </InputGroupAddon>
          </InputGroup>
        </Container>
      </div>
    );
  }
}

export default SearchBar;

// FIXME: refs do not work with reactstrap Input component. regular input is used with form-control className.
